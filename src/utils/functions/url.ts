import { endpointsComplements } from 'src/utils/constants'
export type useShowPageProps = {
  pagination?: number | false
  search?: string
  idShow?: number
}

export const buildUrl = ({ idShow, search, pagination }: useShowPageProps) => {
  let urlShow = endpointsComplements.SHOWS
  let urlSearch = `${endpointsComplements.SEARCH}/${urlShow}?${endpointsComplements.QUERY}=${search}`
  if (pagination) {
    return `${urlShow}?${endpointsComplements.PAGE}=${pagination}`
  }
  if (idShow) {
    return `${urlShow}/${idShow}`
  }
  if (search) {
    return urlSearch
  }
  return urlShow
}
