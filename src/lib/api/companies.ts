import type { CompaniesResponse, Company } from "@/lib/types/company";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

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

export async function getCompanyById(id: number): Promise<Company | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/companies/${id}`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(
        `Failed to fetch company: ${res.status} ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching company ${id}:`, error);
    return null;
  }
}

export async function getAllCompanyIds(): Promise<{ id: string }[]> {
  const { data: companies } = await getCompanies();
  return companies.map((company) => ({
    id: company.companyId.toString(),
  }));
}
