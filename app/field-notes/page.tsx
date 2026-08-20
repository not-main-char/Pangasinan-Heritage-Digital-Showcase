import { SiteFrame } from "@/components/layout/SiteFrame";
import { FieldNotesPage } from "@/components/pages/FieldNotesPage";

export default function FieldNotesRoute() {
  return <SiteFrame activeHref="/field-notes"><FieldNotesPage /></SiteFrame>;
}
