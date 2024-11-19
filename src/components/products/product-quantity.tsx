'use client'

import { useState, useEffect } from 'react'
import { Minus, Plus } from '@phosphor-icons/react'

import { Button } from '@/components/ui/button'

import { useBasketStore } from '@/store/provider'
import { cn } from '@/lib/utils'
import { Loader } from '../globals/loader'
import { Product } from '../../../sanity.types'

export const ProductQuantity = ({
  product,
  disabled = false
}: {
  product: Product
  disabled?: boolean
}) => {
  const { getItemCount, addItem, removeItem } = useBasketStore(state => state)

  const itemCount = getItemCount(product._id)
  // // const { items, addItem } = useBasketStore(state => state)
  // // const [quantity, setQuantity] = useState(1)

  // // const MIN_QUANTITY = 1
  // // const MAX_QUANTITY = 10

  // // // Find the item in the cart
  // // const cartItem = items.find(item => item.id === beer.id)

  // // // Update local quantity state when cart item changes
  // // useEffect(() => {
  // //   if (cartItem) {
  // //     setQuantity(cartItem.quantity)
  // //   } else {
  // //     setQuantity(1)
  // //   }
  // // }, [cartItem])

  // // const handleDecrease = () => {
  // //   if (quantity > MIN_QUANTITY) {
  // //     setQuantity(quantity - 1)
  // //   }
  // // }

  // // const handleIncrease = () => {
  // //   if (quantity < MAX_QUANTITY) {
  // //     setQuantity(quantity + 1)
  // //   }
  // // }

  // // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // //   const newQuantity = Math.max(
  // //     MIN_QUANTITY,
  // //     Math.min(MAX_QUANTITY, parseInt(e.target.value) || 1)
  // //   )
  // //   setQuantity(newQuantity)
  // // }

  // // const handleAddToCart = () => {
  // //   if (cartItem) {
  // //     // updateQuantity(beer.id, quantity)
  // //   } else {
  // //     addItem({ ...beer, quantity })
  // //   }
  // // }

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
          'size-8 sm:size-10'
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
          'size-8 sm:size-10'
        )}
      >
        <Plus className='size-4 sm:size-8' />
      </Button>

      {/* <Button size='lg' onClick={handleAddToCart}>
        {cartItem ? 'Update Cart' : 'Add to Cart'}
      </Button> */}
    </div>
  )
}
