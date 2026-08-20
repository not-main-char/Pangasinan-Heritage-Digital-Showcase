import { SiteFrame } from "@/components/layout/SiteFrame";
import { HomePage } from "@/components/pages/HomePage";

export default function Page() {
  return <SiteFrame activeHref="/"><HomePage /></SiteFrame>;
}
