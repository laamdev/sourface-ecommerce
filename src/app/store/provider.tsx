'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type BasketStore, createBasketStore, initBasketStore } from '@/store'

export type BasketStoreApi = ReturnType<typeof createBasketStore>

export const BasketStoreContext = createContext<BasketStoreApi | undefined>(
  undefined
)

export interface BasketStoreProviderProps {
  children: ReactNode
}

export const BasketStoreProvider = ({ children }: BasketStoreProviderProps) => {
  const storeRef = useRef<BasketStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createBasketStore(initBasketStore())
  }

  return (
    <BasketStoreContext.Provider value={storeRef.current}>
      {children}
    </BasketStoreContext.Provider>
  )
}

export const useBasketStore = <T,>(selector: (store: BasketStore) => T): T => {
  const basketStoreContext = useContext(BasketStoreContext)

  if (!basketStoreContext) {
    throw new Error(`useBasketStore must be used within BasketStoreProvider`)
  }

  return useStore(basketStoreContext, selector)
}
