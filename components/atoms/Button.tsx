import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  tone?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  label?: string; // optional screen-reader text, when the visible text is short
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 border px-4 py-2.5 text-sm font-bold transition";

const tones = {
  primary: "border-tidal-teal bg-tidal-teal text-paper hover:bg-tidal-teal-dark",
  secondary: "border-tide-ink bg-transparent text-tide-ink hover:bg-tide-ink hover:text-paper",
};

export function Button({
  children,
  tone = "primary",
  href,
  onClick,
  showArrow = false,
  label,
}: ButtonProps) {
  const className = `${base} ${tones[tone]}`;

  // The arrow is decorative, so screen readers are told to ignore it.
  const content = (
    <>
      {children}
      {showArrow ? <span aria-hidden="true">↗</span> : null}
    </>
  );

  // A link navigates to another page...
  if (href) {
    return (
      <Link aria-label={label} className={className} href={href}>
        {content}
      </Link>
    );
  }

  // ...a button acts on the current page.
  return (
    <button aria-label={label} className={className} onClick={onClick} type="button">
      {content}
    </button>
  );
}