import { SiteFrame } from "@/components/layout/SiteFrame";
import { HomePage } from "@/components/pages/HomePage";

/**
 * Route "/"  ->  puts the Home page inside the shared frame.
 * Keep route files this short: they only choose which page to show.
 */
export default function Page() {
  return (
    <SiteFrame activeHref="/">
      <HomePage />
    </SiteFrame>
  );
}
