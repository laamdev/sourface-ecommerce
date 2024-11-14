import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'

export const getProductsCount = async () => {
  const PRODUCTS_COUNT_QUERY = defineQuery(`
    count(*[_type == "product"])
  `)

  try {
    const productsCount = await sanityFetch({
      query: PRODUCTS_COUNT_QUERY
    })
    return productsCount.data || 0
  } catch (error) {
    console.error('Error fetching products count: ', error)
    return 0
  }
}
