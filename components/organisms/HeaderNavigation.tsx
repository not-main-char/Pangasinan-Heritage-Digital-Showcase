"use client";

/** Tidal Field Guide — global navigation with desktop links and a small-screen disclosure menu. */
import { useState } from "react";
import { Icon, Image } from "@/components/atoms";
import { NavigationItem } from "@/components/molecules";

const items = [{ href: "/", label: "Home" }, { href: "/sites", label: "Sites" }, { href: "/field-notes", label: "Field notes" }];

export function HeaderNavigation({ activeHref = "/" }: { activeHref?: "/" | "/sites" | "/field-notes" }) {
  const [open, setOpen] = useState(false);
  return <>
    <a className="sr-only z-50 bg-tide-ink px-4 py-3 text-sm font-bold text-paper focus:not-sr-only focus:absolute focus:left-4 focus:top-4" href="#main-content">Skip to main content</a>
    <header className="sticky top-0 z-40 border-b bg-paper/95 backdrop-blur-md">
      <div className="container flex min-h-[4.75rem] items-center justify-between gap-4">
        <a aria-label="Pangasinan Heritage Digital Showcase home" className="flex min-h-11 items-center gap-3" href="/"><Image alt="" className="!size-11 object-contain" priority src="/images/pangasinan-contour-mark.png" /><span><span className="block font-display text-[1.35rem] font-semibold tracking-[-0.035em]">Pangasinan</span><span className="mt-1 block text-[0.56rem] font-extrabold uppercase tracking-[0.17em] text-tidal-teal">Heritage field guide</span></span></a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">{items.map((item) => <NavigationItem active={item.href === activeHref} key={item.href} {...item} />)}</nav>
        <button aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? "Close navigation menu" : "Open navigation menu"} className="inline-flex size-11 items-center justify-center border bg-white text-tide-ink transition hover:border-tidal-teal hover:text-tidal-teal lg:hidden" onClick={() => setOpen(!open)} type="button"><Icon name={open ? "close" : "menu"} /></button>
      </div>
      {open ? <div className="border-t bg-paper lg:hidden" id="mobile-navigation"><nav aria-label="Mobile navigation" className="container flex flex-col py-3">{items.map((item) => <NavigationItem active={item.href === activeHref} className="border-b py-3 text-base last:border-0" key={item.href} {...item} onClick={() => setOpen(false)} />)}</nav></div> : null}
    </header>
  </>;
}
