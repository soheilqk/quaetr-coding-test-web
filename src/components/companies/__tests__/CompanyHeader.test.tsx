import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CompanyHeader } from "@/components/companies/CompanyHeader";
import { mockCompany } from "@/__tests__/fixtures/companies";

describe("CompanyHeader", () => {
  it("should render company header", () => {
    render(<CompanyHeader company={mockCompany} />);
    expect(screen.getByText("Test Company AS")).toBeInTheDocument();
  });
});
