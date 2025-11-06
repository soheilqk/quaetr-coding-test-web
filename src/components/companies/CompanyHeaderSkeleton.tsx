import { Skeleton } from "@/components/ui/skeleton";

export function CompanyHeaderSkeleton() {
  return (
    <div className="space-y-6">
      {/* Logo and Name Skeleton */}
      <div className="flex items-start gap-6">
        <Skeleton className="h-20 w-20 shrink-0 rounded-2xl" />

        <div className="flex-1 space-y-2">
          <Skeleton className="h-9 w-64" />
          <div className="flex flex-wrap items-center gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-6 w-14" />
          </div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Links Skeleton */}
      <div className="flex flex-wrap gap-3">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-36" />
      </div>
    </div>
  );
}
