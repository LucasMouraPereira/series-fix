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
import Rating from 'src/components/Rating'
import RoundButton from 'src/components/RoundButton'
import { useEffect, useMemo, useState } from 'react'
import { fallbackImage } from 'src/utils/functions/images'

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
        <Button text={'Back'} onClick={goBack} position="right" />
        <h1>{show.name}</h1>
      </div>
      <div className={style.contentShow}>
        <Image
          className={style.img}
          src={fallbackImage(show.image).original}
          alt={show.name}
          width={384}
          height={565}
        />
        <div className={style.contentDescription}>
          <h2>Description:</h2>
          <p dangerouslySetInnerHTML={{ __html: show.summary }} />
          <div className={style.tags}>
            {show.genres.map((genre) => (
              <span key={genre} className={style.tag}>
                {genre}
              </span>
            ))}
          </div>
          <p>
            <strong>Language: </strong>
            {show.language}
          </p>
          <p>
            <strong>Launch: </strong>
            {formatDate(show.premiered)}
          </p>
          <p>
            <strong>Status: </strong>
            {show.status}
          </p>
          <div>
            <p>
              <strong>Rating: </strong>
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

          <div className={style.days}>
            <p>
              <strong>Exhibition: </strong>
            </p>
            <div className={style.scheduleDays}>
              {show.schedule.days.map((day) => (
                <span key={day} className={style.tag2}>
                  {day}
                </span>
              ))}
            </div>
          </div>
          <p>
            <strong>Time: </strong>
            {show.schedule.time}
          </p>
          <RoundButton onClick={toggleFavorite}>
            <strong>Add to favorites</strong>
            {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
          </RoundButton>
        </div>
      </div>
      <Collapse groupedEpisodes={groupedEpisodes} />
    </main>
  )
}
export default ShowContainer
