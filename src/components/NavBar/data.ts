import type { NavBarProps } from './types'
import { paths } from 'src/utils/constants'

export const data: NavBarProps = {
  logo: {
    slug: 'logo',
    label: 'SERIES FLIX',
    href: paths.HOME,
  },
  items: [
    {
      slug: 'home',
      label: 'Home',
      href: paths.HOME,
    },
    {
      slug: 'shows',
      label: 'Programs',
      href: paths.PROGRAMS,
    },
    {
      slug: 'favorites',
      label: 'Favorites',
      href: paths.FAVORITES,
    },
  ],
}
