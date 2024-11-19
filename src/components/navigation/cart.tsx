'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Basket, Trash } from '@phosphor-icons/react'
import { SignInButton, useAuth, useUser } from '@clerk/nextjs'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button, buttonVariants } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ProductQuantity } from '@/components/products/product-quantity'
import { Loader } from '@/components/globals/loader'

import { urlForImage } from '@/sanity/lib/utils'
import { useBasketStore } from '@/store/provider'
import { createCheckoutSession } from '@/actions/createCheckoutSession'

export type Metadata = {
  orderNumber: string
  customerName: string
  customerEmail: string
  clerkUserId: string
}

export const Cart = () => {
  const { isSignedIn } = useAuth()
  const { user } = useUser()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { getGroupedItems, items, clearItem, clearBasket, getTotalPrice } =
    useBasketStore(state => state)

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const groupedItems = getGroupedItems()
  const totalPrice = getTotalPrice()

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <Loader />
  }

  const handleCheckout = async () => {
    if (!isSignedIn) return
    setIsLoading(true)

    try {
      const metadata: Metadata = {
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? 'Unknown',
        customerEmail: user?.emailAddresses[0].emailAddress ?? 'Unknown',
        clerkUserId: user!.id
      }

      const checkoutUrl = await createCheckoutSession(groupedItems, metadata)

      if (checkoutUrl) {
        window.location.href = checkoutUrl
      }
    } catch (error) {
      console.log('Error creating checkout session', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className='relative'>
          <Basket className='size-6 sm:size-8' />
          <span className='absolute -right-2 -top-2 flex size-4 min-w-[20px] items-center justify-center rounded-full bg-primary text-xs text-white sm:size-5'>
            {itemCount}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='border-b'>
          <SheetTitle className='flex gap-x-2 uppercase text-white'>
            {`Your Cart`}
            {groupedItems.length > 0 && <span>({itemCount})</span>}
          </SheetTitle>
        </SheetHeader>
        <div className='p-4 sm:p-8'>
          {groupedItems.length !== 0 ? (
            <div>
              <ScrollArea className='h-[65vh] overflow-y-scroll'>
                {groupedItems.map(({ product }) => {
                  return (
                    <div
                      key={product._id}
                      className='relative flex gap-x-4 py-4'
                    >
                      <div>
                        <Image
                          src={
                            urlForImage(product.image)
                              ?.height(980)
                              .width(980)
                              .fit('fill')
                              .url() as string
                          }
                          alt={product.name!}
                          width={100}
                          height={100}
                          className='rounded'
                        />
                      </div>
                      <div>
                        <h3 className='text-base font-medium'>
                          {product.name}
                        </h3>
                        <p className='text-lg font-bold'>{`${product.price!.toFixed(2)} €`}</p>
                        <div className='mt-2'>
                          <ProductQuantity product={product} />
                        </div>
                      </div>

                      <button
                        onClick={() => clearItem(product._id)}
                        className='absolute right-2 top-0'
                      >
                        <Trash weight='fill' size={16} />
                      </button>
                    </div>
                  )
                })}
              </ScrollArea>
              <div className='absolute inset-x-0 bottom-0 bg-zinc-100 p-4'>
                <div className='flex items-center justify-between'>
                  <p className='text-lg'>Subtotal</p>
                  <h4 className='text-xl font-bold'>{`${totalPrice.toFixed(2)} €`}</h4>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                  {isSignedIn ? (
                    <Button className='mx-auto w-fit' onClick={handleCheckout}>
                      Checkout
                    </Button>
                  ) : (
                    <SignInButton mode='modal'>
                      <SheetClose asChild>
                        <Button className='mx-auto w-fit'>
                          Sign in to checkout
                        </Button>
                      </SheetClose>
                    </SignInButton>
                  )}
                  {items.length > 0 && (
                    <Button
                      variant='secondary'
                      onClick={clearBasket}
                      className='mx-auto w-fit'
                    >
                      Clear cart
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className='mt-8 flex flex-col gap-y-4'>
              <p className='text-center text-3xl dark:text-muted-foreground'>
                This cart is empty!
              </p>
              <div className='mx-auto mt-8'>
                <SheetClose asChild className=''>
                  <Link
                    href='/beers'
                    className={buttonVariants({
                      className: 'w-fit',
                      variant: 'secondary'
                    })}
                  >
                    Continue shopping
                  </Link>
                </SheetClose>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
