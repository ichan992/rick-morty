

const base = "https://rickandmortyapi.com/api"

export const fetchCharacter = async (pagenumber = 1) => {
    const characters = await fetch(`${base}/character/?page=${pagenumber}`)
    return characters.json()
}
export const fetchCharacterWithFilter = async (
    { gender, status, species, page, searchQuery }: any
): Promise<any> => {
    const params = new URLSearchParams()

    params.append("page", String(page))

    if (gender) params.append("gender", gender)
    if (status) params.append("status", status)
    if (species) params.append("species", species)
    if (searchQuery) params.append("name", searchQuery)

    const res = await fetch(`${base}/character/?${params.toString()}`)

    if (!res.ok) {
        throw new Error("Failed to fetch characters")
    }

    return res.json()
}