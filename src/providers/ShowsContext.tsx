'use client'
import React, { createContext, useContext, useState } from 'react'
import type {
  ShowContextType,
  TVShowSchedule,
  ShowProviderProps,
} from './types'

const ShowContext = createContext<ShowContextType | undefined>(undefined)

export const useShowContext = () => {
  const context = useContext(ShowContext)
  if (!context) {
    throw new Error('useShowContext must be used within a ShowProvider')
  }
  return context
}

export const ShowProvider = ({ children, pageData }: ShowProviderProps) => {
  const [showSchedule, setShowSchedule] = useState<TVShowSchedule | null>(
    pageData
  )

  return (
    <ShowContext.Provider value={{ showSchedule, setShowSchedule }}>
      {children}
    </ShowContext.Provider>
  )
}
