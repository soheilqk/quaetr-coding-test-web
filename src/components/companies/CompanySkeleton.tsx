export function CompanySkeleton() {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      {/* Logo Skeleton */}
      <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200 animate-pulse" />

      {/* Content Skeleton */}
      <div className="flex-1 space-y-2">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-full max-w-xs bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Arrow Skeleton */}
      <div className="h-5 w-5 bg-gray-200 rounded animate-pulse shrink-0" />
    </div>
  );
}

export function CompanyListSkeleton() {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <CompanySkeleton key={i} />
      ))}
    </div>
  );
}
