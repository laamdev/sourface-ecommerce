import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getCategoryBySlug = async (slug: string) => {
  const CATEGORY_BY_SLUG_QUERY = defineQuery(`
    *[_type == "category" && slug.current == $slug] | order(name asc)[0]
  `)

  try {
    const category = await sanityFetch({
      query: CATEGORY_BY_SLUG_QUERY,
      params: { slug }
    })
    return category.data || null
  } catch (error) {
    console.error('Error fetching category: ', error)
    return null
  }
}
