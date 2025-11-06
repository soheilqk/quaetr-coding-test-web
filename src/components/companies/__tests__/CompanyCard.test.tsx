import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CompanyCard } from "@/components/companies/CompanyCard";
import { mockCompany } from "@/__tests__/fixtures/companies";

describe("CompanyCard", () => {
  it("should render company information", () => {
    render(<CompanyCard company={mockCompany} />);
    expect(screen.getByText("Test Company AS")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test company description")
    ).toBeInTheDocument();
  });
});
