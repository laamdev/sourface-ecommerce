import { getActiveSaleByCouponCode } from '@/sanity/lib/sales/getActiveSaleByCouponCode'
import { COUPON_CODES } from '@/sanity/lib/sales/couponCodes'

export const SalesBanner = async () => {
  const sale = await getActiveSaleByCouponCode(COUPON_CODES.OPENDAYS)

  if (!sale?.isActive) {
    return null
  }

  return (
    <section className='bg-foreground px-8 py-12 text-background'>
      <h2 className='font-serif text-6xl font-semibold uppercase sm:text-9xl'>
        Open Days Sale
      </h2>
      <p className='mt-2 text-lg'>
        <span>Get 15% off all beer with code </span>
        <span className='font-semibold'>{COUPON_CODES.OPENDAYS}</span>
      </p>
    </section>
  )
}
