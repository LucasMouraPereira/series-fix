import Link from 'next/link'
import Image from 'next/image'
import { paths } from 'src/utils/constants'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import LogoTV from '/public/logotvshows.png'

import style from './styles.module.css'

const NotFoundScreens = () => (
  <main className={style.main}>
    <h1 className={style.title}>Page 404</h1>
    <div className={style.flex}>
      <div>
        <Image
          src={LogoTV.src}
          width={300}
          height={300}
          alt="logo of error 404"
        />
      </div>
      <div className={style.info}>
        <div className={style.titleInfo}>
          <h2>Oops, we couldn`t find this page!</h2>
          <p>The page you are looking for was not found.</p>
        </div>
        <div className={style.links}>
          <p>Here are some options:</p>
          <ul>
            <li>
              <ChevronRightIcon />
              <Link href={paths.HOME}>Home</Link>
            </li>
            <li>
              <ChevronRightIcon />
              <Link href={paths.PROGRAMS}>Programs</Link>
            </li>
            <li>
              <ChevronRightIcon />
              <Link href={paths.FAVORITES}>Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
)

export default NotFoundScreens
