import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
    *[_type == "category"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
    }
  `)

  try {
    const products = await sanityFetch({
      query: ALL_CATEGORIES_QUERY
    })
    return products.data || []
  } catch (error) {
    console.error('Error fetching all categories: ', error)
    return []
  }
}
