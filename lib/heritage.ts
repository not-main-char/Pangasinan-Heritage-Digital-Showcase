export type HeritageSite = {
  id: string;                 // short unique name, used by React as a "key"
  name: string;               // shown as the title
  location: string;           // municipality shown next to the title
  category: "Coastal landscape" | "Built landmark" | "Natural wellness";
  description: string;        // short text used on the cards
  note: string;               // longer text used on the Field notes page
  imageSrc: string;           // path inside the public/ folder
  imageAlt: string;           // text description of the photo (accessibility)
  searchTerms: string[];      // extra words the search box should match
};

/** The categories used by the "All categories" dropdown. */
export const CATEGORIES = [
  "All categories",
  "Coastal landscape",
  "Built landmark",
  "Natural wellness",
] as const;

/** The complete content of the site: exactly three records. */
export const heritageSites: HeritageSite[] = [
  {
    id: "hundred-islands",
    name: "Hundred Islands",
    location: "Alaminos",
    category: "Coastal landscape",
    description:
      "A limestone-island seascape that invites visitors to read Pangasinan's coastline from the water outward.",
    note:
      "The islands are the province's best-known coastal landscape. Read them as a group: the water decides where you can go, and every viewpoint is a different edge of the same bay.",
    imageSrc: "/images/hundred-islands-pangasinan.jpg",
    imageAlt: "Limestone islands rising from turquoise water at Hundred Islands near Alaminos",
    searchTerms: ["alaminos", "islands", "coast", "sea", "limestone", "boat"],
  },
  {
    id: "bolinao-lighthouse",
    name: "Bolinao Lighthouse",
    location: "Bolinao",
    category: "Built landmark",
    description:
      "A coastal beacon whose white tower and headland setting offer an enduring point of orientation.",
    note:
      "Cape Bolinao's lighthouse is a built landmark: a human answer to a coastline that is hard to read at night. It shows how heritage can be about orientation, not only scenery.",
    imageSrc: "/images/bolinao-lighthouse-pangasinan.jpg",
    imageAlt: "Cape Bolinao Lighthouse on a grassy coastal headland above the sea",
    searchTerms: ["bolinao", "lighthouse", "cape", "landmark", "tower", "coast"],
  },
  {
    id: "balungao-hot-spring",
    name: "Balungao Hot Spring",
    location: "Balungao",
    category: "Natural wellness",
    description:
      "A calm thermal-water setting surrounded by greenery, offering another way to encounter the province's landscape.",
    note:
      "Balungao turns landscape into wellness. The thermal water is the record: it tells you what is under the ground, not just what is on it, and it broadens the collection beyond coast and monument.",
    imageSrc: "/images/balungao-hot-spring-pangasinan.jpg",
    imageAlt: "Turquoise hot spring pool with foliage and gentle steam in Balungao",
    searchTerms: ["balungao", "hot spring", "thermal", "wellness", "spring", "nature"],
  },
];

export function filterSites(
  sites: HeritageSite[],
  query: string,
  category: string = "all",
): HeritageSite[] {
  const words = query.trim().toLowerCase();

  return sites.filter((site) => {
    // 1. Does the category match? ("all" always matches.)
    const matchesCategory = category === "all" || site.category === category;

    // 2. Build one lowercase string of everything we want to search.
    const searchableText = [
      site.name,
      site.location,
      site.category,
      site.description,
      ...site.searchTerms,
    ]
      .join(" ")
      .toLowerCase();

    // 3. Keep the site only if both checks pass.
    return matchesCategory && (words === "" || searchableText.includes(words));
  });
}
