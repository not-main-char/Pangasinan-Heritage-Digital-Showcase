import { HeritageCard } from "@/components/molecules";
import type { HeritageSite } from "@/lib/heritage";

export function HeritageGrid({
  sites,
  onSiteSelect,
  query = "",
}: {
  sites: HeritageSite[];
  onSiteSelect?: (site: HeritageSite) => void;
  query?: string;
}) {
  if (sites.length === 0) {
    return (
      <p className="border-l-4 border-copper-sand bg-white p-5" role="status">
        No sites match {query ? `"${query}"` : "this filter"}. Try &quot;island&quot;,
        &quot;lighthouse&quot;, &quot;spring&quot;, or a municipality such as Bolinao.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sites.map((site) => (
        <HeritageCard
          key={site.id}
          onOpen={onSiteSelect ? () => onSiteSelect(site) : undefined}
          site={site}
        />
      ))}
    </div>
  );
}
