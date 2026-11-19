
import type { ElementType, ReactNode } from "react";

/** The Tailwind classes for each heading level. */
const headingStyles = {
  h1: "text-4xl leading-tight sm:text-5xl lg:text-6xl",
  h2: "text-3xl leading-tight sm:text-4xl",
  h3: "text-2xl leading-snug",
} as const;

const fontDisplay = "font-display text-tide-ink";

export function Heading({
  as: Tag = "h2",
  id,
  children,
  className = "",
}: {
  as?: keyof typeof headingStyles;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag className={`${fontDisplay} ${headingStyles[Tag]} ${className}`} id={id}>
      {children}
    </Tag>
  );
}

export function Text({
  as: Tag = "p",
  muted = false,
  children,
  className = "",
}: {
  as?: ElementType;
  muted?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={`text-base leading-7 ${muted ? "text-tide-ink/70" : "text-tide-ink"} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** A small uppercase label that sits above a heading. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.18em] text-tidal-teal ${className}`}
    >
      {children}
    </p>
  );
}
