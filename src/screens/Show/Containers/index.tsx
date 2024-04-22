'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'
import { Show } from 'src/utils/types/tvShows'
import style from './styles.module.css'
import Button from 'src/components/Button'
import { formatDate } from 'src/utils/functions/texts'
import Link from 'next/link'
import { groupEpisodesBySeason } from 'src/utils/functions/array'
import Collapse from 'src/components/Collapse'
import { Rating } from 'src/components/Rating'
import { RoundButton } from 'src/components/RoundButton'
import { useEffect, useMemo, useState } from 'react'

type ShowContainerProps = {
  show: Show | null
}

const ShowContainer = ({ show }: ShowContainerProps) => {
  const router = useRouter()
  const [isFavorite, setIsFavorite] = useState(false)
  const favorites = useMemo(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem('favorites')
      return storedFavorites ? JSON.parse(storedFavorites) : []
    } else {
      return []
    }
  }, [])

  useEffect(() => {
    if (!!favorites.length) {
      const isFavorite = favorites?.some((fav: Show) => fav.id === show?.id)
      setIsFavorite(isFavorite)
    }
  }, [favorites, show])

  if (!show) return null
  if (!show.episodes?.length) return null

  const groupedEpisodes = groupEpisodesBySeason(show.episodes)

  const toggleFavorite = () => {
    const newFavorites = isFavorite
      ? favorites.filter((fav: Show) => fav.id !== show.id)
      : [...favorites, show]
    setIsFavorite(!isFavorite)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const goBack = () => {
    router.back()
  }

  return (
    <main className={style.main}>
      <div className={style.header}>
        <Button text={'Voltar'} onClick={goBack} position="right" />
        <h1>{show.name}</h1>
      </div>
      <div className={style.contentShow}>
        <Image
          className={style.img}
          src={show.image?.original}
          alt={show.name}
          width={384}
          height={565}
        />
        <div className={style.contentDescription}>
          <h2>Descrição:</h2>
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          <div className={style.tags}>
            {show.genres.map((genre) => (
              <span key={genre} className={style.tag}>
                {genre}
              </span>
            ))}
          </div>
          <p>
            <strong>Idioma: </strong>
            {show.language}
          </p>
          <p>
            <strong>Lançamento: </strong>
            {formatDate(show.premiered)}
          </p>
          <p>
            <strong>status: </strong>
            {show.status}
          </p>
          <div>
            <p>
              <strong>Avaliações: </strong>
            </p>
            <Rating rating={show.rating} />
          </div>
          {!!show?.network?.officialSite && (
            <p>
              <strong>Network: </strong>
              <Link
                className={style.link}
                href={show?.network?.officialSite}
                target="_blank"
              >
                {show.network.name}
              </Link>
            </p>
          )}

          <p>
            <strong>Exibição: </strong>
            {show.schedule.days.map((day) => (
              <span key={day} className={style.tag2}>
                {day}
              </span>
            ))}
          </p>
          <p>
            <strong>Horário: </strong>
            {show.schedule.time}
          </p>
          <RoundButton onClick={toggleFavorite}>
            <strong>Adicionar ao favoritos</strong>
            {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
          </RoundButton>
        </div>
      </div>
      <Collapse groupedEpisodes={groupedEpisodes} />
    </main>
  )
}
export default ShowContainer
