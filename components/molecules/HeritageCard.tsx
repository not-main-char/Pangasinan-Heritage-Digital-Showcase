/** Tidal Field Guide — reusable tourist-site preview, vertical by default and horizontal for a featured record. */
import { Button, Eyebrow, Image, Text, Heading } from "@/components/atoms";
import type { HeritageSite } from "@/lib/heritage";

export function HeritageCard({ site, layout = "standard", onViewMore }: { site: HeritageSite; layout?: "standard" | "feature"; onViewMore?: () => void }) {
  return <article className={`group relative flex h-full flex-col overflow-hidden border bg-white shadow-[0_1px_0_rgba(16,42,54,0.08)] transition duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_14px_32px_rgba(16,42,54,0.12)] ${layout === "feature" ? "lg:flex-row" : ""}`}>
    <div className={`relative overflow-hidden bg-sea-glass ${layout === "feature" ? "lg:w-[53%]" : ""}`}>
      <Image alt={site.imageAlt} className="transition duration-500 motion-safe:group-hover:scale-[1.035]" src={site.imageSrc} />
      <span aria-hidden="true" className="absolute right-0 top-0 flex size-12 items-center justify-center border-b border-l bg-paper/90"><Image alt="" className="size-7" src="/images/pangasinan-contour-mark.png" /></span>
    </div>
    <div className={`paper-grain flex flex-1 flex-col p-5 sm:p-6 ${layout === "feature" ? "lg:w-[47%] lg:p-8" : ""}`}>
      <div className="mb-5 flex items-center justify-between gap-3"><Eyebrow>{site.category}</Eyebrow><span className="text-xs font-semibold text-charcoal/70">{site.location}</span></div>
      <Heading as="h3" className="mb-3 text-[2.05rem] sm:text-4xl">{site.name}</Heading>
      <Text muted className="mb-6 max-w-[38ch] text-[0.9375rem] leading-6 sm:text-base">{site.description}</Text>
      <div className="mt-auto"><Button ariaLabel={`Open record for ${site.name}`} onClick={onViewMore} showArrow tone="secondary">Open record</Button></div>
    </div>
  </article>;
}
