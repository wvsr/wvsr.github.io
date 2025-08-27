'use client'

import Link from 'next/link'

export default function Pagination({ currentPage, numPages }: { currentPage: number, numPages: number }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  if (numPages <= 1) {
    return null
  }

  return (
    <div className="flex justify-center gap-5">
      {!isFirst && (
        <Link href={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          href={`/blog/page/${i + 1}`}
          key={`pagination-number${i + 1}`}
          className={currentPage === i + 1 ? "font-bold" : ""}
        >
          {i + 1}
        </Link>
      ))}
      {!isLast && (
        <Link href={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </div>
  )
}
