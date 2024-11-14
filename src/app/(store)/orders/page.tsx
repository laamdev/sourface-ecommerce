import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

import { PageTitle } from '@/components/globals/page-title'

import { getMyOrders } from '@/sanity/lib/orders/getMyOrders'
import { urlForImage } from '@/sanity/lib/utils'
import { getFormattedCurrency, getFormattedDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'My Orders'
}

export default async function OrdersPage() {
  const { userId } = await auth()

  if (!userId) {
    return redirect('/')
  }

  const orders = await getMyOrders(userId)

  if (!orders) {
    return notFound()
  }

  return (
    <div className='py-12'>
      <PageTitle title='My Orders' />
      <div className='mx-auto max-w-4xl'>
        <h2 className='sr-only'>Recent orders</h2>

        <div className='flex flex-col gap-y-8 sm:gap-y-16'>
          {orders.map(order => (
            <div key={order.orderNumber} className='rounded-2xl bg-card p-12'>
              <h3 className='sr-only'>
                Order placed on{' '}
                <time dateTime={getFormattedDate(order.orderDate!)}>
                  {getFormattedDate(order.orderDate!)}
                </time>
              </h3>

              <div className='bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8'>
                <dl className='flex-auto space-y-4 divide-y divide-gray-200 text-sm text-gray-600 md:grid md:grid-cols-3 md:gap-x-6 md:space-y-0 md:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8'>
                  <div className='flex justify-between md:block'>
                    <dt className='font-medium text-gray-900'>Order number</dt>
                    <dd className='md:mt-1'>{order.orderNumber}</dd>
                  </div>
                  <div className='flex justify-between pt-4 md:block md:pt-0'>
                    <dt className='font-medium text-gray-900'>Date placed</dt>
                    <dd className='md:mt-1'>
                      <time dateTime={getFormattedDate(order.orderDate!)}>
                        {getFormattedDate(order.orderDate!)}
                      </time>
                    </dd>
                  </div>
                  <div className='flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0'>
                    <dt>Total amount</dt>
                    <dd className='md:mt-1'>
                      {getFormattedCurrency(order.totalPrice!)}
                    </dd>
                  </div>
                </dl>
                <div className='mt-6 space-y-4 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0'>
                  <Link
                    href={`/orders/${order.orderNumber!}`}
                    className='flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:w-auto'
                  >
                    View Order
                    <span className='sr-only'>{order.orderNumber!}</span>
                  </Link>
                  <a
                    // @ts-expect-error
                    href={order.invoice.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:w-auto'
                  >
                    View Invoice
                    <span className='sr-only'>
                      for order {order.orderNumber!}
                    </span>
                  </a>
                </div>
              </div>

              <div className='mt-6 flow-root px-4 sm:mt-10 sm:px-0'>
                <div className='-my-6 divide-y divide-gray-200 sm:-my-10'>
                  {order.products?.map(({ product, quantity }) => (
                    <div key={product?._id} className='flex py-6 sm:py-10'>
                      <div className='min-w-0 flex-1 lg:flex lg:flex-col'>
                        <div className='lg:flex-1'>
                          <div className='sm:flex'>
                            <div>
                              <h4 className='font-medium text-gray-900'>
                                {product?.name}
                              </h4>
                              <p className='mt-2 hidden text-sm text-gray-500 sm:block'>
                                {product?.description}
                              </p>
                            </div>
                            <p className='mt-1 font-medium text-gray-900 sm:ml-6 sm:mt-0'>
                              {product?.price}
                            </p>
                          </div>
                          <div className='mt-2 flex text-sm font-medium sm:mt-4'>
                            <a
                              href={`/products/${product?.slug?.current}`}
                              className='text-indigo-600 hover:text-indigo-500'
                            >
                              View Product
                            </a>
                            {/* <div className='ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6'>
                              <a
                                href='#'
                                className='text-indigo-600 hover:text-indigo-500'
                              >
                                Buy Again
                              </a>
                            </div> */}
                          </div>
                        </div>
                        {/* <div className='mt-6 font-medium'>
                          {product?.status === 'delivered' ? (
                            <div className='flex space-x-2'>
                              <Check
                                aria-hidden='true'
                                className='size-6 flex-none text-green-500'
                              />
                              <p>
                                Delivered
                                <span className='hidden sm:inline'>
                                  {' '}
                                  on{' '}
                                  <time dateTime={product.datetime}>
                                    {product.date}
                                  </time>
                                </span>
                              </p>
                            </div>
                          ) : product.status === 'out-for-delivery' ? (
                            <p>Out for delivery</p>
                          ) : product.status === 'cancelled' ? (
                            <p className='text-gray-500'>Cancelled</p>
                          ) : null}
                        </div> */}
                      </div>
                      <div className='ml-4 shrink-0 sm:order-first sm:m-0 sm:mr-6'>
                        <div className='relative aspect-square size-24'>
                          <Image
                            src={
                              urlForImage(product?.image)
                                ?.height(1080)
                                .width(1080)
                                .fit('fill')
                                .url() as string
                            }
                            alt={product?.name ?? 'Product.'}
                            fill
                            className='col-start-2 col-end-3 size-20 rounded-lg object-cover object-center sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:size-40 lg:size-52'
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
