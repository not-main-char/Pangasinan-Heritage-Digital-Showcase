"use client";
import { useState } from "react";
import { Button, Eyebrow, Heading, Icon, Image, Text } from "@/components/atoms";
import { heritageSites, type HeritageSite } from "@/lib/heritage";

export function FieldNotesPage() {
  const [selected, setSelected] = useState<HeritageSite>(heritageSites[0]);

  return (
    <>
      {/* ---------- Title ---------- */}
      <section className="border-b border-tide-ink/15 bg-paper">
        <div className="container py-12 sm:py-16">
          <Eyebrow className="mb-4">Page 3 · field notes</Eyebrow>
          <Heading as="h1" className="max-w-3xl">
            Read one record at a time.
          </Heading>
          <Text className="mt-5 max-w-2xl">
            Pick a site below. Each record keeps its photo, location, and a longer note
            together on one page.
          </Text>
        </div>
      </section>

      {/* ---------- The three buttons ---------- */}
      <section aria-label="Choose a record" className="container py-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {heritageSites.map((site, index) => {
            const isSelected = selected.id === site.id;

            return (
              <button
                aria-pressed={isSelected}
                className={`min-h-11 border p-4 text-left ${
                  isSelected
                    ? "border-tidal-teal bg-sea-glass"
                    : "border-tide-ink/15 bg-white hover:border-tidal-teal"
                }`}
                key={site.id}
                onClick={() => setSelected(site)}
                type="button"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-tidal-teal">
                  0{index + 1} · {site.location}
                </span>
                <span className="mt-1 block font-display text-xl text-tide-ink">
                  {site.name}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ---------- The reading view ---------- */}
      <section aria-labelledby="note-title" className="bg-white">
        <div className="container grid gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:items-start">
          <Image
            alt={selected.imageAlt}
            className="aspect-[4/3] border border-tide-ink/15"
            src={selected.imageSrc}
          />

          <article>
            <div className="mb-4 flex flex-wrap items-center gap-4 border-b border-tide-ink/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-tidal-teal">
                {selected.category}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-tide-ink/70">
                <Icon className="size-4 text-copper-sand" name="mapPin" />
                {selected.location}
              </span>
            </div>

            <Heading as="h2" id="note-title">
              {selected.name}
            </Heading>

            <Text className="mt-4">{selected.description}</Text>
            <Text className="mt-4">{selected.note}</Text>

            <div className="mt-8">
              <Button href="/sites" showArrow tone="secondary">
                Return to the site collection
              </Button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
