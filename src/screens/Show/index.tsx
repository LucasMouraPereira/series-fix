'use client'
import { useShowPage } from 'src/utils/hooks/useShowPage'
import ShowContainer  from './containers'

type ShowScreenProps = {
  slug: number
}
const ShowScreen = ({ slug }: ShowScreenProps) => {
  const { show } = useShowPage({ idShow: slug })
  return <ShowContainer show={show} />
}

export default ShowScreen
