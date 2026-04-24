import { fetchCharacter } from "@/api/characters/fetchCharacters"
import { useEffect, useState } from "react"

export default function useCharacterFacet(field: "gender" | "species" | "status") {
  const [values, setValues] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true)

        let allCharacters: any[] = []
        let currentPage = 1
        let hasNext = true

        while (hasNext) {
          const res = await fetchCharacter(currentPage)

          allCharacters = [...allCharacters, ...res.results]

          if (currentPage >= res.info.pages) {
            hasNext = false
          } else {
            currentPage++
          }
        }

        // 👉 extract unique values only
        const uniqueSet = new Set<string>()

        allCharacters.forEach((char) => {
          const value = char?.[field] || "unknown"
          uniqueSet.add(value)
        })

        setValues(Array.from(uniqueSet))
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [field])

  return { values, loading, error }
}