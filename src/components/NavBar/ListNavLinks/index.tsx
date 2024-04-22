import NavLink from 'src/components/NavLink'
import type { itemsProps } from '../types'
import styles from './styles.module.css'

type ListNavLinks = {
  items: Array<itemsProps>
}
const ListNavLinks = ({ items }: ListNavLinks) =>
  items.map(({ href, label }, index) => (
    <NavLink className={styles.navlink} key={index} href={href}>
      {label}
      <div className={styles.underline} />
    </NavLink>
  ))

export default ListNavLinks
