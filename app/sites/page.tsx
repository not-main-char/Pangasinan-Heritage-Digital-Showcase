import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { SitesPage } from "@/components/pages/SitesPage";

/** Route "/sites". */
export const metadata: Metadata = {
  title: "Heritage Sites — Pangasinan Heritage Digital Showcase",
  description: "Search and filter three Pangasinan heritage records by place or category.",
};

export default function Page() {
  return (
    <SiteFrame activeHref="/sites">
      <SitesPage />
    </SiteFrame>
  );
}
