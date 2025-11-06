import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getCompanyService } from "@/lib/services/company-service";
import { CompanyNotFoundError } from "@/lib/errors";
import { CompanyHeader } from "@/components/companies/CompanyHeader";
import { CompanyEvents } from "@/components/companies/CompanyEvents";
import { Separator } from "@/components/ui/separator";

export const revalidate = 60;

interface CompanyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const service = getCompanyService();
  const ids = await service.getAllCompanyIds();
  return ids.map((id) => ({ id: id.toString() }));
}

export async function generateMetadata({ params }: CompanyPageProps) {
  const { id } = await params;
  const service = getCompanyService();

  try {
    const company = await service.getCompanyById(parseInt(id, 10));

    return {
      title: `${company.displayName} | Quartr`,
      description: company.description,
      openGraph: {
        title: `${company.displayName} | Quartr`,
        description: company.description,
        images: [company.logoLightUrl],
      },
      twitter: {
        title: `${company.displayName} | Quartr`,
        description: company.description,
        images: [company.logoLightUrl],
      },
    };
  } catch (error) {
    return {
      title: "Company Not Found",
    };
  }
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { id } = await params;
  const service = getCompanyService();

  try {
    const company = await service.getCompanyById(parseInt(id, 10));

    return (
      <div className="container max-w-4xl mx-auto px-6 py-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to companies
        </Link>

        <CompanyHeader company={company} />

        <Separator />

        <CompanyEvents events={company.events} />
      </div>
    );
  } catch (error) {
    if (error instanceof CompanyNotFoundError) {
      notFound();
    }
    // Re-throw unexpected errors to be caught by error boundary
    throw error;
  }
}
