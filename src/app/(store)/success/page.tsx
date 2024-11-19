'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'
import { useBasketStore } from '@/store/provider'
import { CheckCircle } from '@phosphor-icons/react'

// // export const metadata: Metadata = {
// //   title: 'Success'
// // }

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('orderNumber')
  const clearBasket = useBasketStore(state => state.clearBasket)

  useEffect(() => {
    if (orderNumber) {
      clearBasket()
    }
  }, [orderNumber, clearBasket])

  return (
    <div className='mx-auto my-12 flex max-w-lg flex-col items-center justify-center rounded-2xl bg-card p-6'>
      <CheckCircle weight='duotone' className='size-16 text-green-600' />
      <h2 className='mt-4 font-serif text-4xl font-bold'>
        Thank you for your order!
      </h2>
      <div className='mt-8 text-base'>
        <h3>
          <span>Order Number: </span>
          <span className='text-medium text-green-600'>{orderNumber}</span>
        </h3>
        <p className='mt-4'>
          Your order has been confirmed and will be shipped shortly.
        </p>
        <p className='mt-8'>
          A confirmation email has been sent to your registered email address.
        </p>
      </div>
      <div className='mt-8 flex w-full flex-col gap-y-2'>
        <Link
          href={`/orders/${orderNumber}`}
          className={buttonVariants({ className: 'w-full' })}
        >
          View Order Details
        </Link>
        <Link
          href={`/products`}
          className={buttonVariants({ className: '', variant: 'secondary' })}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
