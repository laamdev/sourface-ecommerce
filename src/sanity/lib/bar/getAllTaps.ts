import { defineQuery } from 'next-sanity'

import { sanityFetch } from '@/sanity/lib/live'

export const getAllTaps = async () => {
  const ALL_TAPS_QUERY = defineQuery(`
    *[_type == "tap"] | order(tapNumber desc) {
      _id,
      tapNumber,
      beerName,
      breweryName,
      beerStyle,
      abv,
      halfPintPrice,
      pintPrice
    }
  `)

  try {
    const products = await sanityFetch({
      query: ALL_TAPS_QUERY
    })
    return products.data || []
  } catch (error) {
    console.error('Error fetching all taps: ', error)
    return []
  }
}
