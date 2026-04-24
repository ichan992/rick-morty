import { fetchCharacterWithFilter } from "@/api/characters/fetchCharacters"
import { useEffect, useState } from "react"
import { characterInterface } from "@/types/characterTypes"

interface UseCharacterProps {
  page?: number
  gender?: string | null
  species?: string | null
  searchQuery?: string
}

export default function useCharacter({ page, gender, species, searchQuery } : UseCharacterProps) {
  const [character, setCharacter] = useState<characterInterface | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetchCharacterWithFilter({
          gender,
          page,
          species,
          searchQuery,
        })

        setCharacter(res)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Something went wrong")
        }
        setCharacter(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [page, gender, species, searchQuery])

  return { loading, character, error }
}