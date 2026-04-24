
import CheckBox from '../ui/CheckBox'

interface GenderProps {
    data: string[]
    selected: string | null,
    setSelected: (value: string) => void
    counts: { value: string; count: number }[]
}

export default function SpeciesFilter({ data, selected, setSelected, counts }: GenderProps) {

    const handleSelect = (value: string) => {
        if (selected === value) {
            setSelected('')
        } else {
            setSelected(value)
        }

    }

    if (data === null) return null
    return (
        <div>
            <h3 className="text-sm mb-3">Species</h3>

            <div className='flex flex-col gap-1'>

                {data.map((gender: any) => (
                    <CheckBox
                        key={gender}
                        name={gender}

                        totalCount={counts}
                        checked={selected === gender}
                        onClick={() => handleSelect(gender)}
                    />
                ))}
            </div>
        </div>
    )
}