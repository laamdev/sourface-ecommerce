'use client'

import { useState, useEffect } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'

import { useBasketStore } from '@/store/provider'
import { cn } from '@/lib/utils'
import { Loader } from '../globals/loader'
import { Product } from '../../../sanity.types'

export const ProductQuantityCart = ({
  product,
  disabled = false
}: {
  product: Product
  disabled?: boolean
}) => {
  const { getItemCount, addItem, removeItem } = useBasketStore(state => state)

  const itemCount = getItemCount(product._id)
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='flex items-center gap-x-4'>
      <Button
        size='icon'
        onClick={() => removeItem(product._id)}
        disabled={itemCount === 0 || disabled}
        className={cn(
          itemCount === 0 && 'cursor-not-allowed opacity-50',
          'size-4 sm:size-6'
        )}
      >
        <Minus />
      </Button>
      {!isClient ? (
        <Loader />
      ) : (
        <span className='text-lg sm:text-2xl'>{itemCount}</span>
      )}
      <Button
        size='icon'
        onClick={() => addItem(product)}
        disabled={itemCount >= product.stock! || disabled}
        className={cn(
          itemCount >= product.stock! && 'cursor-not-allowed opacity-50',
          'size-4 sm:size-6'
        )}
      >
        <Plus className='size-4 sm:size-4' />
      </Button>

      {/* <Button size='lg' onClick={handleAddToCart}>
        {cartItem ? 'Update Cart' : 'Add to Cart'}
      </Button> */}
    </div>
  )
}
