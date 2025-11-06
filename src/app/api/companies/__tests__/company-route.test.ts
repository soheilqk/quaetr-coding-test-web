import { describe, it, expect } from "vitest";
import { GET } from "@/app/api/companies/[id]/route";

describe("GET /api/companies/[id]", () => {
  it("should return company by id", async () => {
    const mockRequest = new Request("http://localhost:3000/api/companies/1");
    const mockContext = {
      params: Promise.resolve({ id: "1" }),
    };

    const response = await GET(mockRequest, mockContext);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty("companyId", 1);
  });

  it("should return 404 for non-existent company", async () => {
    const mockRequest = new Request("http://localhost:3000/api/companies/999");
    const mockContext = {
      params: Promise.resolve({ id: "999" }),
    };

    const response = await GET(mockRequest, mockContext);

    expect(response.status).toBe(404);
  });

  it("should return 400 for invalid id", async () => {
    const mockRequest = new Request(
      "http://localhost:3000/api/companies/invalid"
    );
    const mockContext = {
      params: Promise.resolve({ id: "invalid" }),
    };

    const response = await GET(mockRequest, mockContext);

    expect(response.status).toBe(400);
  });
});
