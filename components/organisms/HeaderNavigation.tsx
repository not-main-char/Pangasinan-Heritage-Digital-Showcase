"use client";
import { useState } from "react";
import { Icon, Image } from "@/components/atoms";
import { NavigationItem } from "@/components/molecules";

const links = [
  { href: "/", label: "Home" },
  { href: "/sites", label: "Sites" },
  { href: "/field-notes", label: "Field notes" },
];

export function HeaderNavigation({
  activeHref = "/",
}: {
  activeHref?: "/" | "/sites" | "/field-notes";
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Keyboard users can jump straight to the content. */}
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-tide-ink focus:px-4 focus:py-3 focus:text-paper"
        href="#main-content"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-tide-ink/15 bg-paper/95 backdrop-blur">
        <div className="container flex min-h-[3.25rem] items-center justify-between gap-3">
          <a className="flex min-h-11 items-center gap-2" href="/">
            {/* The Image atom is w-full by default, so the ! is needed here to force a small logo. */}
            <Image
              alt=""
              className="!size-7 object-contain"
              priority
              src="/images/pangasinan-contour-mark.png"
            />
            <span className="whitespace-nowrap font-display text-base leading-none text-tide-ink">Pangasinan</span>
            <span className="hidden whitespace-nowrap text-[0.55rem] font-bold uppercase leading-none tracking-[0.14em] text-tidal-teal sm:block">
              Heritage field guide
            </span>
          </a>

          {/* Desktop menu */}
          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <NavigationItem
                active={link.href === activeHref}
                href={link.href}
                key={link.href}
                label={link.label}
              />
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center border border-tide-ink/20 bg-white text-tide-ink lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        {/* Mobile menu panel (only rendered when open) */}
        {menuOpen ? (
          <div className="border-t border-tide-ink/15 bg-paper lg:hidden" id="mobile-menu">
            <nav aria-label="Mobile" className="container flex flex-col py-1">
              {links.map((link) => (
                <NavigationItem
                  active={link.href === activeHref}
                  className="border-b border-tide-ink/10 py-2.5 last:border-0"
                  href={link.href}
                  key={link.href}
                  label={link.label}
                />
              ))}
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
