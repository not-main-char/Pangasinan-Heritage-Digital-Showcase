import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description: "A mobile-first digital field guide to selected Pangasinan heritage sites.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
