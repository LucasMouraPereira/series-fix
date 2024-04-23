import { buildUrl } from 'src/utils/functions/url'
import { TVShowsList } from 'src/utils/types/tvShows'
import ShowScreens from 'src/screens/ShowScreens'

type ShowProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const url = buildUrl({})
  const response = await fetch(url)
  const data: TVShowsList = await response.json()
  return data.map((item) => ({ slug: String(item.id) }))
}

const Show = async ({ params }: ShowProps) => {
  return <ShowScreens slug={Number(params.slug)} />
}

export default Show
