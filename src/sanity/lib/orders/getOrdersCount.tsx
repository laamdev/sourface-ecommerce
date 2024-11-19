import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/lib/live'

export const getOrdersCount = async () => {
  const ORDERS_COUNT_QUERY = defineQuery(`
    count(*[_type == "order"])
  `)

  try {
    const ordersCount = await sanityFetch({
      query: ORDERS_COUNT_QUERY
    })
    return ordersCount.data || 0
  } catch (error) {
    console.error('Error fetching orders count: ', error)
    return 0
  }
}
