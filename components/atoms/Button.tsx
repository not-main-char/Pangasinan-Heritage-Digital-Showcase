/** Tidal Field Guide — a reusable action atom for navigation and in-page actions. */
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  tone?: "primary" | "secondary" | "quiet";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  showArrow?: boolean;
};

const toneClasses = {
  primary: "border border-tidal-teal bg-tidal-teal text-paper hover:border-tidal-teal-dark hover:bg-tidal-teal-dark",
  secondary: "border border-tide-ink bg-transparent text-tide-ink hover:bg-tide-ink hover:text-paper",
  quiet: "border border-transparent bg-transparent text-tidal-teal hover:border-tidal-teal/30 hover:bg-sea-glass/55",
};

const common = "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 py-2.5 font-body text-sm font-bold transition duration-150 active:scale-[0.97]";

export function Button({ children, tone = "primary", href, onClick, type = "button", ariaLabel, showArrow = false }: ButtonProps) {
  const content = <>{children}{showArrow ? <span aria-hidden="true">↗</span> : null}</>;
  const className = `${common} ${toneClasses[tone]}`;

  return href ? <a aria-label={ariaLabel} className={className} href={href}>{content}</a> : <button aria-label={ariaLabel} className={className} onClick={onClick} type={type}>{content}</button>;
}
