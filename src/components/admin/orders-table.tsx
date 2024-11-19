import Link from 'next/link'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

import { cn, getFormattedCurrency, getFormattedDate } from '@/lib/utils'
import { Order } from '../../../sanity.types'

interface OrdersTableProps {
  orders: Order[]
}

export const OrdersTable = async ({ orders }: OrdersTableProps) => {
  return (
    <Table>
      <TableCaption>A list of your recent orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>#</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='text-right'>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order: Order) => (
          <TableRow key={order._id}>
            <TableCell className='text-base'>
              <Link href={`/admin/orders/${order.orderNumber}`}>
                {`${order.orderNumber!.slice(0, 5)}...${order.orderNumber!.slice(-5)}`}
              </Link>
            </TableCell>
            <TableCell className='text-base'>{order.email}</TableCell>
            <TableCell className='text-base'>
              {getFormattedDate(order.orderDate!, 'dd/MM/yy')}
            </TableCell>

            <TableCell className=''>
              <Badge
                className={cn('px-2 text-xs capitalize', {
                  'bg-green-100 text-green-800': order.status === 'paid',
                  'bg-red-100 text-red-800': order.status === 'cancelled'
                })}
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className='text-right text-base'>
              {getFormattedCurrency(order.totalPrice!)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
