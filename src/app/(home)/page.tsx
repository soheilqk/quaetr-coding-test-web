import type { Metadata } from "next";
import { getCompanyService } from "@/lib/services/company-service";
import { CompanyList } from "@/components/companies";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Trending Companies",
  description: "Discover trending companies and their latest financial reports",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quartr.com",
    title: "Quartr - Trending Companies",
    description:
      "Discover trending companies and their latest financial reports",
    siteName: "Quartr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quartr - Trending Companies",
    description:
      "Discover trending companies and their latest financial reports",
  },
};

export default async function Home() {
  const service = getCompanyService();
  const companies = await service.getTrendingCompanies();

  return (
    <div className="container max-w-4xl mx-auto px-6 py-8">
      <CompanyList title="Trending companies" companies={companies} />
    </div>
  );
}
