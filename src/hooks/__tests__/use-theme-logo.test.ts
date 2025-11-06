import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useThemeLogo } from "@/hooks/use-theme-logo";

describe("useThemeLogo", () => {
  it("should return logo based on theme", () => {
    const { result } = renderHook(() =>
      useThemeLogo(
        "https://example.com/logo-light.png",
        "https://example.com/logo-dark.png"
      )
    );
    expect(result.current).toBeTruthy();
  });
});
