import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getCompanyById, getAllCompanyIds } from "@/lib/api/companies";
import { CompanyHeader } from "@/components/companies/CompanyHeader";
import { CompanyEvents } from "@/components/companies/CompanyEvents";
import { Separator } from "@/components/ui/separator";

interface CompanyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return getAllCompanyIds();
}

export async function generateMetadata({ params }: CompanyPageProps) {
  const { id } = await params;
  const company = await getCompanyById(parseInt(id));

  if (!company) {
    return {
      title: "Company Not Found",
    };
  }

  return {
    title: `${company.displayName} | Quartr`,
    description: company.description,
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { id } = await params;
  const company = await getCompanyById(parseInt(id));

  if (!company) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to companies
      </Link>

      {/* Company Header */}
      <CompanyHeader company={company} />

      <Separator />

      {/* Company Events */}
      <CompanyEvents events={company.events} />
    </div>
  );
}
