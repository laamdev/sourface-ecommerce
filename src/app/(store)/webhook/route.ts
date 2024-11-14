import Stripe from 'stripe'
import { headers } from 'next/headers'

import stripe from '@/lib/stripe'
import { backendClient } from '@/sanity/lib/backendClient'
import { NextRequest, NextResponse } from 'next/server'

export type Metadata = {
  orderNumber: string
  customerName: string
  customerEmail: string
  clerkUserId: string
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = await headers()
  const sig = headersList.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    return NextResponse.json({ error: 'No webhook secret' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    return NextResponse.json(
      { error: `Webhook Error: ${err}` },
      { status: 400 }
    )
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    console.log('Session data:', JSON.stringify(session, null, 2)) // Log session data
    try {
      const order = await createOrderInSanity(session)
      console.log('Order created in Sanity:', order)
    } catch (err) {
      console.error('Error creating order in Sanity:', err)
      return NextResponse.json(
        { error: 'Error creating order in Sanity' },
        { status: 500 }
      )
    }
  }

  return NextResponse.json({ received: true })
}

async function createOrderInSanity(session: Stripe.Checkout.Session) {
  const {
    id,
    amount_total,
    currency,
    metadata,
    payment_intent,
    customer,
    total_details
  } = session

  const { orderNumber, customerName, customerEmail, clerkUserId } =
    metadata as Metadata

  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    id,
    {
      expand: ['data.price.product']
    }
  )

  console.log(JSON.stringify(lineItemsWithProduct, null, 2), 'XXX')

  const sanityProducts = lineItemsWithProduct.data.map(item => ({
    _key: crypto.randomUUID(),
    product: {
      _type: 'reference',
      _ref: (item.price?.product as Stripe.Product)?.metadata?.productId
    },
    quantity: item.quantity || 0
  }))

  // Retrieve the invoice
  let invoice = null
  if (session.invoice) {
    try {
      invoice = await stripe.invoices.retrieve(session.invoice as string)
      console.log('Invoice retrieved:', invoice)
    } catch (err) {
      console.error('Error retrieving invoice:', err)
    }
  } else {
    console.log('No invoice found in session')
  }

  const order = await backendClient.create({
    _type: 'order',
    orderNumber,
    stripeCheckoutSessionId: id,
    stripePaymentIntentId: payment_intent,
    customerName,
    stripeCustomerId: customer,
    clerkUserId: clerkUserId,
    email: customerEmail,
    currency,
    amountDiscount: total_details?.amount_discount
      ? total_details.amount_discount / 100
      : 0,
    products: sanityProducts,
    totalPrice: amount_total ? amount_total / 100 : 0,
    status: 'paid',
    orderDate: new Date().toISOString(),
    invoice: invoice
      ? {
          id: invoice.id,
          amount_paid: invoice.amount_paid / 100,
          amount_due: invoice.amount_due / 100,
          status: invoice.status,
          url: invoice.hosted_invoice_url
        }
      : null
  })

  return order
}
