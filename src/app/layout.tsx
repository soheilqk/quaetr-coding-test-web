import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Quartr - Trending Companies",
    template: "%s | Quartr",
  },
  description: "Discover trending companies and their latest financial reports",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quartr.com",
    title: "Quartr - Trending Companies",
    description: "Discover trending companies and their latest financial reports",
    siteName: "Quartr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quartr - Trending Companies",
    description: "Discover trending companies and their latest financial reports",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
