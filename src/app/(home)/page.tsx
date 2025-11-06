import { getCompanyService } from "@/lib/services/company-service";
import { CompanyList } from "@/components/companies";

export const revalidate = 60;

export default async function Home() {
  const service = getCompanyService();
  const companies = await service.getTrendingCompanies();

  return (
    <div className="container max-w-2xl mx-auto px-6 py-8">
      <CompanyList title="Trending companies" companies={companies} />
    </div>
  );
}
