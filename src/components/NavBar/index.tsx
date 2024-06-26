'use client'
import { useState } from 'react'
import NavLink from 'src/components/NavLink'
import ListNavLinks from './ListNavLinks'
import { data } from './data'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import styles from './styles.module.css'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu)
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <NavLink href={data.logo.href}>{data.logo.label}</NavLink>
        </div>
        <div className={styles.flex}>
          <div className={styles.desktop}>
            <ListNavLinks items={data.items} />
          </div>
          <div className={styles.mobile}>
            {!showMenu ? (
              <HamburgerMenuIcon cursor="pointer" onClick={toggleMenu} />
            ) : (
              <Cross1Icon cursor="pointer" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </nav>
      {showMenu && (
        <>
          <div className={styles.overlay} />
          <aside className={styles.sidebar}>
            <ListNavLinks items={data.items} />
          </aside>
        </>
      )}
    </>
  )
}

export default NavBar
