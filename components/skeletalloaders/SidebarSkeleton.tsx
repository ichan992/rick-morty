export function SidebarSkeleton() {
  return (
    <div className="w-64 p-6 animate-pulse">
      <div className="h-6 w-24 bg-gray-200 rounded mb-6" />

      {/* Section */}
      <div className="space-y-4">
        <div className="h-4 w-20 bg-gray-200 rounded" />

        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>
        ))}
      </div>

      <div className="border-b my-6" />

      <div className="space-y-4">
        <div className="h-4 w-20 bg-gray-200 rounded" />

        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-28 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}