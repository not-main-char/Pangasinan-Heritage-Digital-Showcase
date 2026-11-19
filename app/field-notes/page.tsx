import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { FieldNotesPage } from "@/components/pages/FieldNotesPage";

/** Route "/field-notes". */
export const metadata: Metadata = {
  title: "Field Notes — Pangasinan Heritage Digital Showcase",
  description: "Read one Pangasinan heritage record at a time, with a large photo and context.",
};

export default function Page() {
  return (
    <SiteFrame activeHref="/field-notes">
      <FieldNotesPage />
    </SiteFrame>
  );
}
