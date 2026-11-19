/**
 * components/layout/SiteFrame.tsx  — LAYOUT
 * ------------------------------------------------------------------
 * The frame around every page: header on top, content in the middle,
 * footer at the bottom. Every route uses it, so the site looks the
 * same everywhere and the header only has to be written once.
 * ------------------------------------------------------------------
 */
import type { ReactNode } from "react";
import { HeaderNavigation } from "@/components/organisms";

export function SiteFrame({
  children,
  activeHref,
}: {
  children: ReactNode;
  activeHref: "/" | "/sites" | "/field-notes";
}) {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <HeaderNavigation activeHref={activeHref} />

      <main className="flex-1" id="main-content">
        {children}
      </main>

      <footer className="border-t border-tide-ink/15 bg-tide-ink text-paper">
        <div className="container flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg">Pangasinan Heritage Digital Showcase</p>
          <p className="text-xs text-paper/70">
            A student field guide to three Pangasinan heritage sites.
          </p>
        </div>
      </footer>
    </div>
  );
}
