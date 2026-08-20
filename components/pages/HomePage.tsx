/** Tidal Field Guide — route composition for the welcoming home page. */
import { Button, Eyebrow, Heading, Icon, Image, Text } from "@/components/atoms";
import { heritageSites } from "@/lib/heritage";

export function HomePage() {
  const featured = heritageSites[0];

  return <>
    <section aria-labelledby="hero-title" className="paper-grain border-b border-tide-ink/15">
      <div className="container grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <Eyebrow className="mb-5">Pangasinan, Philippines · digital field guide</Eyebrow>
          <Heading as="h1" id="hero-title" className="max-w-3xl">Read the shoreline <em className="font-normal text-tidal-teal">differently.</em></Heading>
          <Text className="mt-7 max-w-2xl text-[1.05rem] leading-8 sm:text-xl">A small collection of coastal, built, and thermal landscapes that shows how Pangasinan can be encountered through place and context.</Text>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/sites" showArrow>Browse heritage sites</Button><Button href="/field-notes" showArrow tone="secondary">Open field notes</Button></div>
        </div>
        <article className="relative overflow-hidden border border-tide-ink/15 bg-white shadow-[0_10px_25px_rgba(16,42,54,0.08)]">
          <Image alt={featured.imageAlt} className="aspect-[4/3]" priority src={featured.imageSrc} />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-tide-ink/95 via-tide-ink/50 to-transparent p-6 pt-20 text-paper">
            <p className="catalogue-label border-paper/40 text-paper">01 · Start here</p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em]">{featured.name}</h2>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-paper/80"><Icon className="size-4 text-copper-sand" name="mapPin" />{featured.location}</p>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="guide-title" className="container py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:gap-16"><div className="border-t-2 border-tide-ink pt-5"><Eyebrow className="mb-4">How to use this guide</Eyebrow><Heading as="h2" id="guide-title">Three routes, one shared record of place.</Heading></div>
        <div className="grid gap-5 sm:grid-cols-3">
          {[{ number: "01", title: "Home", text: "Begin with the guide’s purpose and a featured coastal record." }, { number: "02", title: "Sites", text: "Search and filter the three heritage records by place or category." }, { number: "03", title: "Field notes", text: "Open one record at a time and read its contextual note." }].map((item) => <article className="border-l-2 border-copper-sand bg-mist p-5" key={item.number}><p className="font-display text-3xl text-tidal-teal">{item.number}</p><h3 className="mt-5 font-display text-2xl tracking-[-0.03em]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-charcoal/80">{item.text}</p></article>)}
        </div>
      </div>
    </section>
  </>;
}
