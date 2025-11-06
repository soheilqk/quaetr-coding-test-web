import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header } from "@/components/header";

describe("Header", () => {
  it("should render", () => {
    render(<Header />);
    expect(screen.getByText("Quartr")).toBeInTheDocument();
  });
});
