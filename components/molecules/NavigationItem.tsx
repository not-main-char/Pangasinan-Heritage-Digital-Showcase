/** Tidal Field Guide — a single, keyboard-accessible navigation link. */
export function NavigationItem({ href, label, active = false, onClick, className = "" }: { href: string; label: string; active?: boolean; onClick?: () => void; className?: string }) {
  return <a aria-current={active ? "page" : undefined} className={`relative inline-flex min-h-11 items-center py-2 font-body text-sm font-extrabold text-tide-ink transition hover:text-tidal-teal after:absolute after:bottom-1 after:left-0 after:h-0.5 after:bg-copper-sand after:transition-all ${active ? "after:w-full" : "after:w-0 hover:after:w-full"} ${className}`} href={href} onClick={onClick}>{label}</a>;
}
