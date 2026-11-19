/**
 * components/atoms/tokens.ts  — ATOM (Color Tokens)
 * ------------------------------------------------------------------
 * The colours of the design system written down as code.
 * These same values also live in tailwind.config.ts, which is where
 * the classes like "text-tidal-teal" get their colour from.
 * This file is the readable list used in the Atomic Design manual.
 * ------------------------------------------------------------------
 */
export const COLOR_TOKENS = {
  tideInk: "#102A36",     // main dark text
  tidalTeal: "#006B6E",   // brand accent
  seaGlass: "#D4E9E6",    // soft background
  paper: "#FBF7EF",       // page background
  copperSand: "#A65F2A",  // highlights and focus ring
} as const;

/** The two screen widths the design changes at. */
export const BREAKPOINTS = {
  tablet: "640px",
  desktop: "1024px",
} as const;
