import { Button, Eyebrow, Heading, Icon, Image, Text } from "@/components/atoms";
import type { HeritageSite } from "@/lib/heritage";

export function HeritageCard({
  site,
  onOpen,
}: {
  site: HeritageSite;
  onOpen?: () => void;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden border border-tide-ink/15 bg-white">
      <Image alt={site.imageAlt} className="aspect-[4/3]" src={site.imageSrc} />

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Eyebrow>{site.category}</Eyebrow>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-tide-ink/70">
            <Icon className="size-4 text-copper-sand" name="mapPin" />
            {site.location}
          </span>
        </div>

        <Heading as="h3" className="mb-2">
          {site.name}
        </Heading>

        <Text className="mb-5 text-sm" muted>
          {site.description}
        </Text>

        <div className="mt-auto">
          {onOpen ? (
            <Button label={`Open record for ${site.name}`} onClick={onOpen} tone="secondary">
              Open record
            </Button>
          ) : (
            <Button href="/field-notes" tone="secondary">
              Read field note
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
