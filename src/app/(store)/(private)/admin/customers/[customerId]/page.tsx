import AdminTitle from '@/components/admin/admin-title'
import { OrdersTable } from '@/components/admin/orders-table'

import { getCustomerOrders } from '@/sanity/lib/customers/getCustomerOrders'

interface CustomerPageProps {
  params: Promise<{
    customerId: string
  }>
}

export default async function CustomerPage({ params }: CustomerPageProps) {
  const { customerId } = await params

  const customerOrders = await getCustomerOrders(customerId)

  if (!customerOrders) {
    return <div>No orders found for this customer.</div>
  }

  return (
    <div>
      <AdminTitle text={`${customerOrders[0].customerName}'s Orders`} />
      <div className='my-4 sm:my-8'>
        {/* @ts-expect-error */}
        <OrdersTable orders={customerOrders} />
      </div>
    </div>
  )
}
