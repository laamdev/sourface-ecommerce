import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SectionHeading } from '@/components/globals/section-heading'
import { buttonVariants } from '@/components/ui/button'
import { ProductsGrid } from '@/components/products/products-grid'
import { SalesBanner } from '@/components/sales/sales-banner'

import { getFeaturedProducts } from '@/sanity/lib/products/getFeaturedProducts'

export const dynamic = 'force-static'
export const revalidate = 60

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts()

  if (!featuredProducts) {
    return notFound()
  }

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>> Rerendered the home page cache with ${featuredProducts.length} products`
  )

  return (
    <>
      <SalesBanner />

      <section className='px-8 py-16'>
        <SectionHeading title='Latest Drops' />
        <div className='mt-12'>
          {/* @ts-expect-error  */}
          <ProductsGrid products={featuredProducts} />

          <div className='flex items-center justify-center'>
            <Link
              className={buttonVariants({ className: 'mt-12', size: 'lg' })}
              href='/products'
            >
              All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
