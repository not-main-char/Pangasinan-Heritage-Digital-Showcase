/** Tidal Field Guide — responsive site collection, with an asymmetric record rhythm on desktop. */
import { HeritageCard } from "@/components/molecules";
import type { HeritageSite } from "@/lib/heritage";

export function HeritageGrid({ sites, onSiteSelect }: { sites: HeritageSite[]; onSiteSelect: (site: HeritageSite) => void }) {
  if (sites.length === 0) return <p className="border-l-2 border-copper-sand bg-white px-5 py-6 text-base leading-7 text-charcoal" role="status">No sites match this search. Try a municipality name or select a different category.</p>;
  return <div aria-live="polite" className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12 lg:gap-7">
    {sites.map((site, index) => {
      const feature = sites.length >= 3 && index === sites.length - 1;
      const width = feature ? "sm:col-span-2 lg:col-span-12" : index === 0 ? "lg:col-span-7" : "lg:col-span-5 lg:mt-12";
      return <div className={width} key={site.id}><HeritageCard layout={feature ? "feature" : "standard"} onViewMore={() => onSiteSelect(site)} site={site} /></div>;
    })}
  </div>;
}
