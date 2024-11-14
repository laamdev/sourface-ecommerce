import { Cube } from '@phosphor-icons/react'
import { defineType, defineField } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: Cube,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
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
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'abv',
      title: 'ABV',
      type: 'number',
      description: 'Alcohol by volume of the beer.',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    }),
    defineField({
      name: 'category',
      title: 'Style',
      type: 'reference',
      to: [{ type: 'category' }]
    }),
    defineField({
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'reference',
      to: [{ type: 'manufacturer' }]
    }),
    defineField({
      name: 'collaborator',
      title: 'Collaborator',
      type: 'reference',
      to: [{ type: 'manufacturer' }]
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'datetime'
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: ['Can', 'Bottle']
      },
      description: 'Select the format or recipient of the beer.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'number',
      description: `Size of the beer's container (cl).`,
      validation: Rule => Rule.required().min(0)
    }),

    defineField({
      name: 'isFeatured',
      title: 'Is Featured?',
      type: 'boolean',
      description: 'Is this product featured on the homepage?'
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'price',
      manufacturer: 'manufacturer.name'
    },
    prepare(select) {
      return {
        title: `${select.title} - ${select.manufacturer}`,
        subtitle: `${select.subtitle}€`,
        media: select.media
      }
    }
  }
})
