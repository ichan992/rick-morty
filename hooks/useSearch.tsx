import { useState, useMemo, useEffect } from 'react'
import debounce from 'lodash/debounce'

export default function useSearch() {
  const [copyQuery, setCopyQuery] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState<string>('')


  const handleSearch = (value: string) => {
      setSearchQuery(value)

  }

  const debouncedSearch = useMemo(
    () => debounce(handleSearch, 300),
    []
  )

  const handleChange = (value: string) => {
    setCopyQuery(value)
    debouncedSearch(value)
  }


  const handleSubmit = (e : React.ChangeEvent) => {
    e.preventDefault()
    debouncedSearch.flush()
  }


  useEffect(() => {
    return () => {
      debouncedSearch.cancel()
    }
  }, [debouncedSearch])

  return {
    query : searchQuery,
    textInput : copyQuery,
    handleChange,
    handleSubmit,
  }
}