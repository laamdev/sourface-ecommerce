import Link from 'next/link'
import Image from 'next/image'

import { cn, getFormattedCurrency } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'

export const ProductCard = ({ product }: { product: any }) => {
  const isOutOfStock = product.stock !== null && product.stock <= 0

  return (
    <Link
      key={product._id}
      href={`/products/${product.slug}`}
      className={cn('flex flex-col', isOutOfStock ? 'opacity-50' : '')}
    >
      <div className='group relative aspect-[4/5] w-full overflow-hidden rounded-2xl'>
        <Image
          src={
            urlForImage(product.image)?.height(980).width(980).url() as string
          }
          alt={product.name}
          fill
          className='rounded-2xl object-cover object-center transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='mt-2 flex flex-col items-center sm:mt-4'>
        <h2 className='text-lg font-bold sm:text-xl'>{product.name}</h2>

        <h3 className='text-sm font-medium text-zinc-700 sm:text-base'>
          {getFormattedCurrency(product.price)}
        </h3>
      </div>
    </Link>
  )
}
