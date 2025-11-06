import { Skeleton } from "@/components/ui/skeleton";

export function CompanySkeleton() {
  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <Skeleton className="h-12 w-12 shrink-0 rounded-xl" />

      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-full max-w-xs" />
      </div>

      <Skeleton className="h-5 w-5 shrink-0" />
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
