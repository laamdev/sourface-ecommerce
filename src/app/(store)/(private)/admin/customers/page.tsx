import Link from 'next/link'

import AdminTitle from '@/components/admin/admin-title'

import { getAllUniqueCustomers } from '@/sanity/lib/customers/getAllUniqueCustomers'

export default async function CustomersPage() {
  const customers = await getAllUniqueCustomers()
  return (
    <div>
      <AdminTitle text='Customers' />

      <div className='mt-4 sm:mt-8'>
        {customers.map(customer => (
          <Link href={`/admin/customers/${customer.id}`}>{customer.name}</Link>
        ))}
      </div>
    </div>
  )
}
