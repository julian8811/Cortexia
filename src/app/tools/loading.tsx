export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 animate-pulse">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
        <div className="space-y-4">
          <div className="h-12 w-96 bg-surface-container-high rounded-2xl"></div>
          <div className="h-6 w-64 bg-surface-container-low rounded-xl"></div>
        </div>
        <div className="h-14 w-48 bg-surface-container-high rounded-2xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-80 bg-surface-container-low border border-outline-variant/10 rounded-[32px] p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div className="h-14 w-14 bg-surface-container-high rounded-2xl"></div>
              <div className="h-6 w-24 bg-surface-container/50 rounded-full"></div>
            </div>
            <div className="space-y-3">
              <div className="h-8 w-3/4 bg-surface-container-high rounded-xl"></div>
              <div className="h-4 w-1/2 bg-surface-container/30 rounded-lg"></div>
            </div>
            <div className="pt-6 border-t border-outline-variant/10">
               <div className="h-4 w-32 bg-surface-container/20 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
