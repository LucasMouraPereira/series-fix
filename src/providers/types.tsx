import { ReactNode } from 'react'
import type { TVShowCard, TVShowSchedule } from 'src/utils/types/tvShows'

type ShowContextType = {
  showSchedule: TVShowSchedule | null
  setShowSchedule: (schedule: TVShowSchedule | null) => void
}

type ShowProviderProps = {
  children: ReactNode
  pageData: TVShowSchedule
}

export type { TVShowCard, TVShowSchedule, ShowContextType, ShowProviderProps }
