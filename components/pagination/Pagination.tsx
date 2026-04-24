import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  page: number
  hasPrev?: string | null
  hasNext?: string | null
  previousPage: () => void
  nextPage: () => void
}

export default function Pagination({
  page,
  hasPrev,
  hasNext,
  previousPage,
  nextPage,
}: Props) {
  return (
    <div className="sticky bottom-0 left-0 w-full flex justify-center py-4 z-50">

      {/* Floating container */}
      <div className="
        flex items-center gap-3
        bg-white/90 backdrop-blur-md
        border border-gray-200
        shadow-lg
        rounded-2xl
        px-5 py-3
      ">
        <button
          onClick={previousPage}
          disabled={!hasPrev}
          className="
            flex items-center gap-1
            px-3 py-2
            rounded-xl
            text-sm text-gray-600
            hover:bg-gray-100
            disabled:opacity-40 disabled:cursor-not-allowed
            transition
          "
        >
          <ChevronLeft size={16} />
          Prev
        </button>

        {/* Page indicator */}
        <div className="
          px-4 py-2
          rounded-xl
          bg-gray-100
          border border-gray-200
          text-sm font-medium text-gray-700
          min-w-[80px]
          text-center
        ">
          Page {page}
        </div>

        {/* Next */}
        <button
          onClick={nextPage}
          disabled={!hasNext}
          className="
            flex items-center gap-1
            px-3 py-2
            rounded-xl
            text-sm text-gray-600
            hover:bg-gray-100
            disabled:opacity-40 disabled:cursor-not-allowed
            transition
          "
        >
          Next
          <ChevronRight size={16} />
        </button>

      </div>
    </div>
  )
}