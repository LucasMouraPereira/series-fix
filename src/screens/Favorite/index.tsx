'use client'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'src/components/Button'
import style from './styles.module.css'
import { ListCards } from 'src/components/ListCards'
import { Card } from 'src/components/Card'
import { TVShowCard } from 'src/providers/types'
import { Show } from 'src/utils/types/tvShows'

const FavoriteContainer = () => {
  const router = useRouter()
  const [favorites, setFavorites] = useState<TVShowCard[] | null>(null)
  const favoritesFromStorage = useMemo(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem('favorites')
      return storedFavorites ? JSON.parse(storedFavorites) : []
    } else {
      return []
    }
  }, [])
  useEffect(() => {
    const objFav = favoritesFromStorage.map((fav: Show) => ({
      showId: fav?.id,
      id: fav?.id,
      airdate: fav.ended,
      airtime: fav.schedule.time,
      showName: fav.name,
      language: !fav.language ? 'N/A' : fav.language,
      network: !fav.network?.name ? 'N/A' : fav.network.name,
      image: fav.image,
      apiUrl: {
        self: fav['_links']?.self,
        show: {
          href: fav['_links']?.self.href,
          name: fav.name,
        },
      },
    }))
    setFavorites(objFav)
  }, [])
  const goToHome = () => {
    router.push('/')
  }
  const goToShow = (id: number) => {
    router.push(`/programas/${id}`)
  }

  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1>Seus Favoritos</h1>
        <p>Visualize os seus programas favoritos</p>
        <Button text={'Voltar'} onClick={goToHome} position="right" />
      </div>
      <div>
        <ListCards list={favorites} borderRadius="8px">
          {(item) => <Card item={item} onClick={() => goToShow(item.id)} />}
        </ListCards>
      </div>
    </main>
  )
}

export default FavoriteContainer
