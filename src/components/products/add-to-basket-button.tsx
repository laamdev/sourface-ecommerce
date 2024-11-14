'use client'

import { useEffect, useState } from 'react'

import { useBasketStore } from '@/store/provider'
import { Product } from 'sanity.types'

interface AddToBasketButtonProps {
  product: Product
  disabled?: boolean
}

export const AddToBasketButton = ({ product }: AddToBasketButtonProps) => {
  const { getItemCount } = useBasketStore(state => state)

  const itemCount = getItemCount(product._id)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div>
      <button></button>
      <span>{itemCount}</span>
    </div>
  )
}
