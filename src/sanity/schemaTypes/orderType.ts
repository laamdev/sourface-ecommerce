import { Basket } from '@phosphor-icons/react'
import { defineType, defineField, defineArrayMember } from 'sanity'

export const orderType = defineType({
  name: 'order',
  title: 'Orders',
  type: 'document',
  fields: [
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'stripeCheckoutSessionId',
      title: 'Stripe Checkout Session ID',
      type: 'string'
    }),
    defineField({
      name: 'stripeCustomerId',
      title: 'Stripe Customer ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'clerkUserId',
      title: 'Store User ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Customer Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'stripePaymentIntentId',
      title: 'Stripe Payment Intent ID',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Product Bought',
              type: 'reference',
              to: [{ type: 'product' }]
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity Purchased',
              type: 'number'
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'amountDiscount',
      title: 'Amount Discount',
      type: 'number',
      validation: Rule => Rule.min(0)
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Paid', value: 'paid' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      }
    }),
    defineField({
      name: 'orderDate',
      title: 'order Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      name: 'customerName',
      amount: 'totalPrice',
      currency: 'currency',
      orderId: 'orderNumber',
      email: 'email'
    },
    prepare(select) {
      const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`
      return {
        title: `${select.name} (${orderIdSnippet})`,
        subtitle: `${select.amount} ${select.currency} - ${select.email}`,
        media: Basket
      }
    }
  }
})