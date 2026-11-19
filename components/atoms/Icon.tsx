/**
 * components/atoms/Icon.tsx  — ATOM
 * ------------------------------------------------------------------
 * Tiny pictures drawn with SVG, written by hand inside the code.
 * No icon library is installed, so there is nothing extra to download.
 *
 *   <Icon name="mapPin" />                  -> decorative (ignored by screen readers)
 *   <Icon name="mapPin" label="Location" /> -> announced as an image
 * ------------------------------------------------------------------
 */
import type { ReactNode } from "react";

/** The only icon names that exist. Using any other name is a TypeScript error. */
export type IconName = "search" | "menu" | "close" | "mapPin" | "chevronDown";

/** One drawing for each icon name. */
const drawings: Record<IconName, ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
};

export function Icon({
  name,
  label,
  className = "",
}: {
  name: IconName;
  label?: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={`size-5 shrink-0 ${className}`}
      fill="none"
      role={label ? "img" : undefined}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {drawings[name]}
    </svg>
  );
}
