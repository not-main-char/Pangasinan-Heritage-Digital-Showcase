import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  tone?: "primary" | "secondary";
  showArrow?: boolean;
  className?: string;
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  tone = "primary",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const toneStyles =
    tone === "primary"
      ? "border-tidal-teal bg-tidal-teal text-white hover:bg-tidal-teal/90"
      : "border-tide-ink/25 bg-paper text-tide-ink hover:border-tidal-teal hover:text-tidal-teal";

  const sharedClasses = `inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-2.5 text-sm font-bold transition-colors ${toneStyles} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <Icon className="size-4" name="arrowUpRight" />}
    </>
  );

  if (href) {
    // External links use a regular <a> tag
    if (href.startsWith("http")) {
      return (
        <a
          className={sharedClasses}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {content}
        </a>
      );
    }

    // Internal routes use Next.js <Link> so basePath is automatically prepended
    return (
      <Link className={sharedClasses} href={href}>
        {content}
      </Link>
    );
  }

  return (
    <button className={sharedClasses} onClick={onClick} type={type}>
      {content}
    </button>
  );
}