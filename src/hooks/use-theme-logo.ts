"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeLogo(lightUrl: string, darkUrl: string): string {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and before mount, default to dark logo (light theme)
  if (!mounted) {
    return darkUrl;
  }

  // After mount, use theme-appropriate logo
  return resolvedTheme === "dark" ? lightUrl : darkUrl;
}
