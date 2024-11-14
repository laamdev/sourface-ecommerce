import { createStore } from 'zustand/vanilla'
import { persist } from 'zustand/middleware'

import { Product } from 'sanity.types'

export interface BasketItem {
  product: Product
  quantity: number
}

interface BasketState {
  items: BasketItem[]
}

interface BasketActions {
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  clearItem: (productId: string) => void
  clearBasket: () => void
  getTotalPrice: () => number
  getItemCount: (productId: string) => number
  getGroupedItems: () => BasketItem[]
}

export type BasketStore = BasketState & BasketActions

export const initBasketStore = (): BasketState => {
  return { items: [] }
}

export const defaultInitState: BasketState = {
  items: []
}

export const createBasketStore = (
  initState: BasketState = defaultInitState
) => {
  return createStore<BasketStore>()(
    persist(
      (set, get) => ({
        ...initState,

        addItem: (product: Product) =>
          set(state => {
            const existingItem = state.items.find(
              item => item.product._id === product._id
            )
            if (existingItem) {
              return {
                items: state.items.map(item =>
                  item.product._id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
              }
            } else {
              return { items: [...state.items, { product, quantity: 1 }] }
            }
          }),

        removeItem: (productId: string) =>
          set(state => ({
            items: state.items.reduce((acc, item) => {
              if (item.product._id === productId) {
                if (item.quantity > 1) {
                  acc.push({ ...item, quantity: item.quantity - 1 })
                }
              } else {
                acc.push(item)
              }
              return acc
            }, [] as BasketItem[])
          })),

        clearItem: (productId: string) =>
          set(state => ({
            items: state.items.filter(item => item.product._id !== productId)
          })),

        clearBasket: () => set({ items: [] }),

        getTotalPrice: () => {
          return get().items.reduce(
            (total, item) => total + (item.product.price ?? 0) * item.quantity,
            0
          )
        },

        getItemCount: (productId: string) => {
          const item = get().items.find(item => item.product._id === productId)
          return item ? item.quantity : 0
        },

        getGroupedItems: () => get().items
      }),
      {
        name: 'basket-store'
      }
    )
  )
}
