'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import useSearch from '@/hooks/useSearch'

interface searchProps {
  query : string,
  setQuery : () => void
}
export default function SearchBar({  query, setQuery }: any) {

  return (
    <form  onSubmit={(e) => e.preventDefault()} className="w-full max-w-2xl mx-auto">
      <div className="relative group">

        <input
          type="text"
          placeholder="Search character name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full
            rounded-2xl
            bg-white
            border border-gray-200
            py-3.5 pl-12 pr-20
            text-sm text-gray-700
            placeholder:text-gray-400
            shadow-sm
            transition-all duration-300

            focus:outline-none
            focus:border-gray-300
            focus:ring-4 focus:ring-gray-100

            group-hover:shadow-md
          "
        />

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />


        {/* Submit Button */}
        <button
        type='button'
          className="
            absolute right-2 top-1/2 -translate-y-1/2
            rounded-xl
            bg-gray-100
            px-4 py-1.5
            text-sm font-medium text-gray-700

            hover:bg-gray-200
            active:scale-95
            transition-all
          "
        >
          Search
        </button>
      </div>
    </form>
  )
}