import { describe, it, expect, beforeEach } from "vitest";
import { CompanyService } from "../company-service";
import { InMemoryCompanyRepository } from "../company-repository";
import { CompanyNotFoundError, InvalidCompanyIdError } from "@/lib/errors";
import { mockCompanies } from "@/__tests__/fixtures/companies";

describe("CompanyService", () => {
  let service: CompanyService;

  beforeEach(() => {
    const repository = new InMemoryCompanyRepository(mockCompanies);
    service = new CompanyService(repository);
  });

  it("should return all companies", async () => {
    const companies = await service.getTrendingCompanies();
    expect(companies).toHaveLength(2);
  });

  it("should return company by id", async () => {
    const company = await service.getCompanyById(1);
    expect(company.companyId).toBe(1);
  });

  it("should throw error for invalid company id", async () => {
    await expect(service.getCompanyById(999)).rejects.toThrow(
      CompanyNotFoundError
    );
  });

  it("should throw error for invalid id format", async () => {
    await expect(service.getCompanyById(-1)).rejects.toThrow(
      InvalidCompanyIdError
    );
  });
});
