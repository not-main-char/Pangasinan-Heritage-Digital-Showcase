import { withBasePath } from "@/lib/site";

export function Image({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string; // required: every photo must have a description
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      alt={alt}
      className={`h-auto w-full object-cover ${className}`}
      decoding="async"
      height={600}
      loading={priority ? "eager" : "lazy"}
      src={withBasePath(src)}
      width={800}
    />
  );
}