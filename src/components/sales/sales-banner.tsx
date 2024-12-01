import Image from 'next/image'

import { getActiveSaleByCouponCode } from '@/sanity/lib/sales/getActiveSaleByCouponCode'
import { COUPON_CODES } from '@/sanity/lib/sales/couponCodes'
import { urlForImage } from '@/sanity/lib/utils'
import { Button } from '../ui/button'

export const SalesBanner = async () => {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.SOURGRAPES)

  if (!sale?.isActive) {
    return null
  }

  return (
    <section className='relative grid gap-x-16 bg-accent px-8 pt-16 sm:grid-cols-2 sm:px-16 sm:pt-0'>
      <div className='flex flex-col justify-center'>
        <h2 className='max-w-3xl font-serif text-5xl font-bold uppercase sm:text-8xl'>
          {sale.title}
        </h2>
        <p className='mt-2 text-xl font-medium'>Get {sale.summary}</p>

        <Button size='lg' className='mt-8 w-fit'>
          Use code {sale.couponCode}
        </Button>
      </div>
      <div className='relative aspect-square'>
        <Image
          src={
            (urlForImage(sale.coverImage)
              ?.height(1080)
              .width(1080)
              .url() as string) ?? ''
          }
          alt={sale.title ?? 'Beer sale.'}
          fill
          className='rounded-b-none bg-transparent object-contain object-center'
        />
      </div>
    </section>
  )
}
