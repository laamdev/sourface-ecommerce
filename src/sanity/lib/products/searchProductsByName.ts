import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const searchProductsByName = async (searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
    *[_type == "product" && name match $searchParam] | order(name asc)
  `)

  try {
    // use sanityFetch to send the query and pass the search param with a wildcard
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*` // append wildcard for partial match
      }
    })

    // return the list pf products or an empty array if none are found
    return products.data || []
  } catch (error) {
    console.error('Error fetching product search: ', error)
    return []
  }
}
