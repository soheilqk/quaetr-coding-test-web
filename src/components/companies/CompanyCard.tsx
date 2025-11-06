"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Company } from "@/lib/types/company";
import { cn } from "@/lib/utils";
import { useThemeLogo } from "@/hooks/use-theme-logo";

interface CompanyCardProps {
  company: Company;
  className?: string;
}

export function CompanyCard({ company, className }: CompanyCardProps) {
  const logoUrl = useThemeLogo(company.logoLightUrl, company.logoDarkUrl);

  return (
    <Link
      href={`/companies/${company.companyId}`}
      className={cn(
        "group w-full flex items-center gap-4 py-4 border-b transition-colors hover:bg-accent/50 text-left cursor-pointer",
        className
      )}
    >
      {/* Company Logo */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-muted">
        <Image
          src={logoUrl}
          alt={`${company.displayName} logo`}
          fill
          className="object-contain p-2"
          sizes="48px"
        />
      </div>

      {/* Company Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-base text-foreground truncate">
          {company.displayName}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {company.description}
        </p>
      </div>

      {/* Arrow Icon */}
      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 shrink-0" />
    </Link>
  );
}
