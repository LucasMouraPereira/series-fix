export type itemsProps = {
  slug: string
  label: string
  href: string
}

export type NavBarProps = {
  logo: itemsProps
  items: Array<itemsProps>
}
