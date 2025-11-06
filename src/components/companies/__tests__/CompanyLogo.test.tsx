import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CompanyLogo } from "@/components/companies/CompanyLogo";

describe("CompanyLogo", () => {
  it("should render logo", () => {
    render(
      <CompanyLogo
        logoLightUrl="https://example.com/logo-light.png"
        logoDarkUrl="https://example.com/logo-dark.png"
        alt="Test Logo"
      />
    );
    expect(screen.getByAltText("Test Logo")).toBeInTheDocument();
  });
});
