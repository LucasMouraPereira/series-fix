import PlaceholderImage from '/public/placeholder.png'
import type { ImageProps } from 'src/utils/types/tvShows'

export const fallbackImage = (image: ImageProps) =>
  !image
    ? { medium: PlaceholderImage.src, original: PlaceholderImage.src }
    : image
