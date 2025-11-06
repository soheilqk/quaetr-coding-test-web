"use client";

import type { Company } from "@/lib/types/company";
import { CompanyCard } from "./CompanyCard";

interface CompanyListProps {
  title?: string;
  companies: Company[];
  className?: string;
}

export function CompanyList({ title, companies, className }: CompanyListProps) {
  if (companies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No companies found</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <h2 className="text-sm font-normal text-muted-foreground mb-1">
          {title}
        </h2>
      )}
      <div>
        {companies.map((company) => (
          <CompanyCard key={company.companyId} company={company} />
        ))}
      </div>
    </div>
  );
}
