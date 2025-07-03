'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { UserStore, userStore } from './UserStore'

interface Stores {
  userStore: UserStore
}

const stores: Stores = {
  userStore,
}

const StoreContext = createContext<Stores | undefined>(undefined)

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
}

export const useStores = (): Stores => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStores must be used within a StoreProvider')
  }
  return context
}
