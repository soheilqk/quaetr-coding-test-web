import type { Company } from "@/lib/types/company";
import { trendingCompanies } from "@/lib/data/companies";

export interface CompanyRepository {
  findAll(): Promise<Company[]>;
  findById(id: number): Promise<Company | null>;
  getAllIds(): Promise<number[]>;
}

export class InMemoryCompanyRepository implements CompanyRepository {
  private companies: Company[];

  constructor(companies: Company[] = trendingCompanies) {
    this.companies = companies;
  }

  async findAll(): Promise<Company[]> {
    return [...this.companies];
  }

  async findById(id: number): Promise<Company | null> {
    const company = this.companies.find((c) => c.companyId === id);
    return company ? { ...company } : null;
  }

  async getAllIds(): Promise<number[]> {
    return this.companies.map((c) => c.companyId);
  }
}

export function createCompanyRepository(): CompanyRepository {
  return new InMemoryCompanyRepository();
}
