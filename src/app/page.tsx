import HomeScreens from 'src/screens/HomeScreens'
import homeData from 'src/utils/data'
import type { TVShowSchedule, TVShowsList } from 'src/utils/types/tvShows'
import { fetchData } from 'src/utils/services/api'
import { fallbackImage } from 'src/utils/functions/images'
import { endpointsComplements } from 'src/utils/constants'

export const dynamic = 'auto'
export const revalidate = 30

async function getShows() {
  const date = new Date().toISOString().slice(0, 10)
  const res = await fetchData(
    `${endpointsComplements.SCHEDULE}?${endpointsComplements.COUNTRY}=US&${endpointsComplements.DATE}=${date}`
  )
  return res
}

const Home = async () => {
  const res = (await getShows()) as TVShowsList
  const { title, description, link } = homeData
  const pageData = {
    title,
    description,
    link,
    cards: res?.map((ep) => ({
      showId: ep.show.id,
      id: ep.id,
      airdate: ep.airdate,
      airtime: ep.airtime,
      showName: ep.show.name,
      language: !ep.show.language ? 'N/A' : ep.show.language,
      network: !ep.show.network?.name ? 'N/A' : ep.show.network.name,
      image: fallbackImage(ep.show.image),
      apiUrl: ep['_links'],
    })),
  } as TVShowSchedule
  return <HomeScreens pageData={pageData} />
}

export default Home
