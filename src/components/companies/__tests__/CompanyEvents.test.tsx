import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CompanyEvents } from "@/components/companies/CompanyEvents";
import { mockCompany } from "@/__tests__/fixtures/companies";

describe("CompanyEvents", () => {
  it("should render company events", () => {
    render(<CompanyEvents events={mockCompany.events} />);
    expect(screen.getByText("Q4 2024 Earnings Release")).toBeInTheDocument();
  });
});
