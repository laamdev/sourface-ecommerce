import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export async function getOrderByOrderId(orderId: string) {
  if (!orderId) {
    throw new Error('No orderId provided')
  }

  const ORDER_QUERY = defineQuery(`
    *[_type == "order" && orderNumber == $orderId][0] {
      ...,
      products[]{
        ...,
        product->
      }
    }
  `)

  try {
    const order = await sanityFetch({
      query: ORDER_QUERY,
      params: { orderId }
    })
    return order.data || null
  } catch (error) {
    console.error('Error fetching order: ', error)
    return
  }
}
