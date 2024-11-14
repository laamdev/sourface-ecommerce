import { defineType, defineField } from 'sanity'
import { ForkKnife } from '@phosphor-icons/react'

export const foodType = defineType({
  name: 'food',
  title: 'Dishes',
  type: 'document',
  icon: ForkKnife,
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      order: 'order'
    },
    prepare(select) {
      return {
        title: `#${select.order} - ${select.title}`,
        subtitle: `${select.subtitle.toFixed(2)}€`
      }
    }
  }
})
