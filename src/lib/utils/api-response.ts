import { NextResponse } from "next/server";
import type { ApiErrorResponse } from "@/lib/types/api";

export const CACHE_HEADERS = {
  DEFAULT: "public, s-maxage=60, stale-while-revalidate=120",
} as const;

export function apiSuccess<T>(
  data: T,
  options?: {
    status?: number;
    cacheControl?: string;
  }
): NextResponse<T> {
  const { status = 200, cacheControl } = options ?? {};

  const headers: HeadersInit = {};
  if (cacheControl) {
    headers["Cache-Control"] = cacheControl;
  }

  return NextResponse.json(data, { status, headers });
}

export function apiError(
  message: string,
  status = 500,
  code?: string
): NextResponse<ApiErrorResponse> {
  return NextResponse.json({ error: message, code }, { status });
}
