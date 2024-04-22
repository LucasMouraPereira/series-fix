'use client'
import { ListCards } from 'src/components/ListCards'
import { useShowContext } from 'src/providers/ShowsContext'
import style from './styles.module.css'
import { Button } from 'src/components/Button'
import { useRouter } from 'next/navigation'
import { Card } from 'src/components/Card'

const HomeContainer = () => {
  const router = useRouter()
  const { showSchedule } = useShowContext()
  if (!showSchedule) return null

  const goToShows = () => {
    router.push(showSchedule.link.href)
  }
  const goToShow = (id: number) => {
    router.push(`/programas/${id}`)
  }

  return (
    <main className={style.main}>
      <div className={style.header}>
        <h1>{showSchedule.title}</h1>
        <p>{showSchedule.description}</p>
        <Button text={showSchedule.link.label} onClick={goToShows} />
      </div>
      <div>
        <ListCards list={showSchedule.cards} borderRadius="8px">
          {(item) => <Card item={item} onClick={() => goToShow(item.showId)} />}
        </ListCards>
      </div>
    </main>
  )
}

export default HomeContainer
