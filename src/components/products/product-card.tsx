import Link from 'next/link'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'

import { cn } from '@/lib/utils'
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
      <div className='mt-4 flex flex-col items-center'>
        <h2 className='mt-1 text-xl font-bold'>{product.name}</h2>

        <h3 className='text-base font-medium text-zinc-700'>
          {product.price.toFixed(2)} €
        </h3>

        {/* <p className='mt-2 line-clamp-2 text-sm text-gray-600'>
          {product.description
            ?.map(block =>
              block._type === 'block'
                ? block.children?.map(child => child.text).join('')
                : ''
            )
            .join(' ') || 'No description available.'}
        </p> */}
      </div>
    </Link>
  )
}
