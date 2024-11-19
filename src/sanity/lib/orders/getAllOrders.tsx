import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export async function getAllOrders() {
  const ALL_ORDERS_QUERY = defineQuery(`
    *[_type == "order"] | order(orderDate desc) {
      ...,
      products[]{
        ...,
        product->
      }
    }
  `)

  try {
    const orders = await sanityFetch({
      query: ALL_ORDERS_QUERY
    })
    return orders.data || []
  } catch (error) {
    console.error('Error fetching orders: ', error)
    return
  }
}
