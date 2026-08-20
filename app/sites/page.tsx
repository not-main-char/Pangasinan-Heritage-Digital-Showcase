import { SiteFrame } from "@/components/layout/SiteFrame";
import { SitesExplorer } from "@/components/pages/SitesExplorer";

export default function SitesPage() {
  return <SiteFrame activeHref="/sites"><SitesExplorer /></SiteFrame>;
}
