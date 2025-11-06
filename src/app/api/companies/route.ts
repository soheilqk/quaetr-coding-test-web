import type { CompaniesResponse } from "@/lib/types/company";
import { getCompanyService } from "@/lib/services/company-service";
import { logger } from "@/lib/utils/logger";
import { handleApiError } from "@/lib/utils/error-handler";
import { apiSuccess, CACHE_HEADERS } from "@/lib/utils/api-response";

export async function GET() {
  try {
    const service = getCompanyService();
    const companies = await service.getTrendingCompanies();

    logger.info("Successfully fetched trending companies", {
      count: companies.length,
    });

    const response: CompaniesResponse = {
      data: companies,
    };

    return apiSuccess(response, {
      cacheControl: CACHE_HEADERS.DEFAULT,
    });
  } catch (error) {
    return handleApiError(error, "GET /api/companies");
  }
}
