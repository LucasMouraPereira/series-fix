import style from './styles.module.css'
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons'

type RatingProps = {
  rating: {
    average: number
  }
}

export const Rating = ({ rating }: RatingProps) => {
  const newRating = Math.round(rating.average)
  const average = Array.from({ length: 10 }, (_, index) => index)
  return (
    <div className={style.stars}>
      {average.map((_, index) => (
        <p key={index}>
          {newRating <= index ? <StarIcon /> : <StarFilledIcon />}
        </p>
      ))}
    </div>
  )
}
