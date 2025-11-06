"use client";

import Image from "next/image";
import { useThemeLogo } from "@/hooks/use-theme-logo";
import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  logoLightUrl: string;
  logoDarkUrl: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-20 w-20",
};

export function CompanyLogo({
  logoLightUrl,
  logoDarkUrl,
  alt,
  size = "sm",
  className,
}: CompanyLogoProps) {
  const logoUrl = useThemeLogo(logoLightUrl, logoDarkUrl);

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-xl bg-muted",
        sizeClasses[size],
        className
      )}
    >
      <Image
        src={logoUrl}
        alt={alt}
        fill
        className="object-contain p-2"
        sizes={size === "lg" ? "80px" : size === "md" ? "64px" : "48px"}
      />
    </div>
  );
}
