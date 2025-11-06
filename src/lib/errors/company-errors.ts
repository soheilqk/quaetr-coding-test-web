import { NotFoundError, InvalidInputError } from "./base-errors";

export class CompanyNotFoundError extends NotFoundError {
  constructor(companyId: number) {
    super("Company", companyId);
    this.name = "CompanyNotFoundError";
    Object.setPrototypeOf(this, CompanyNotFoundError.prototype);
  }

  get companyId(): number {
    return this.resourceId as number;
  }
}

export class InvalidCompanyIdError extends InvalidInputError {
  constructor(id: unknown) {
    super(`Invalid company ID: ${id}`, "companyId");
    this.name = "InvalidCompanyIdError";
    Object.setPrototypeOf(this, InvalidCompanyIdError.prototype);
  }
}
