import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import AdminTitle from '@/components/admin/admin-title'

import { getFormattedCurrency, getFormattedDate } from '@/lib/utils'
import { getOrderByOrderId } from '@/sanity/lib/orders/getOrderById'
import { urlForImage } from '@/sanity/lib/utils'

interface OrderPageProps {
  params: Promise<{
    orderId: string
  }>
}

export async function generateMetadata(
  props: OrderPageProps
): Promise<Metadata> {
  const params = await props.params
  const { orderId } = params

  const order = await getOrderByOrderId(orderId)

  if (!order) {
    return notFound()
  }

  return {
    title: order.customerName
  }
}

export default async function OrderPage({ params }: OrderPageProps) {
  const { orderId } = await params

  const order = await getOrderByOrderId(orderId)

  if (!order) {
    return notFound()
  }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <AdminTitle text='Order Summary' />
        <div>
          {/* @ts-expect-error */}
          {order.invoice && (
            <a
              //  @ts-expect-error
              href={order?.invoice?.url ?? '/'}
              target='_blank'
              rel='noopener noreferrer'
              className={buttonVariants()}
            >
              View Invoice
              <span className='sr-only'>for order {order.orderNumber!}</span>
            </a>
          )}
        </div>
      </div>
      <div className='mx-auto my-8 rounded-2xl bg-card p-12 sm:my-16'>
        <div className='flex items-center justify-between'>
          <dl className='text-sm font-medium'>
            <dt className='text-stone-900'>Order number</dt>
            <dd className='mt-2.5 font-bold text-yellow-600'>
              {order.orderNumber}
            </dd>
          </dl>
          <dl className='text-sm font-medium'>
            <dt className='text-stone-900'>Order date</dt>
            <dd className='mt-2.5 font-bold'>
              {getFormattedDate(order.orderDate!)}
            </dd>
          </dl>
        </div>

        <ul
          role='list'
          className='mt-6 divide-y divide-stone-400 border-t border-stone-400 text-sm font-medium text-stone-500'
        >
          {order.products?.map(({ product, quantity }) => (
            <li
              key={product?._id}
              className='flex items-center justify-between py-6'
            >
              <div className='flex items-center gap-x-2'>
                <div className='relative aspect-square size-12'>
                  <Image
                    src={
                      urlForImage(product?.image)
                        ?.height(1080)
                        .width(1080)
                        .fit('fill')
                        .url() as string
                    }
                    alt={product?.name ?? 'Product'}
                    fill
                    className='rounded-lg bg-stone-100 object-cover object-center'
                  />
                </div>
                <div className='flex-auto'>
                  <Link
                    href={`/products/${product?.slug?.current}`}
                    className='font-serif text-2xl font-bold text-foreground'
                  >
                    {product?.name}
                  </Link>
                </div>
              </div>

              <p className='flex-none font-medium text-stone-900'>
                {`x ${quantity}`}
              </p>

              <p className='flex-none font-medium text-stone-900'>
                {getFormattedCurrency(product?.price!)}
              </p>
            </li>
          ))}
        </ul>

        <dl className='space-y-6 border-t border-stone-400 pt-6 text-sm font-medium text-stone-500'>
          <div className='flex justify-between'>
            <dt>Subtotal</dt>
            <dd className='text-stone-900'>
              {getFormattedCurrency(order.totalPrice! + order?.amountDiscount!)}
            </dd>
          </div>

          <div className='flex justify-between'>
            <dt>Discount</dt>
            <dd className='text-stone-900'>
              - {getFormattedCurrency(order.amountDiscount!)}
            </dd>
          </div>
          {/* 
        <div className='flex justify-between'>
          <dt>Taxes</dt>
          <dd className='text-stone-900'>$6.40</dd>
        </div> */}

          <div className='flex items-center justify-between border-t border-stone-400 pt-6 text-stone-900'>
            <dt className='text-base'>Total</dt>
            <dd className='text-base'>
              {getFormattedCurrency(order.totalPrice!)}
            </dd>
          </div>
        </dl>

        <dl className='mt-16 grid grid-cols-2 gap-x-4 text-sm text-stone-600'>
          <div>
            <dt className='font-medium text-stone-900'>Customer Info</dt>
            <dd className='mt-2'>
              <address className='not-italic'>
                <span className='block'>{order.customerName}</span>
                <span className='block'>{order.email}</span>
                {/* <span className='block'>Toronto, ON N3Y 4H8</span> */}
              </address>
            </dd>
          </div>
          <div>
            <dt className='font-medium text-stone-900'>Payment Information</dt>
            <dd className='mt-2 space-y-2 sm:flex sm:space-x-4 sm:space-y-0'>
              <Badge className='bg-green-600 text-sm capitalize text-white'>
                {order.status}
              </Badge>
            </dd>
          </div>
        </dl>

        <div className='mt-16 flex w-full justify-center gap-x-4 border-t py-6'>
          <Link
            href={`/products`}
            className={buttonVariants({ className: '' })}
          >
            Message Customer
          </Link>
          <Link
            href={`/orders`}
            className={buttonVariants({ className: '', variant: 'outline' })}
          >
            See Customer's Orders
          </Link>
        </div>
      </div>
    </div>
  )
}
