import { buildHomeSchema } from "@/lib/seo/schema";
import { JsonLdScript } from "@/components/seo/json-ld-script";

export function HomeJsonLd() {
  return <JsonLdScript data={buildHomeSchema()} />;
}
