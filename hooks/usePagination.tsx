import React, { useEffect, useState } from 'react'

export default function usePagination({ genderFilter, searchQuery }: { genderFilter: string | null, searchQuery: string  }) {
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        setPage((prev) => 1)

    }, [genderFilter, searchQuery])

    
  const nextPage = () => {
    setPage((prev) => prev + 1)
  }
  const previousPage = () => {
    setPage((prev) => prev - 1)
  }
    return { page, setPage, nextPage, previousPage }
}
