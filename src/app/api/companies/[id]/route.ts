import type { Company } from "@/lib/types/company";
import { getCompanyService } from "@/lib/services/company-service";
import { logger } from "@/lib/utils/logger";
import { handleApiError } from "@/lib/utils/error-handler";
import { apiSuccess, CACHE_HEADERS } from "@/lib/utils/api-response";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, context: RouteContext) {
  const { id } = await context.params;

  try {
    const companyId = parseInt(id, 10);

    const service = getCompanyService();
    const company = await service.getCompanyById(companyId);

    logger.info("Successfully fetched company", {
      companyId: company.companyId,
      companyName: company.displayName,
    });

    return apiSuccess<Company>(company, {
      cacheControl: CACHE_HEADERS.DEFAULT,
    });
  } catch (error) {
    return handleApiError(error, `GET /api/companies/${id}`);
  }
}
