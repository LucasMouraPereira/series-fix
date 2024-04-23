'use client'
import { useShowPage } from 'src/utils/hooks/useShowPage'
import ShowContainer  from './ShowContainer'

type ShowScreenProps = {
  slug: number
}
const ShowScreens = ({ slug }: ShowScreenProps) => {
  const { show } = useShowPage({ idShow: slug })
  return <ShowContainer show={show} />
}

export default ShowScreens
