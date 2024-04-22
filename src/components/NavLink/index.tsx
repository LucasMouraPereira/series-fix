import Link from 'next/link'

type NavLinkProps = {
  href: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

export const NavLink = ({ href, ...rest }: NavLinkProps) => {
  return <Link href={href} {...rest} />
}
