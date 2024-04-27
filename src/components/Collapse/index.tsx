import { useState } from 'react'
import Image from 'next/image'
import { Episode } from 'src/utils/types/tvShows'
import style from './styles.module.css'
import { CaretDownIcon } from '@radix-ui/react-icons'
import Rating from '../Rating'
import { fallbackImage } from 'src/utils/functions/images'

type GroupedEpisodes = {
  seasonText: string
  episodes: Episode[]
}

type CollapseProps = {
  groupedEpisodes: GroupedEpisodes[]
}

const Collapse: React.FC<CollapseProps> = ({ groupedEpisodes }) => {
  const [openCollapse, setOpenCollapse] = useState<number | null>(null)

  const handleClick = (season: number) => {
    if (openCollapse === season) {
      setOpenCollapse(null)
    } else {
      setOpenCollapse(season)
    }
  }

  return (
    <div className={style.wrapperCollapse}>
      {groupedEpisodes.map((group) => (
        <div key={group.seasonText} className={style.seasonText}>
          <div
            className={style.title}
            onClick={() => handleClick(group.episodes[0].season)}
          >
            <h3>{group.seasonText}</h3>
            <CaretDownIcon />
          </div>
          <div className={style.description}>
            {openCollapse === group.episodes[0].season && (
              <div className={style.episodes}>
                {group.episodes.map((episode) => (
                  <div key={episode.id} className={style.groupEpisode}>
                    <div className={style.episode}>
                      <div>
                        <Image
                          src={fallbackImage(episode.image).original}
                          alt={episode.name}
                          width={384}
                          height={216}
                        />
                        <div className={style.rating}>
                          <p>
                            <strong>Rating: </strong>
                          </p>
                          <Rating rating={episode.rating} />
                        </div>
                        <p>
                          <strong>Episode length: </strong>
                          {episode.runtime}
                        </p>
                      </div>
                      <div className={style.text}>
                        <p>
                          <strong>{episode.name}</strong>
                        </p>
                        <p
                          dangerouslySetInnerHTML={{ __html: episode.summary }}
                        />
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Collapse
