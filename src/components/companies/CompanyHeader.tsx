import { ExternalLink, Globe } from "lucide-react";
import type { Company } from "@/lib/types/company";
import { Badge } from "@/components/ui/badge";
import { CompanyLogo } from "./CompanyLogo";

interface CompanyHeaderProps {
  company: Company;
}

export function CompanyHeader({ company }: CompanyHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <CompanyLogo
          logoLightUrl={company.logoLightUrl}
          logoDarkUrl={company.logoDarkUrl}
          alt={`${company.displayName} logo`}
          size="lg"
          className="rounded-2xl"
        />

        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {company.displayName}
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{company.companyTicker}</Badge>
            <Badge variant="outline">{company.companyCountry}</Badge>
            <Badge variant="outline">{company.reportingCurrency}</Badge>
          </div>
        </div>
      </div>

      <p className="text-base text-muted-foreground leading-relaxed">
        {company.description}
      </p>

      <div className="flex flex-wrap gap-3">
        {company.infoUrl && (
          <a
            href={company.infoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-background hover:bg-accent transition-colors text-sm"
          >
            <Globe className="h-4 w-4" />
            Company Website
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
        {company.liveUrl && (
          <a
            href={company.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-background hover:bg-accent transition-colors text-sm"
          >
            Investor Relations
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}
