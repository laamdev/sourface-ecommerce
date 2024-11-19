import { defineQuery } from 'next-sanity'
import { sanityFetch } from '../live'

export async function getAllUniqueCustomers() {
  const ALL_CUSTOMERS_QUERY = defineQuery(`
    *[_type == "order"] {
      customerName,
      email,
      clerkUserId
    }
  `)

  try {
    const orders = await sanityFetch({
      query: ALL_CUSTOMERS_QUERY
    })

    const uniqueCustomersMap = new Map()
    orders.data.forEach(order => {
      const key = `${order.clerkUserId}`
      if (!uniqueCustomersMap.has(key)) {
        uniqueCustomersMap.set(key, {
          name: order.customerName,
          email: order.email,
          id: order.clerkUserId
        })
      }
    })

    const uniqueCustomers = Array.from(uniqueCustomersMap.values())
    return uniqueCustomers
  } catch (error) {
    console.error('Error fetching unique customers: ', error)
    return []
  }
}
