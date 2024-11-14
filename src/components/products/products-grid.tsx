'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { ProductCard } from '@/components/products/product-card'

import { cn } from '@/lib/utils'
import { Product } from '../../../sanity.types'

export const ProductsGrid = ({
  products,
  className
}: {
  products: Product[]
  className?: string
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4',
        className
      )}
    >
      {products.map((product: any) => {
        return (
          <AnimatePresence key={product._id}>
            <motion.div
              layout
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductCard key={product._id} product={product} />
            </motion.div>
          </AnimatePresence>
        )
      })}
    </div>
  )
}
