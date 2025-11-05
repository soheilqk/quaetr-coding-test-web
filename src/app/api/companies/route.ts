import { NextResponse } from "next/server";
import type { CompaniesResponse } from "@/lib/types/company";
import { trendingCompanies } from "@/lib/data/companies";

/**
 * GET /api/companies
 * Returns a list of trending companies with their associated data
 *
 * @returns JSON response with companies data as CompaniesResponse
 *
 * @example
 * fetch('/api/companies')
 *   .then(res => res.json())
 *   .then(data => console.log(data.data))
 */
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
