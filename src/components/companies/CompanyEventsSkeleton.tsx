import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CompanyEventsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-48" />

      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-48" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-12" />
                  <Skeleton className="h-6 w-16" />
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-28" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
