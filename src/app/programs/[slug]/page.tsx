import { buildUrl } from 'src/utils/functions/url'
import { TVShowsList } from 'src/utils/types/tvShows'
import ShowScreens from 'src/screens/ShowScreens'
import { fetchData } from 'src/utils/services/api'

type ShowProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const url = buildUrl({})
  const response = await fetchData(url)
  const data = response as TVShowsList
  return data.map((item) => ({ slug: String(item.id) }))
}

const Show = async ({ params }: ShowProps) => {
  return <ShowScreens slug={Number(params.slug)} />
}

export default Show
