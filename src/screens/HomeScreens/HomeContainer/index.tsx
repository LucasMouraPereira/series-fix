'use client'
import ListCards from 'src/components/ListCards'
import style from './styles.module.css'
import Button from 'src/components/Button'
import { useRouter } from 'next/navigation'
import Card from 'src/components/Card'
import { TVShowSchedule } from 'src/utils/types/tvShows'
import { paths } from 'src/utils/constants'

type HomeContainerProps = {
  pageData: TVShowSchedule
}

const HomeContainer = ({ pageData }: HomeContainerProps) => {
  const router = useRouter()
  if (!pageData) return null

  const goToShows = () => {
    router.push(pageData.link.href)
  }
  const goToShow = (id: number) => {
    router.push(`${paths.PROGRAMS}/${id}`)
  }

  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1>{pageData.title}</h1>
        <p>{pageData.description}</p>
        <Button text={pageData.link.label} onClick={goToShows} />
      </div>
      <div>
        <ListCards list={pageData.cards} borderRadius="8px">
          {(item) => <Card item={item} onClick={() => goToShow(item.showId)} />}
        </ListCards>
      </div>
    </main>
  )
}

export default HomeContainer
