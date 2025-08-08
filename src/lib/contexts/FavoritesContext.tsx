'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { Product } from '../../types'

interface FavoritesState {
  items: Product[]
  isOpen: boolean
}

type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: Product }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'TOGGLE_FAVORITES' }
  | { type: 'OPEN_FAVORITES' }
  | { type: 'CLOSE_FAVORITES' }
  | { type: 'LOAD_FAVORITES'; payload: Product[] }

interface FavoritesContextType extends FavoritesState {
  addFavorite: (product: Product) => void
  removeFavorite: (productId: string) => void
  isFavorite: (productId: string) => boolean
  toggleFavorites: () => void
  openFavorites: () => void
  closeFavorites: () => void
  favoriteCount: number
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      if (state.items.find(item => item.id === action.payload.id)) {
        return state
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    }

    case 'REMOVE_FAVORITE': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    }

    case 'TOGGLE_FAVORITES': {
      return {
        ...state,
        isOpen: !state.isOpen
      }
    }

    case 'OPEN_FAVORITES': {
      return {
        ...state,
        isOpen: true
      }
    }

    case 'CLOSE_FAVORITES': {
      return {
        ...state,
        isOpen: false
      }
    }

    case 'LOAD_FAVORITES': {
      return {
        ...state,
        items: action.payload
      }
    }

    default:
      return state
  }
}

const initialState: FavoritesState = {
  items: [],
  isOpen: false
}

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState)

  // Load favorites from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favorites')
      if (savedFavorites) {
        try {
          const favoriteItems = JSON.parse(savedFavorites) as Product[]
          dispatch({ type: 'LOAD_FAVORITES', payload: favoriteItems })
        } catch (error) {
          console.error('Error loading favorites from localStorage:', error)
        }
      }
    }
  }, [])

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(state.items))
    }
  }, [state.items])

  const addFavorite = (product: Product) => {
    dispatch({ type: 'ADD_FAVORITE', payload: product })
  }

  const removeFavorite = (productId: string) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: productId })
  }

  const isFavorite = (productId: string) => {
    return state.items.some(item => item.id === productId)
  }

  const toggleFavorites = () => {
    dispatch({ type: 'TOGGLE_FAVORITES' })
  }

  const openFavorites = () => {
    dispatch({ type: 'OPEN_FAVORITES' })
  }

  const closeFavorites = () => {
    dispatch({ type: 'CLOSE_FAVORITES' })
  }

  const value: FavoritesContextType = {
    ...state,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorites,
    openFavorites,
    closeFavorites,
    favoriteCount: state.items.length
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
