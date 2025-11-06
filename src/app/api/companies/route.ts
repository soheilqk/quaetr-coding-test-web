import { NextResponse } from "next/server";
import type { CompaniesResponse } from "@/lib/types/company";
import { trendingCompanies } from "@/lib/data/companies";

export async function GET() {
  const response: CompaniesResponse = {
    data: trendingCompanies,
  };

  return NextResponse.json(response, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
    },
  });
}
