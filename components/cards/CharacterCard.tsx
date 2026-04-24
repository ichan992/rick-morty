import { characterInfoInterface } from '@/types/characterTypes'

interface Props {
  character: characterInfoInterface
}
const getStatusStyle = (status: string) => {
  switch (status.toLowerCase()) {
    case "alive":
      return "text-green-400 bg-green-400"
    case "dead":
      return "text-red-500 bg-red-500"
    default:
      return "text-gray-400 bg-gray-400"
  }
}

export default function CharacterCard({ character }: Props) {
  return (
    <div className="group relative w-full max-w-sm border border-gray-200 bg-white transition hover:shadow-xl hover:-translate-y-1 duration-300 overflow-hidden">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={character.image}
          alt="Character"
          className="h-56 w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-md">
            <span className={`h-2 w-2 rounded-full ${getStatusStyle(character.status)}`}></span>
            {character.status}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-900 leading-tight">
          {character.name}
        </h2>

        <p className="text-sm text-gray-500">
          ID: #{character.id} • {character.species}
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2 text-sm">
          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-xs text-gray-400">Origin</p>
            <p className="font-medium text-gray-800 truncate">
              {character.origin.name}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-2">
            <p className="text-xs text-gray-400">Location</p>
            <p className="font-medium text-gray-800 truncate">
              {character.location.name}
            </p>
          </div>
        </div>
      </div>

      <div className="
        absolute inset-0 z-10
        bg-black/90 text-white
        opacity-0 translate-y-3
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-300
        p-5 flex flex-col justify-center
      ">
        <h3 className="text-xl font-bold">{character.name}</h3>

        <p className="text-sm text-gray-300 mt-1">
          {character.species} • {character.status}
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <p>
            <span className="text-gray-400">Origin:</span>{" "}
            {character.origin.name}
          </p>

          <p>
            <span className="text-gray-400">Location:</span>{" "}
            {character.location.name}
          </p>

          <p>
            <span className="text-gray-400">Gender:</span>{" "}
            {character.gender}
          </p>
        </div>
      </div>
    </div>
  )
}