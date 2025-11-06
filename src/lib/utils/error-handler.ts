import { DomainError } from "@/lib/errors/base-errors";
import type { ApiErrorResponse } from "@/lib/types/api";
import { NextResponse } from "next/server";
import { apiError } from "./api-response";
import { logger } from "./logger";

export function handleApiError(
  error: unknown,
  context?: string
): NextResponse<ApiErrorResponse> {
  if (error instanceof DomainError) {
    const isClientError = error.statusCode >= 400 && error.statusCode < 500;

    if (isClientError) {
      logger.info(`${error.name}: ${error.message}`, { context });
    } else {
      logger.error(`${error.name}: ${error.message}`, error, { context });
    }

    return apiError(error.message, error.statusCode, error.code);
  }

  logger.error("Unexpected error", error, { context });

  const isDevelopment = process.env.NODE_ENV === "development";
  const message =
    isDevelopment && error instanceof Error
      ? error.message
      : "An unexpected error occurred";

  return apiError(message, 500, "INTERNAL_SERVER_ERROR");
}
