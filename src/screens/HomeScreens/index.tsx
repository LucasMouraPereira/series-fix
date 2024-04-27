import type { TVShowSchedule } from 'src/utils/types/tvShows'
import HomeContainer from './HomeContainer'

type HomeScreensProps = {
  pageData: TVShowSchedule
}
const HomeScreens = ({ pageData }: HomeScreensProps) => (
  <HomeContainer pageData={pageData} />
)

export default HomeScreens
