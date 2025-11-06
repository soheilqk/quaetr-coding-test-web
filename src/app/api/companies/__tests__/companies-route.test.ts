import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/companies/route";

describe("GET /api/companies", () => {
  it("should return companies list", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty("data");
    expect(Array.isArray(data.data)).toBe(true);
  });
});
