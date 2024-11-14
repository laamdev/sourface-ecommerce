import { Hash } from '@phosphor-icons/react'
import { defineType, defineField } from 'sanity'

export const tapType = defineType({
  name: 'tap',
  title: 'Taps',
  type: 'document',
  icon: Hash,
  fields: [
    defineField({
      name: 'tapNumber',
      title: 'Tap Number',
      type: 'number',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'beerName',
      title: 'Beer Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'breweryName',
      title: 'Brewery Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'beerStyle',
      title: 'Beer Style',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'abv',
      title: 'Alcohol Percentage',
      type: 'number',
      description: 'Alcohol by volume of the beer.',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'halfPintPrice',
      title: 'Half-Pint Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'pintPrice',
      title: 'Pint Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    })
  ],
  preview: {
    select: {
      title: 'beerName',
      subtitle: 'breweryName',
      order: 'tapNumber'
    },
    prepare(select) {
      return {
        title: `#${select.order} - ${select.title}`,
        subtitle: `${select.subtitle}`
      }
    }
  }
})
