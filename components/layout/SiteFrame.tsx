/** Tidal Field Guide — shared shell for all App Router pages. */
import type { ReactNode } from "react";
import { HeaderNavigation } from "@/components/organisms";

export function SiteFrame({ children, activeHref }: { children: ReactNode; activeHref: "/" | "/sites" | "/field-notes" }) {
  return <div className="min-h-screen overflow-x-hidden bg-paper text-tide-ink">
    <HeaderNavigation activeHref={activeHref} />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer className="border-t border-tide-ink/15 bg-tide-ink text-paper">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-display text-xl tracking-[-0.03em]">Pangasinan Heritage Digital Showcase</p>
        <p className="text-xs leading-5 text-paper/70">A concise student field-guide collection for Pangasinan heritage discovery.</p>
      </div>
    </footer>
  </div>;
}
