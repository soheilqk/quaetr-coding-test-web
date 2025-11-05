import type { NextApiRequest, NextApiResponse } from "next";
import type { CompaniesResponse } from "@/lib/types/company";
import { trendingCompanies } from "@/lib/data/companies";

/**
 * Handles GET requests for trending companies
 * Returns a list of trending companies
 */
function handleGet(
  req: NextApiRequest,
  res: NextApiResponse<CompaniesResponse>
) {
  res.status(200).json({
    data: trendingCompanies,
  });
}

/**
 * API Route: /api/companies
 *
 * Supported methods:
 * - GET: Retrieve all trending companies
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CompaniesResponse>
) {
  switch (req.method) {
    case "GET":
      return handleGet(req, res);

    default:
      res.setHeader("Allow", ["GET"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
