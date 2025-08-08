'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { CartItem, Product } from '../../types'

interface CartState {
  items: CartItem[]
  isOpen: boolean
  total: number
  itemCount: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

interface CartContextType extends CartState {
  addItem: (product: Product, quantity?: number, options?: { size?: string; flavor?: string; customizations?: string }) => void
  addToCart: (item: { id: string; name: string; price: number; image: string; quantity: number }) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === action.payload.product.id &&
                item.selectedSize === action.payload.selectedSize &&
                item.selectedFlavor === action.payload.selectedFlavor
      )

      let newItems: CartItem[]
      
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      } else {
        newItems = [...state.items, action.payload]
      }

      const newTotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        ...state,
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      }
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.product.id !== action.payload)
      const newTotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        ...state,
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      }
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.product.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0)

      const newTotal = newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        ...state,
        items: newItems,
        total: newTotal,
        itemCount: newItemCount,
      }
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0,
        itemCount: 0,
      }

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      }

    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      }

    case 'LOAD_CART': {
      const newTotal = action.payload.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const newItemCount = action.payload.reduce((sum, item) => sum + item.quantity, 0)

      return {
        ...state,
        items: action.payload,
        total: newTotal,
        itemCount: newItemCount,
      }
    }

    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0,
  itemCount: 0,
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const cartItems = JSON.parse(savedCart) as CartItem[]
          dispatch({ type: 'LOAD_CART', payload: cartItems })
        } catch (error) {
          console.error('Error loading cart from localStorage:', error)
        }
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(state.items))
    }
  }, [state.items])

  const addItem = (
    product: Product,
    quantity = 1,
    options?: { size?: string; flavor?: string; customizations?: string }
  ) => {
    const cartItem: CartItem = {
      product,
      quantity,
      selectedSize: options?.size,
      selectedFlavor: options?.flavor,
      customizations: options?.customizations,
    }
    dispatch({ type: 'ADD_ITEM', payload: cartItem })
  }

  const addToCart = (item: { id: string; name: string; price: number; image: string; quantity: number }) => {
    const product: Product = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: '',
      category: '',
      ingredients: [],
      allergens: [],
      inStock: true,
      featured: false
    }
    addItem(product, item.quantity)
  }

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' })
  }

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' })
  }

  const value: CartContextType = {
    ...state,
    addItem,
    addToCart,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
