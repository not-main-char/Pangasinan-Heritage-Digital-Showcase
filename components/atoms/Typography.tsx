/** Tidal Field Guide — semantic typography atoms that standardise hierarchy. */
import { type ElementType, type ReactNode } from "react";

const headings = {
  h1: "font-display text-5xl leading-[0.93] tracking-[-0.05em] text-tide-ink sm:text-6xl lg:text-8xl",
  h2: "font-display text-4xl leading-[0.98] tracking-[-0.04em] text-tide-ink sm:text-5xl lg:text-6xl",
  h3: "font-display text-3xl leading-[1.02] tracking-[-0.035em] text-tide-ink sm:text-4xl",
  h4: "font-display text-2xl leading-[1.08] tracking-[-0.025em] text-tide-ink",
} as const;

export function Heading({ as: Tag = "h2", children, className = "", id }: { as?: keyof typeof headings; children: ReactNode; className?: string; id?: string }) {
  return <Tag className={`${headings[Tag]} ${className}`} id={id}>{children}</Tag>;
}

export function Text({ as: Tag = "p", children, muted = false, className = "" }: { as?: ElementType; children: ReactNode; muted?: boolean; className?: string }) {
  return <Tag className={`font-body text-base leading-7 text-charcoal sm:text-[1.0625rem] ${muted ? "text-charcoal/75" : ""} ${className}`}>{children}</Tag>;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`font-body text-[0.6875rem] font-extrabold uppercase tracking-[0.18em] text-tidal-teal ${className}`}>{children}</p>;
}
