export function CardSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="border border-gray-200 rounded-xl overflow-hidden animate-pulse">


          <div className="h-48 bg-gray-200" />


          <div className="p-4 space-y-3">
            <div className="h-4 w-32 bg-gray-200 rounded" />
            <div className="h-3 w-24 bg-gray-200 rounded" />


            <div className="flex gap-2 pt-2">
              <div className="h-6 w-20 bg-gray-200 rounded-full" />
              <div className="h-6 w-20 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}