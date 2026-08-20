"use client";

/** Tidal Field Guide — route composition for searchable heritage records. */
import { useMemo, useState } from "react";
import { Eyebrow, Heading, Icon, Text } from "@/components/atoms";
import { SearchForm } from "@/components/molecules";
import { HeritageGrid } from "@/components/organisms";
import { heritageSites, type HeritageSite } from "@/lib/heritage";

const filterOptions = [{ value: "all", label: "All categories" }, { value: "Coastal landscape", label: "Coastal landscape" }, { value: "Built landmark", label: "Built landmark" }, { value: "Natural wellness", label: "Natural wellness" }];

export function SitesExplorer() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<HeritageSite>(heritageSites[0]);
  const sites = useMemo(() => heritageSites.filter((site) => {
    const matchesFilter = filter === "all" || site.category === filter;
    const searchable = [site.name, site.location, site.category, site.description, ...site.searchTerms].join(" ").toLowerCase();
    return matchesFilter && (!query.trim() || searchable.includes(query.trim().toLowerCase()));
  }), [filter, query]);

  return <>
    <section aria-labelledby="sites-title" className="paper-grain border-b border-tide-ink/15"><div className="container grid gap-8 py-14 sm:py-20 lg:grid-cols-[0.65fr_1fr] lg:items-end lg:gap-16"><div><Eyebrow className="mb-5">Route 02 · heritage sites</Eyebrow><Heading as="h1" id="sites-title">Find a place, then hold it in view.</Heading><Text className="mt-6 max-w-xl">Search the record set by name, municipality, landscape type, or a keyword such as coast, landmark, or thermal.</Text></div><div className="border-l-2 border-tidal-teal bg-sea-glass/45 p-4 sm:p-5"><SearchForm filter={filter} filterOptions={filterOptions} onFilterChange={setFilter} onQueryChange={setQuery} query={query} /><p className="mt-3 text-xs leading-5 text-charcoal/80">Search and category filters use native form controls to keep this interaction lightweight.</p></div></div></section>
    <section aria-labelledby="collection-title" className="bg-mist py-12 sm:py-16"><div className="container"><div className="tideline mb-10"><div className="flex flex-wrap items-end justify-between gap-4"><div><Eyebrow className="mb-3">Filtered collection</Eyebrow><Heading as="h2" id="collection-title">Heritage records</Heading></div><p aria-live="polite" className="text-sm font-bold text-tidal-teal">{sites.length} of {heritageSites.length} sites shown</p></div></div><HeritageGrid onSiteSelect={setSelected} sites={sites} /></div></section>
    <section aria-labelledby="selected-title" className="container grid gap-8 py-14 sm:py-20 lg:grid-cols-[0.4fr_1fr] lg:gap-16"><aside className="border-t-2 border-tide-ink pt-5 lg:border-r lg:border-t-0 lg:pr-10"><Eyebrow className="mb-4">Selected record</Eyebrow><p className="font-display text-3xl leading-tight tracking-[-0.04em]">A card opens a short note below.</p></aside><article className="paper-grain border bg-white p-6 shadow-[0_8px_25px_rgba(16,42,54,0.07)] sm:p-8"><div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-tide-ink/15 pb-5"><span className="catalogue-label">{selected.category}</span><span className="inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal/80"><Icon className="size-4 text-copper-sand" name="mapPin" />{selected.location}</span></div><Heading as="h2" className="mt-6 text-4xl sm:text-5xl" id="selected-title">{selected.name}</Heading><Text className="mt-5 max-w-2xl">{selected.description} Continue to Field notes for a dedicated reading view of each place.</Text></article></section>
  </>;
}
