import Image from 'next/image'
import style from './styles.module.css'
import { formatDate, limitString } from 'src/utils/functions/texts'
import { TVShowCard } from 'src/utils/types/tvShows'

type CardProps = {
  item: TVShowCard
  onClick?: () => void
}
const Card = ({ item, onClick }: CardProps) => {
  return (
    <div
      className={style.card}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      onClick={onClick && onClick}
    >
      <Image
        className={style.img}
        src={item.image.medium}
        alt={item.showName}
        width={152}
        height={214}
      />
      <div className={style.infos}>
        <div className={style.text}>
          <p className={style.cardTitle}>{item.showName}</p>
          <div className={style.tags}>
            <span className={style.tag1}>{limitString(item.network)}</span>
            <span className={style.tag2}>{limitString(item.language)}</span>
          </div>
        </div>
        {!!item.airdate && (
          <div className={style.date}>
            <span>Last episode:</span>

            <span>
              {formatDate(item.airdate)} - {item.airtime}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
export default Card
