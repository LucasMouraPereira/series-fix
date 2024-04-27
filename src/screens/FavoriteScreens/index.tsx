'use client'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from 'src/components/Button'
import style from './styles.module.css'
import ListCards from 'src/components/ListCards'
import Card from 'src/components/Card'
import { TVShowCard } from 'src/utils/types/tvShows'
import { Show } from 'src/utils/types/tvShows'
import { fallbackImage } from 'src/utils/functions/images'
import { paths } from 'src/utils/constants'

const FavoriteScreens = () => {
  const router = useRouter()
  const [favorites, setFavorites] = useState<TVShowCard[]>([])
  const favoritesFromStorage = useMemo(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem('favorites')
      return storedFavorites ? JSON.parse(storedFavorites) : []
    } else {
      return []
    }
  }, [])
  useEffect(() => {
    const objFav = favoritesFromStorage.map((fav: Show) => {
      return {
        showId: fav?.id,
        id: fav?.id,
        airdate: fav.ended,
        airtime: fav.schedule.time,
        showName: fav.name,
        language: !fav.language ? 'N/A' : fav.language,
        network: !fav.network?.name ? 'N/A' : fav.network.name,
        image: fallbackImage(fav.image),
        apiUrl: {
          self: fav['_links']?.self,
          show: {
            href: fav['_links']?.self.href,
            name: fav.name,
          },
        },
      }
    })
    setFavorites(objFav)
  }, [favoritesFromStorage])
  const goToHome = () => {
    router.push(paths.HOME)
  }
  const goToShow = (id: number) => {
    router.push(`${paths.PROGRAMS}/${id}`)
  }

  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1>Your Favorites</h1>
        <p>View your favorite programs</p>
        <Button text={'Back'} onClick={goToHome} position="right" />
      </div>
      <div>
        <ListCards list={favorites} borderRadius="8px">
          {(item) => <Card item={item} onClick={() => goToShow(item.id)} />}
        </ListCards>
      </div>
    </main>
  )
}

export default FavoriteScreens
