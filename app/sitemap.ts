import type { MetadataRoute } from "next";
import { PAGE_PATHS, SITE_URL } from "@/lib/site";

/**
 * app/sitemap.ts  — builds /sitemap.xml at build time.
 * A sitemap is a plain list of your pages that you hand to Google Search Console.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGE_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));
}