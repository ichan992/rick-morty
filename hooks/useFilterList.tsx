import { fetchCharacter, fetchCharacterWithFilter } from "@/api/characters/fetchCharacters"
import { useEffect, useState } from "react"

type CountMap = Record<string, number>

export default function useDynamicFilters(genderFilter : string | null ,speciesFilter : string | null, searchQuery : string) {
  const [counts, setCounts] = useState<{
    gender: { value: string; count: number }[]
    species: { value: string; count: number }[]
    status: { value: string; count: number }[]
  }>({
    gender: [],
    species: [],
    status: [],
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true)

        let allCharacters: any[] = []
        let page = 1
        let hasNext = true

        // 🔁 fetch all pages
        while (hasNext) {
          const res = await fetchCharacterWithFilter({page : page, gender: genderFilter, species : speciesFilter, searchQuery})

          allCharacters = [...allCharacters, ...res.results]

          if (page >= res.info.pages) {
            hasNext = false
          } else {
            page++
          }
        }

        // helper to build counts
        const buildCount = (key: string) => {
          const map: CountMap = {}

          allCharacters.forEach((char) => {
            const value = char[key] || "unknown"

            map[value] = (map[value] || 0) + 1
          })

          return Object.entries(map).map(([value, count]) => ({
            value,
            count,
          }))
        }

        setCounts({
          gender: buildCount("gender"),
          species: buildCount("species"),
          status: buildCount("status"),
        })
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [genderFilter,speciesFilter, searchQuery])

  return { counts, loading, error }
}