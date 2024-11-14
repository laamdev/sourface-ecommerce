import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getAllDishes = async () => {
  const ALL_DISHES_QUERY = defineQuery(`
    *[_type == "food"] | order(order asc) {
      _id,
      name,
      description,
      price
    }
  `)

  try {
    const dishes = await sanityFetch({
      query: ALL_DISHES_QUERY
    })
    return dishes.data || []
  } catch (error) {
    console.error('Error fetching all dishes: ', error)
    return []
  }
}
