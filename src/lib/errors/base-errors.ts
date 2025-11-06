export class DomainError extends Error {
  public readonly statusCode: number;
  public readonly code?: string;

  constructor(message: string, statusCode = 500, code?: string) {
    super(message);
    this.name = "DomainError";
    this.statusCode = statusCode;
    this.code = code;
    Object.setPrototypeOf(this, DomainError.prototype);
  }
}

export class NotFoundError extends DomainError {
  public readonly resourceType: string;
  public readonly resourceId: unknown;

  constructor(resourceType: string, resourceId: unknown) {
    super(`${resourceType} with ID ${resourceId} not found`, 404, "NOT_FOUND");
    this.name = "NotFoundError";
    this.resourceType = resourceType;
    this.resourceId = resourceId;
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class InvalidInputError extends DomainError {
  public readonly field?: string;

  constructor(message: string, field?: string) {
    super(message, 400, "INVALID_INPUT");
    this.name = "InvalidInputError";
    this.field = field;
    Object.setPrototypeOf(this, InvalidInputError.prototype);
  }
}

export class ValidationError extends DomainError {
  public readonly details?: unknown;

  constructor(message: string, details?: unknown) {
    super(message, 400, "VALIDATION_ERROR");
    this.name = "ValidationError";
    this.details = details;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
