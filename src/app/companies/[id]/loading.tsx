import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CompanyHeaderSkeleton } from "@/components/companies/CompanyHeaderSkeleton";
import { CompanyEventsSkeleton } from "@/components/companies/CompanyEventsSkeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-8 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to companies
      </Link>

      <CompanyHeaderSkeleton />

      <Separator />

      <CompanyEventsSkeleton />
    </div>
  );
}
