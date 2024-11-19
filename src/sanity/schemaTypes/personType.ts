import { UserIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const personType = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: Rule => Rule.email()
    }),
    defineField({
      name: 'bio',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        })
      ]
    }),
    defineField({
      name: 'bioExcerpt',
      title: 'Bio Excerpt',
      type: 'text'
    }),
    defineField({
      name: 'role',
      title: 'Role',
      description: 'The role of this person in the company.',
      type: 'string'
    }),
    defineField({
      name: 'order',
      title: 'Order',
      description: 'The order in which this person should appear.',
      type: 'number'
    }),
    defineField({
      name: 'isTeamMember',
      title: 'Is Team Member?',
      description: 'Is this person a member of the team?',
      type: 'boolean'
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'object',
      hidden: ({ document }) => !document?.isTeamMember === false,
      fields: [
        defineField({
          name: 'areas',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'string'
            })
          ]
        }),
        defineField({
          name: 'platforms',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'string'
            })
          ]
        }),
        defineField({
          name: 'languages',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'string'
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'isAuthor',
      title: 'Is Author?',
      description: 'Is this person an author?',
      type: 'boolean'
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
})
