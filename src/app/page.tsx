import { getCompanies } from "@/lib/api/companies";
import { CompanyList } from "@/components/companies";

export default async function Home() {
  const { data: companies } = await getCompanies();

  return (
    <div className="container max-w-2xl mx-auto px-6 py-8">
      <CompanyList title="Trending companies" companies={companies} />
    </div>
  );
}
