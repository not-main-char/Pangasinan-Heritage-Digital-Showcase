import type { Metadata } from "next";
import "./globals.css";

/** The default title and description for every page. */
export const metadata: Metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description:
    "A fast, mobile-first field guide to three Pangasinan heritage sites: Hundred Islands, Bolinao Lighthouse, and Balungao Hot Spring.",
};

/**
 * The root layout is the outer shell of ALL pages.
 * It only sets the page language and loads the global CSS;
 * the header and footer live in components/layout/SiteFrame.tsx.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
