import { Button, Eyebrow, Heading, Text } from "@/components/atoms";
import { HeritageGrid } from "@/components/organisms";
import { heritageSites } from "@/lib/heritage";

export function HomePage() {
  return (
    <>
      {/* ---------- TOP: title + short introduction ---------- */}
      <section className="border-b border-tide-ink/15 bg-paper">
        <div className="container py-12 sm:py-16">
          <Eyebrow className="mb-4">Pangasinan, Philippines · digital field guide</Eyebrow>

          <Heading as="h1" className="max-w-3xl">
            Find a Pangasinan heritage site.
          </Heading>

          <Text className="mt-5 max-w-2xl">
            A small, fast field guide to three places: the Hundred Islands in Alaminos, the
            lighthouse in Bolinao, and the hot spring in Balungao. Browse the cards below, or open
            the full collection to filter it by category.
          </Text>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/sites" showArrow>
              Browse all sites
            </Button>
            <Button href="/field-notes" tone="secondary">
              Open field notes
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- The collection ---------- */}
      <section aria-labelledby="results-title" className="container py-12 sm:py-16">
        <Heading as="h2" className="mb-6" id="results-title">
          The collection
        </Heading>

        <HeritageGrid sites={heritageSites} />
      </section>

      {/* ---------- What the three pages do ---------- */}
      <section className="border-t border-tide-ink/15 bg-white">
        <div className="container grid gap-6 py-12 sm:grid-cols-3">
          {[
            {
              title: "Home",
              text: "Preview every record on a card, then jump to the full collection.",
            },
            {
              title: "Sites",
              text: "Search every record, filter by category, and open one to read its summary.",
            },
            {
              title: "Field notes",
              text: "Choose one record and read a longer note with a large photo.",
            },
          ].map((item) => (
            <div className="border-l-4 border-copper-sand pl-4" key={item.title}>
              <Heading as="h3" className="mb-2">
                {item.title}
              </Heading>
              <Text className="text-sm" muted>
                {item.text}
              </Text>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
