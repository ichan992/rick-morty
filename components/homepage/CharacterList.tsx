import Pagination from '../pagination/Pagination'
import CharacterCard from '../cards/CharacterCard'
import { characterInterface } from '@/types/characterTypes'
import { CardSkeleton } from '../skeletalloaders/CardSkeleton'

interface CharacterListProps {
  character: characterInterface | null,
  loading: boolean
}

export default function CharacterList({ character, loading }: CharacterListProps) {
  if (character === null && !loading) {
    return (
      <div className="flex justify-center p-5">
        <img
          src="./empty.png"
          alt="Character"
          className="w-3/4 sm:w-1/2 object-contain"
        />
      </div>
    )
  }

  if (loading) return <CardSkeleton />

  return (
    <div className="p-3 sm:p-5">
      {character ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-start gap-3 sm:gap-4">
          {character.results.map((result) => (
            <CharacterCard key={result.id} character={result} />
          ))}
        </div>
      ) : null}
    </div>
  )
}