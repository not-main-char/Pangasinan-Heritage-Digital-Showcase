import Link from "next/link";

export function NavigationItem({
  href,
  label,
  active = false,
  className = "",
}: {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={`inline-flex min-h-11 items-center border-b-2 py-2 text-sm font-bold ${
        active
          ? "border-copper-sand text-tidal-teal"
          : "border-transparent text-tide-ink hover:text-tidal-teal"
      } ${className}`}
      href={href}
    >
      {label}
    </Link>
  );
}