import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Company } from "@/lib/types/company";
import { cn } from "@/lib/utils";
import { CompanyLogo } from "./CompanyLogo";

interface CompanyCardProps {
  company: Company;
  className?: string;
}

export function CompanyCard({ company, className }: CompanyCardProps) {
  return (
    <Link
      href={`/companies/${company.companyId}`}
      className={cn(
        "group w-full flex items-center gap-4 py-4 border-b transition-colors hover:bg-accent/50 text-left cursor-pointer",
        className
      )}
    >
      <CompanyLogo
        logoLightUrl={company.logoLightUrl}
        logoDarkUrl={company.logoDarkUrl}
        alt={`${company.displayName} logo`}
        size="sm"
      />

      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-base text-foreground truncate">
          {company.displayName}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {company.description}
        </p>
      </div>

      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 shrink-0" />
    </Link>
  );
}
