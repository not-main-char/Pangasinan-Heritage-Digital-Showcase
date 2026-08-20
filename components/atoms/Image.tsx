/** Tidal Field Guide — native image atom with explicit lazy loading for low-data connections. */
export function Image({ src, alt, priority = false, className = "" }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return <img alt={alt} className={`h-auto w-full object-cover ${className}`} decoding="async" height="600" loading={priority ? "eager" : "lazy"} src={src} width="800" />;
}
