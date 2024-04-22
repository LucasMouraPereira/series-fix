import type { NavBarProps } from './types'

export const data: NavBarProps = {
  logo: {
    slug: 'logo',
    label: 'SERIES FLIX',
    href: '/',
  },
  items: [
    {
      slug: 'home',
      label: 'Home',
      href: '/',
    },
    {
      slug: 'shows',
      label: 'Programas',
      href: '/programas',
    },
    {
      slug: 'favorites',
      label: 'Favoritos',
      href: '/favoritos',
    },
  ],
}
