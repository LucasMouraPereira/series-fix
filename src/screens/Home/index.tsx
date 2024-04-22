'use client'
import { ShowProvider } from 'src/providers/ShowsContext'
import type { TVShowSchedule } from 'src/utils/types/tvShows'
import HomeContainer from './containers'

type HomeScreensProps = {
  pageData: TVShowSchedule
}
const HomeScreens = ({ pageData }: HomeScreensProps) => (
  <ShowProvider pageData={pageData}>
    <HomeContainer />
  </ShowProvider>
)

export default HomeScreens
