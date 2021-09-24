import React from 'react'
import cn from 'classnames'
import styles from './Paginator.module.css'

const Paginator = ({
  totalItemsCount,
  currentPage,
  setCurrentPage,
  onPageChanged,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / portionSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={styles.paginator}>
      {currentPage > 1 && (
        <button className={styles.btnPrev}
          onClick={() => {
            setCurrentPage(currentPage - 1)
          }}
        >
          PREV
        </button>
      )}
      {pagesCount > 1 && pages.map((p) => (
        <span
          className={cn(
            { [styles.selectedPage]: currentPage === p },
            styles.pageNumber
          )}
          key={p}
          onClick={() => {
            onPageChanged(p)
          }}
        >
          {p}
        </span>
      ))}
      {pagesCount > currentPage && (
        <button className={styles.btnNext}
          onClick={() => {
            setCurrentPage(currentPage + 1)
          }}
        >
          NEXT
        </button>
      )}
    </div>
  )
}

export default Paginator
