import { defineType, defineField } from 'sanity'
import { Question } from '@phosphor-icons/react'

export const faqType = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon: Question,
  fields: [
    defineField({
      name: 'question',
      title: 'Qestion',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'string',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'question'
    },
    prepare(select) {
      return {
        title: `${select.title}`
      }
    }
  }
})
