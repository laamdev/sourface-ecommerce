import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export async function getCustomerOrders(customerId: string) {
  if (!customerId) {
    throw new Error('No userId provided')
  }

  const CUSTOMER_ORDERS_QUERY = defineQuery(`
    *[_type == "order" && clerkUserId == $customerId] | order(orderDate desc) {
      ...,
      products[]{
        ...,
        product->
      }
    }
  `)

  try {
    const customerOrders = await sanityFetch({
      query: CUSTOMER_ORDERS_QUERY,
      params: { customerId }
    })
    return customerOrders.data || []
  } catch (error) {
    console.error('Error fetching orders: ', error)
    return
  }
}
