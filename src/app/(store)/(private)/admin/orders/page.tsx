import { OrdersTable } from '@/components/admin/orders-table'
import AdminTitle from '@/components/admin/admin-title'

import { getAllOrders } from '@/sanity/lib/orders/getAllOrders'

export default async function OrdersPage() {
  const orders = await getAllOrders()

  return (
    <>
      <AdminTitle text='Orders' />
      <div className='mt-4 w-full sm:mt-8'>
        {/* @ts-expect-error */}
        <OrdersTable orders={orders} />
      </div>
    </>
  )
}
