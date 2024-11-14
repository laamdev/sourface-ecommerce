import { defineType, defineField } from 'sanity'
import { CalendarBlank } from '@phosphor-icons/react'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarBlank,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tasting', value: 'tasting' },
          { title: 'Presentation', value: 'presentation' },
          { title: 'Meet the Brewer', value: 'meet-the-brewer' },
          { title: 'Other', value: 'other' }
        ]
      }
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: Rule => Rule.required(),
      description: 'A short description of the event present in the event card.'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime'
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price'
    },
    prepare(select) {
      return {
        title: `${select.title}`,
        subtitle: `${select.subtitle.toFixed(2)}€`
      }
    }
  }
})
