'use client'

import GenderFilter from "@/components/CharacterFilters/GenderFilter";
import SpeciesFilter from "@/components/CharacterFilters/SpeciesFilter";
import CharacterList from "@/components/homepage/CharacterList";
import Pagination from "@/components/pagination/Pagination";
import SearchBar from "@/components/search/searchBar";
import SideBar from "@/components/sidebar/SideBar";
import useCharacter from "@/hooks/useCharacter";
import useCharacterFacet from "@/hooks/useDynamicGenderFilters";
import useDynamicFilters from "@/hooks/useFilterList";
import usePagination from "@/hooks/usePagination";
import useSearch from "@/hooks/useSearch";

import { useState } from "react";

export default function Home() {

  const [genderFilter, setGenderFilter] = useState<string | null>(null)
  const [speciesFilter, setSpeciesFilter] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const { handleSubmit, query: searchQuery, handleChange, textInput } = useSearch()
  const { page, previousPage, nextPage } = usePagination({ genderFilter, searchQuery })

  const { counts } = useDynamicFilters(genderFilter, speciesFilter, searchQuery);
  const { character, loading } = useCharacter({ page, gender: genderFilter, species: speciesFilter, searchQuery });
  const { values: genders } = useCharacterFacet('gender');
  const { values: species } = useCharacterFacet('species');


  return (
    <div className="m-10">
      <div className="flex min-h-screen bg-white text-black">

        {/* SIDEBAR */}
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          counts={counts}
          genderFilter={genderFilter}
          genders={genders}
          loading={loading}
          setGenderFilter={setGenderFilter}
          setSpeciesFilter={setSpeciesFilter}
          species={species}
          speciesFilter={speciesFilter}
        />

        <main className="w-full">


          <div className="flex items-center gap-2 px-4 py-3">

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="space-y-1.5">
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
                <span className="block w-5 h-0.5 bg-black"></span>
              </div>
            </button>


            <div className="flex-1">
              <SearchBar
                handleSubmit={handleSubmit}
                query={textInput}
                setQuery={handleChange}
              />
            </div>

          </div>
          <CharacterList
            loading={loading}
            character={character}
          />

          <Pagination
            page={page}
            hasPrev={character?.info.prev}
            hasNext={character?.info.next}
            previousPage={previousPage}
            nextPage={nextPage}
          />

        </main>
      </div>
    </div>
  );
}