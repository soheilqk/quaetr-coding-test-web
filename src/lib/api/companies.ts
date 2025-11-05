import type { CompaniesResponse } from "@/lib/types/company";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

/**
 * Fetches trending companies data from the API
 * Uses fetch with built-in caching and revalidation
 *
 * @returns Promise resolving to companies response data
 * @throws Error if the fetch fails
 */
export async function getCompanies(): Promise<CompaniesResponse> {
  const res = await fetch(`${API_BASE_URL}/api/companies`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch companies: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}
