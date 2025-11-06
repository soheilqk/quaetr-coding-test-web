import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CompanyList } from "@/components/companies/CompanyList";
import { mockCompany } from "@/__tests__/fixtures/companies";

describe("CompanyList", () => {
  it("should render list of companies", () => {
    render(<CompanyList companies={[mockCompany]} title="Test Companies" />);
    expect(screen.getByText("Test Companies")).toBeInTheDocument();
    expect(screen.getByText("Test Company AS")).toBeInTheDocument();
  });
});
