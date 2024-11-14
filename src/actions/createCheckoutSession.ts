'use server'

import stripe from '@/lib/stripe'
import { urlForImage } from '@/sanity/lib/utils'
import { BasketItem } from '@/store'

export type Metadata = {
  orderNumber: string
  customerName: string
  customerEmail: string
  clerkUserId: string
}

export type GroupedBasketItem = {
  product: BasketItem['product']
  quantity: number
}

export async function createCheckoutSession(
  items: GroupedBasketItem[],
  metadata: Metadata
) {
  try {
    const itemsWithoutPrice = items.filter(item => !item.product.price)
    if (itemsWithoutPrice.length > 0) {
      throw new Error('Some items do not have a price')
    }

    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1
    })

    let customerId: string | undefined
    if (customers.data.length > 0) {
      customerId = customers.data[0].id
    }

    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? `${process.env.NEXT_PUBLIC_PRODUCTION_URL}`
        : `${process.env.NEXT_PUBLIC_BASE_URL}`

    const successUrl = `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`
    const cancelUrl = `${baseUrl}`

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_creation: !customerId ? 'always' : undefined,
      customer_email: !customerId ? metadata.customerEmail : undefined,
      metadata,
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: successUrl,
      cancel_url: cancelUrl,
      line_items: items.map(item => ({
        quantity: item.quantity,
        price_data: {
          currency: 'eur',
          unit_amount: Math.round(item.product.price! * 100),
          product_data: {
            name: item.product.name || 'Unnamed Product',
            description: `Product ID: ${item.product._id}`,
            metadata: {
              productId: item.product._id
            },
            images: item.product.image
              ? [
                  urlForImage(item.product.image)!
                    .height(980)
                    .width(980)
                    .fit('fill')
                    .url() as string
                ]
              : undefined
          }
        }
      })),
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: 'Invoice for your purchase',
          metadata: {
            orderNumber: metadata.orderNumber
          }
        }
      }
    })

    return session.url
  } catch (error) {
    console.log('Error creating checkout session', error)
  }
}
