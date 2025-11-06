import type { Company } from "@/lib/types/company";
import {
  createCompanyRepository,
  type CompanyRepository,
} from "./company-repository";
import { CompanyNotFoundError, InvalidCompanyIdError } from "@/lib/errors";

export class CompanyService {
  private repository: CompanyRepository;

  constructor(repository?: CompanyRepository) {
    this.repository = repository ?? createCompanyRepository();
  }

  async getTrendingCompanies(): Promise<Company[]> {
    return this.repository.findAll();
  }

  async getCompanyById(id: number): Promise<Company> {
    if (!Number.isInteger(id) || id <= 0) {
      throw new InvalidCompanyIdError(id);
    }

    const company = await this.repository.findById(id);

    if (!company) {
      throw new CompanyNotFoundError(id);
    }

    return company;
  }

  async getAllCompanyIds(): Promise<number[]> {
    return this.repository.getAllIds();
  }
}

let companyServiceInstance: CompanyService | null = null;

export function getCompanyService(): CompanyService {
  if (!companyServiceInstance) {
    companyServiceInstance = new CompanyService();
  }
  return companyServiceInstance;
}
