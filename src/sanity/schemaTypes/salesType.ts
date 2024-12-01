import { defineType, defineField } from 'sanity'

export const salesType = defineType({
  name: 'sale',
  title: 'Sale',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sale Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text'
    }),
    defineField({
      name: 'description',
      title: 'Sale Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'discountAmount',
      title: 'Discount Amount',
      type: 'number',
      description: 'Amount off in percentage or fixed value.'
    }),
    defineField({
      name: 'couponCode',
      title: 'Coupon Code',
      type: 'string'
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'validFrom',
      title: 'Valid From',
      type: 'datetime'
    }),
    defineField({
      name: 'validUntil',
      title: 'Valid Until',
      type: 'datetime'
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      description: 'Toggle to activate/deactivate the sale.',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      discountAmount: 'discountAmount',
      couponCode: 'couponCode',
      isActive: 'isActive'
    },
    prepare(select) {
      const { title, discountAmount, couponCode, isActive } = select
      const status = isActive ? 'Active' : 'Inactive'
      return {
        title,
        subtitle: `${discountAmount}% off — Code: ${couponCode} - ${status}`
      }
    }
  }
})
