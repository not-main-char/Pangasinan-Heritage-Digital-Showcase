/** Tidal Field Guide — single source of truth for sample heritage content. */
export type HeritageSite = {
  id: string;
  name: string;
  location: string;
  category: "Coastal landscape" | "Built landmark" | "Natural wellness";
  description: string;
  imageSrc: string;
  imageAlt: string;
  searchTerms: string[];
};

export const heritageSites: HeritageSite[] = [
  { id: "hundred-islands", name: "Hundred Islands", location: "Alaminos", category: "Coastal landscape", description: "A limestone-island seascape that invites visitors to read Pangasinan’s coastline from the water outward.", imageSrc: "/images/hundred-islands-pangasinan.jpg", imageAlt: "Limestone islands rising from turquoise water at Hundred Islands near Alaminos", searchTerms: ["alaminos", "islands", "coast", "limestone", "sea"] },
  { id: "bolinao-lighthouse", name: "Bolinao Lighthouse", location: "Bolinao", category: "Built landmark", description: "A coastal beacon whose white tower and headland setting offer an enduring point of orientation.", imageSrc: "/images/bolinao-lighthouse-pangasinan.jpg", imageAlt: "Cape Bolinao Lighthouse on a grassy coastal headland above the sea", searchTerms: ["bolinao", "lighthouse", "cape", "landmark", "coast"] },
  { id: "balungao-hot-spring", name: "Balungao Hot Spring", location: "Balungao", category: "Natural wellness", description: "A calm thermal-water setting surrounded by greenery, offering another way to encounter the province’s landscape.", imageSrc: "/images/balungao-hot-spring-pangasinan.jpg", imageAlt: "Turquoise hot spring pool with foliage and gentle steam in Balungao", searchTerms: ["balungao", "hot spring", "wellness", "thermal", "nature"] },
];
