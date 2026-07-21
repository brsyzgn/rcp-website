import { buildHomeSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/seo/structured-data";

export function HomeJsonLd() {
  return <StructuredData data={buildHomeSchema()} />;
}
