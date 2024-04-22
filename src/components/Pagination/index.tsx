'use client'
import { usePathRouter } from 'src/utils/hooks/usePathRouter'
import style from './styles.module.css'
import { RoundButton } from '../RoundButton'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

type PaginationProps = {
  page: number
  totalPages: number
  isFirstPage: boolean
  isLastPage: boolean
}

export const Pagination = ({
  page,
  totalPages,
  isFirstPage,
}: PaginationProps) => {
  const { onClickPath } = usePathRouter()
  const goBack = () => {
    if (page > 0) {
      const currentPage = page - 1
      onClickPath('page', String(currentPage))
    }
  }

  const goNext = () => {
    if (page <= totalPages && !isFirstPage) {
      const currentPage = page + 1
      onClickPath('page', String(currentPage))
    }
  }
  return (
    <div className={style.wrapperPagination}>
      <div className={style.paginationMobile}>
        <div className={style.wrapperText}>
          Página <span>{page}</span> de <span>{totalPages}</span>
        </div>
        <div className={style.wrapperRoundButton}>
          <RoundButton disabled={page === 0 ? true : false} onClick={goBack}>
            <ArrowLeftIcon />
          </RoundButton>
          <RoundButton
            disabled={page === totalPages || totalPages === 0 ? true : false}
            onClick={goNext}
          >
            <ArrowRightIcon />
          </RoundButton>
        </div>
      </div>
      <div className={style.paginationDesktop}>
        <div className={style.wrapperRoundButton}>
          <RoundButton disabled={page === 0 ? true : false} onClick={goBack}>
            <ArrowLeftIcon />
          </RoundButton>
          <div className={style.wrapperText}>
            Página <span>{page}</span> de <span>{totalPages}</span>
          </div>
          <RoundButton
            disabled={page === totalPages ? true : false}
            onClick={goNext}
          >
            <ArrowRightIcon />
          </RoundButton>
        </div>
      </div>
    </div>
  )
}
