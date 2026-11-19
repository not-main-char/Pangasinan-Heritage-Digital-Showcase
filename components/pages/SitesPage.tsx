"use client";

import { useState } from "react";
import { Eyebrow, Heading, Icon, Text } from "@/components/atoms";
import { SearchForm } from "@/components/molecules";
import { HeritageGrid } from "@/components/organisms";
import { filterSites, heritageSites, type HeritageSite } from "@/lib/heritage";

export function SitesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<HeritageSite>(heritageSites[0]);

  // The same helper the Home page uses, now with a category as well.
  const matchingSites = filterSites(heritageSites, query, category);

  return (
    <>
      {/* ---------- TOP: title + search bar + filter ---------- */}
      <section className="border-b border-tide-ink/15 bg-paper">
        <div className="container py-12 sm:py-16">
          <Eyebrow className="mb-4">Page 2 · heritage sites</Eyebrow>

          <Heading as="h1" className="max-w-3xl">
            Search, filter, then open a record.
          </Heading>

          <Text className="mt-5 max-w-2xl">
            All three records live in one list. Use the search box, choose a category, or do
            both.
          </Text>

          <div className="mt-8 max-w-2xl">
            <SearchForm
              category={category}
              onCategoryChange={setCategory}
              onQueryChange={setQuery}
              query={query}
            />
          </div>
        </div>
      </section>

      {/* ---------- The grid ---------- */}
      <section aria-labelledby="collection-title" className="container py-12 sm:py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <Heading as="h2" id="collection-title">
            Heritage records
          </Heading>
          <p aria-live="polite" className="text-sm font-semibold text-tidal-teal">
            {matchingSites.length} of {heritageSites.length} sites shown
          </p>
        </div>

        <HeritageGrid onSiteSelect={setSelected} query={query} sites={matchingSites} />
      </section>

      {/* ---------- The selected record ---------- */}
      <section aria-labelledby="selected-title" className="border-t border-tide-ink/15 bg-white">
        <div className="container grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow className="mb-3">Selected record</Eyebrow>
            <Text className="text-sm" muted>
              Click &quot;Open record&quot; on any card and its summary appears here.
            </Text>
          </div>

          <article className="border border-tide-ink/15 bg-paper p-6">
            <div className="mb-4 flex flex-wrap items-center gap-4 border-b border-tide-ink/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-tidal-teal">
                {selected.category}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-tide-ink/70">
                <Icon className="size-4 text-copper-sand" name="mapPin" />
                {selected.location}
              </span>
            </div>

            <Heading as="h2" id="selected-title">
              {selected.name}
            </Heading>

            <Text className="mt-4">{selected.description}</Text>

            <Text className="mt-4 text-sm" muted>
              Open the Field notes page for the longer reading view of each place.
            </Text>
          </article>
        </div>
      </section>
    </>
  );
}
