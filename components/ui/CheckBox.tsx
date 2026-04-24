import React from "react"

interface checkBoxProps {
  checked?: boolean
  name: string
  onClick?: () => void
  totalCount?: { value: string; count: number }[]
}

export default function CheckBox({
  checked = false,
  name,
  totalCount,
  onClick,
}: checkBoxProps) {

  const item = totalCount?.find(
    (t) => t.value === name
  )

  const count = item?.count ?? 0

  return (
    <div className="inline-flex items-center gap-3">
      <label className="flex items-center cursor-pointer relative">
        <input
          checked={checked}
          onChange={onClick}
          type="checkbox"
          disabled={count === 0}
          className="peer bg-gray-300 border-gray-200 text-black h-5 w-5 cursor-pointer transition-all appearance-none hover:shadow-md border checked:bg-gray-100 checked:border-slate-800 disabled:opacity-30 disabled:cursor-not-allowed"
        />

        <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>

      <span className="text-gray-700">{name}</span>

      <span className="inline-flex items-center bg-gray-50 p-1 text-[10px] rounded-sm inset-ring inset-ring-gray-500/10 font-bold">
        {count}
      </span>
    </div>
  )
}