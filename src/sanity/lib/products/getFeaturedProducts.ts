import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getFeaturedProducts = async () => {
  const FEATURED_PRODUCTS_QUERY = defineQuery(`
    *[_type == "product" && isFeatured][0...4] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      price,
      image,
      "manufacturer": manufacturer->name,
      "style": category->name,
    }
  `)

  try {
    const products = await sanityFetch({
      query: FEATURED_PRODUCTS_QUERY
    })
    return products.data || []
  } catch (error) {
    console.error('Error fetching featured products: ', error)
    return []
  }
}
