import { defineField, defineType } from 'sanity'
import { TagSimple } from '@phosphor-icons/react'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagSimple,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
})
