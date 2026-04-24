import GenderFilter from '../CharacterFilters/GenderFilter'
import SpeciesFilter from '../CharacterFilters/SpeciesFilter'
import { SidebarSkeleton } from '../skeletalloaders/SidebarSkeleton'

interface SideBarProps {
  genders: string[]
  species: string[]
  counts: {
    gender: { value: string; count: number }[]
    species: { value: string; count: number }[]
    status: { value: string; count: number }[]
  }
  setSpeciesFilter: (value: string) => void
  setGenderFilter: (value: string) => void
  speciesFilter: string | null
  genderFilter: string | null
  loading: boolean
  isOpen: boolean
  onClose: () => void
}

export default function SideBar({
  genders,
  species,
  counts,
  speciesFilter,
  setSpeciesFilter,
  setGenderFilter,
  genderFilter,
  loading,
  isOpen,
  onClose,
}: SideBarProps) {
  // if (loading && genders.length <=0) return <SidebarSkeleton />

  return (
    <>

      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40 md:hidden
          ${isOpen ? 'block' : 'hidden'}
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50 md:z-auto
          h-full md:h-screen
          w-72 md:w-64
          bg-white
          px-5 md:px-6 py-6 md:py-8
          overflow-y-auto
          transform transition-transform duration-300
          md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:flex flex-col
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold">Filters</h2>

          {/* Close button (mobile only) */}
          <button
            onClick={onClose}
            className="md:hidden text-sm text-gray-500"
          >
            Close
          </button>
        </div>

        <div className="border-b border-gray-200 my-5" />

        {/* FILTERS */}
        <GenderFilter
          data={genders}
          counts={counts.gender}
          selected={genderFilter}
          setSelected={setGenderFilter}
        />

        <div className="border-b border-gray-200 my-5" />

        <SpeciesFilter
          data={species}
          counts={counts.species}
          selected={speciesFilter}
          setSelected={setSpeciesFilter}
        />

        <div className="border-b border-gray-200 my-5" />
      </aside>
    </>
  )
}