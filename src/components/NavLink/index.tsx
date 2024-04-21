import Link from "next/link";

type NavLinkProps = {
  href: string
  [x: string]: any;
}

export const NavLink = ({ href, ...rest }: NavLinkProps) => {
  return <Link href={href} {...rest} />;
};
