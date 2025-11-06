import { CompanyListSkeleton } from "@/components/companies";

export default function Loading() {
  return (
    <main className="min-h-screen ">
      <div className="container max-w-2xl mx-auto px-6 py-8">
        <CompanyListSkeleton />
      </div>
    </main>
  );
}
