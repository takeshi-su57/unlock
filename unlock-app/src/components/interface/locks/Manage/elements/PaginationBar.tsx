import { Button } from '@unlock-protocol/ui'
import {
  FaArrowRight as ArrowRightIcon,
  FaArrowLeft as ArrowLeftIcon,
} from 'react-icons/fa'
import React from 'react'

interface PageProps {
  page: number
  active?: boolean
  setPage: (page: number) => void
}

interface PaginationBarProps {
  maxNumbersOfPage: number
  page: number
  setPage: (page: number) => void
}

const Page = ({ page, active, setPage }: PageProps) => {
  const variant = active ? 'primary' : 'transparent'
  return (
    <Button
      variant={variant}
      className="flex items-center justify-center w-8 h-8 p-0"
      onClick={() => setPage(page)}
    >
      {page}
    </Button>
  )
}

const LIMIT_NEXT_PREV_PAGE = 5

const Pages = ({ maxNumbersOfPage, page, setPage }: PaginationBarProps) => {
  const maxPage = page + LIMIT_NEXT_PREV_PAGE

  const minFromMaxPage = maxNumbersOfPage - LIMIT_NEXT_PREV_PAGE

  return (
    <div className="flex flex-wrap gap-2">
      {Array(maxNumbersOfPage)
        .fill(null)
        .map((_, index) => {
          const currentPage: number = index + 1
          const isCurrent = currentPage === page
          const isLastPage = maxNumbersOfPage === currentPage

          const showNextPage =
            currentPage >= page &&
            currentPage <= maxPage &&
            page < minFromMaxPage

          const showPrevPage =
            currentPage >= minFromMaxPage &&
            currentPage < maxNumbersOfPage &&
            page >= minFromMaxPage

          const showLastPage = isLastPage && currentPage >= maxNumbersOfPage

          const showDots =
            currentPage === maxPage &&
            !showPrevPage &&
            maxNumbersOfPage - maxPage > 1

          return (
            <>
              {(showPrevPage || showNextPage) && (
                <Page
                  key={index}
                  page={currentPage}
                  active={isCurrent}
                  setPage={setPage}
                />
              )}

              {showDots && <span>...</span>}

              {showLastPage && (
                <div className="flex items-center gap-2">
                  <Page
                    page={currentPage}
                    setPage={setPage}
                    active={isCurrent}
                  />
                </div>
              )}
            </>
          )
        })}
    </div>
  )
}

export const PaginationBar = ({
  maxNumbersOfPage,
  page,
  setPage,
}: PaginationBarProps) => {
  const backDisabled = page === 1
  const nextDisabled = maxNumbersOfPage === page

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-6">
        <Button
          variant="transparent"
          className="p-0 disabled:opacity-50"
          aria-label="arrow left"
          disabled={backDisabled}
          onClick={() => setPage(page - 1)}
        >
          <ArrowLeftIcon />
        </Button>
        <Pages
          maxNumbersOfPage={maxNumbersOfPage}
          page={page}
          setPage={setPage}
        />
        <Button
          variant="transparent"
          className="p-0 disabled:opacity-50"
          aria-label="arrow right"
          disabled={nextDisabled}
          onClick={() => setPage(page + 1)}
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  )
}
