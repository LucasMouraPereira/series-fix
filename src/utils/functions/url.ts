export type useShowPageProps = {
  pagination?: number | false
  search?: string
  idShow?: number
}

export const buildUrl = ({ idShow, search, pagination }: useShowPageProps) => {
  let urlShow = 'https://api.tvmaze.com/shows'
  let urlSearch = `https://api.tvmaze.com/search/shows?q=${search}`
  if (pagination) {
    return `${urlShow}?page=${pagination}`
  }
  if (idShow) {
    return `${urlShow}/${idShow}`
  }
  if (search) {
    return urlSearch
  }
  return urlShow
}
