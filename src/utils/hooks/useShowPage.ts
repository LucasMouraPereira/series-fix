import { useEffect, useState } from 'react'
import { Show, TVShowCard } from '../types/tvShows'
import { buildUrl } from 'src/utils/functions/url'
import { fetchData } from 'src/utils/services/api'
import type { useShowPageProps } from 'src/utils/functions/url'
import { fallbackImage } from 'src/utils/functions/images'
import { endpointsComplements } from '../constants'

type UseShowPageResult = {
  shows: TVShowCard[] | null
  loading: boolean
  error: string | null
  show: Show | null
}

export const useShowPage = ({
  search,
  idShow,
  pagination,
}: useShowPageProps): UseShowPageResult => {
  const [shows, setShows] = useState<TVShowCard[] | null>(null)
  const [show, setShow] = useState<Show | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchShow = async () => {
    try {
      setLoading(true)
      const url = buildUrl({ idShow, search, pagination })
      const responseShow = await fetchData(url)
      if (idShow) {
        setShow(responseShow as Show)
        const episodesResponse = await fetchData(`${url}/${endpointsComplements.EPISODES}`)
        setShow(
          (prevShow) =>
            ({
              ...prevShow,
              episodes: episodesResponse,
            }) as Show
        )
      } else {
        const responseShows = responseShow as Show[]
        setShows(
          responseShows.map((page: Show) => ({
            showId: page?.id,
            id: page?.id,
            airdate: page?.ended,
            airtime: page?.schedule.time,
            showName: page?.name,
            language: page?.language,
            network: page?.network?.name,
            image: fallbackImage( page.image),
            apiUrl: {
              self: page['_links']?.self,
              show: {
                href: page['_links']?.self.href,
                name: page.name,
              },
            },
          }))
        )
      }
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'An unknown error occurred'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchShow()
  }, [search, idShow, pagination])

  return { show, shows, loading, error }
}
