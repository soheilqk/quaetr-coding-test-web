import { NextResponse } from "next/server";
import { trendingCompanies } from "@/lib/data/companies";
import type { Company } from "@/lib/types/company";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

/**
 * GET /api/companies/[id]
 * Returns a single company by ID
 *
 * @returns Company object or 404 if not found
 */
export async function GET(
  request: Request,
  context: RouteContext
): Promise<NextResponse<Company | { error: string }>> {
  const { id } = await context.params;
  const companyId = parseInt(id);

  // Validate ID
  if (isNaN(companyId)) {
    return NextResponse.json(
      { error: "Invalid company ID" },
      { status: 400 }
    );
  }

  // Find company
  const company = trendingCompanies.find((c) => c.companyId === companyId);

  if (!company) {
    return NextResponse.json(
      { error: "Company not found" },
      { status: 404 }
    );
  }

  // Return company with cache headers
  return NextResponse.json(company, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
    },
  });
}
