"use client";

/** Tidal Field Guide — page composition that connects atoms, molecules, and organisms. */
import { useMemo, useState } from "react";
import { Eyebrow, Heading, Icon, Text } from "@/components/atoms";
import { SearchForm } from "@/components/molecules";
import { HeaderNavigation, HeritageGrid } from "@/components/organisms";
import { heritageSites, type HeritageSite } from "@/lib/heritage";

const filterOptions = [{ value: "all", label: "All categories" }, { value: "Coastal landscape", label: "Coastal landscape" }, { value: "Built landmark", label: "Built landmark" }, { value: "Natural wellness", label: "Natural wellness" }];

export function ShowcasePage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<HeritageSite>(heritageSites[0]);
  const sites = useMemo(() => heritageSites.filter((site) => {
    const matchFilter = filter === "all" || site.category === filter;
    const text = [site.name, site.location, site.category, site.description, ...site.searchTerms].join(" ").toLowerCase();
    return matchFilter && (!query.trim() || text.includes(query.trim().toLowerCase()));
  }), [filter, query]);

  return <div className="min-h-screen overflow-x-hidden bg-paper text-tide-ink" id="top">
    <HeaderNavigation />
    <main id="main-content" tabIndex={-1}>
      <section aria-labelledby="hero-title" className="paper-grain border-b" id="explore"><div className="container grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.5fr)] lg:items-end lg:gap-16 lg:py-28"><div><Eyebrow className="mb-5">Pangasinan, Philippines · digital field guide</Eyebrow><Heading as="h1" className="max-w-4xl" id="hero-title">Read the shoreline <em className="font-normal text-tidal-teal">differently.</em></Heading><Text className="mt-7 max-w-2xl text-[1.05rem] leading-8 sm:text-xl">Three field records where coast, landmark, and thermal landscape reveal distinct ways of knowing Pangasinan.</Text></div><aside aria-label="Guide annotation" className="border-l-2 border-copper-sand pl-5 lg:mb-2"><p className="font-display text-3xl leading-none">03</p><p className="mt-2 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-tidal-teal">Field records</p><p className="mt-4 text-sm leading-6 text-charcoal/80">A short coastal notebook: each entry begins with place, form, and context.</p></aside></div></section>
      <section aria-labelledby="search-title" className="container py-10 sm:py-14"><div className="grid gap-6 lg:grid-cols-[minmax(13rem,0.5fr)_minmax(0,1.5fr)] lg:gap-12"><div className="lg:pt-1"><Eyebrow className="mb-3">Record finder</Eyebrow><Heading as="h2" className="text-4xl sm:text-5xl" id="search-title">Start with a name or a kind of landscape.</Heading></div><div className="border-l-2 border-tidal-teal bg-sea-glass/45 p-4 sm:p-5"><SearchForm filter={filter} filterOptions={filterOptions} onFilterChange={setFilter} onQueryChange={setQuery} query={query} /><p className="mt-3 text-xs leading-5 text-charcoal/80">Filter the collection by place, municipality, or record type.</p></div></div></section>
      <section aria-labelledby="sites-title" className="bg-mist py-12 sm:py-16" id="heritage-grid"><div className="container"><div className="tideline mb-10 sm:mb-12"><div className="flex flex-wrap items-end justify-between gap-4"><div><Eyebrow className="mb-3">Selected records</Eyebrow><Heading as="h2" id="sites-title">Sites to hold in view.</Heading></div><p aria-live="polite" className="text-sm font-bold text-tidal-teal">{sites.length} of {heritageSites.length} sites shown</p></div></div><HeritageGrid onSiteSelect={setSelected} sites={sites} /></div></section>
      <section aria-labelledby="field-note-title" className="container grid gap-8 py-14 sm:py-20 lg:grid-cols-[0.4fr_1fr] lg:gap-16" id="field-note"><aside className="border-t-2 border-tide-ink pt-5 lg:border-r lg:border-t-0 lg:pr-10"><Eyebrow className="mb-4">Field note</Eyebrow><p className="font-display text-3xl leading-tight tracking-[-0.04em]">One selected record, opened in place.</p></aside><article className="paper-grain relative overflow-hidden border bg-white p-6 shadow-[0_8px_25px_rgba(16,42,54,0.07)] sm:p-8"><div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-b pb-5"><span className="catalogue-label">{selected.category}</span><span className="inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal/80"><Icon className="size-4 text-copper-sand" name="mapPin" />{selected.location}</span></div><Heading as="h2" className="mt-6 text-4xl sm:text-5xl" id="field-note-title">{selected.name}</Heading><Text className="mt-5 max-w-2xl">{selected.description} This note keeps the place in view while drawing attention to the context held inside each record.</Text><div className="mt-7 flex flex-wrap gap-3 text-sm font-bold text-tidal-teal"><span className="inline-flex items-center gap-2 border border-tidal-teal/25 px-3 py-2"><Icon className="size-4" name="compass" />Context first</span><span className="inline-flex items-center gap-2 border border-tidal-teal/25 px-3 py-2"><Icon className="size-4" name="waves" />Landscape record</span></div></article></section>
    </main>
    <footer className="border-t bg-tide-ink text-paper"><div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-end sm:justify-between"><p className="font-display text-xl tracking-[-0.03em]">Pangasinan Heritage Digital Showcase</p><p className="text-xs leading-5 text-paper/70">A concise student field-guide collection for Pangasinan heritage discovery.</p></div></footer>
  </div>;
}
