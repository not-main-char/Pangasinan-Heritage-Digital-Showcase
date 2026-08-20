/** Tidal Field Guide — inline SVG icon atom that avoids a large icon-library dependency. */
import type { ReactNode } from "react";

export type IconName = "search" | "chevronDown" | "menu" | "close" | "mapPin" | "compass" | "waves";

const paths: Record<IconName, ReactNode> = {
  search: <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.2-4.2" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  close: <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></>,
  mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.2 8.8-2 4.4-4.4 2 2-4.4 4.4-2Z" /></>,
  waves: <><path d="M2 12c2.6 0 2.6-2 5.2-2s2.6 2 5.2 2 2.6-2 5.2-2 2.6 2 4.4 2" /><path d="M2 17c2.6 0 2.6-2 5.2-2s2.6 2 5.2 2 2.6-2 5.2-2 2.6 2 4.4 2" /></>,
};

export function Icon({ name, label, className = "" }: { name: IconName; label?: string; className?: string }) {
  return <svg aria-hidden={label ? undefined : true} aria-label={label} className={`size-5 shrink-0 ${className}`} fill="none" role={label ? "img" : undefined} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">{paths[name]}</svg>;
}
