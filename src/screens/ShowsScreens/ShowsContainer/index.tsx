'use client'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useShowPage } from 'src/utils/hooks/useShowPage'
import styles from './styles.module.css'
import ListCards from 'src/components/ListCards'
import Card from 'src/components/Card'
import Pagination from 'src/components/Pagination'
import { paths } from 'src/utils/constants'

const ShowsContainer = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = !searchParams.get('page') ? 0 : Number(searchParams.get('page'))
  const totalPages = Math.floor(1800 / 250)
  const { shows } = useShowPage({
    pagination: page !== 0 && page,
  })

  if (!shows?.length) return null

  const goToShow = (id: number) => {
    router.push(`${paths.PROGRAMS}/${id}`)
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>All the programs</h1>
        <p>See details of your favorite shows</p>
      </div>
      <div>
        <ListCards list={shows} borderRadius="8px">
          {(item) => <Card item={item} onClick={() => goToShow(item.id)} />}
        </ListCards>
      </div>
      <Pagination
        page={page}
        totalPages={totalPages}
        isFirstPage={page === null}
        isLastPage={page === totalPages}
      />
    </main>
  )
}

export default ShowsContainer
