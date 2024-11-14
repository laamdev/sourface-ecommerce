import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BeerBottle, JarLabel } from '@phosphor-icons/react/dist/ssr'

import { ProductQuantity } from '@/components/products/product-quantity'
import { Badge } from '@/components/ui/badge'

import { getProductBySlug } from '@/sanity/lib/products/getProductBySlug'
import { urlForImage } from '@/sanity/lib/utils'
import { getFormattedCurrency } from '@/lib/utils'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  props: ProductPageProps
): Promise<Metadata> {
  const params = await props.params
  const { slug } = params

  const product = await getProductBySlug(slug)

  if (!product) {
    return notFound()
  }

  return {
    title: product.name
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  console.log(
    crypto.randomUUID().slice(0, 5) + `>>> Rerendered the product page cache`
  )

  if (!product) {
    return notFound()
  }

  return (
    <div className='grid grid-cols-2'>
      <div className='relative aspect-square border-r-2'>
        <Image
          src={
            urlForImage(product.image)
              ?.height(980)
              .width(980)
              .fit('fill')
              .url() as string
          }
          alt={product.name ?? 'Product.'}
          fill
          className='object-cover object-center'
        />
      </div>
      <div className='flex flex-col p-8'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='font-serif text-7xl font-black uppercase'>
            {product.name}
          </h1>

          <h3 className='font-serif text-3xl font-bold text-stone-700'>
            {getFormattedCurrency(product.price!)}
          </h3>
        </div>

        <div className='mt-8'>
          {/* @ts-expect-error */}
          <ProductQuantity product={product} />
        </div>

        <h2 className='mt-8 font-serif text-4xl font-bold text-stone-700'>
          <span>{`${product.style?.name} / ${product.abv}%`}</span>
        </h2>

        <p className='prose-lg mt-2'>{product.description}</p>

        <Badge className='mt-4 w-fit'>
          {product.size}cl {product.format}
        </Badge>

        {/* <div className='mt-4'>
          <ProductVariants price={product.price} />
        </div> */}

        <div className='mt-8 flex flex-col gap-2'>
          {/* {product.ingredients?.length && (
            <div className='flex items-center gap-2'>
              <Grains size={24} weight='fill' />
              <span>{product.ingredients}</span>
            </div>
          )} */}

          {product.size && product.format === 'Bottle' && (
            <div className='flex items-center gap-2'>
              <BeerBottle size={24} weight='fill' />
              <span>{product.size}ml bottle</span>
            </div>
          )}

          {product.size && product.format === 'Can' && (
            <div className='flex items-center gap-2'>
              <JarLabel size={24} weight='fill' />
              <span>{product.size}ml can</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
