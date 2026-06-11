import { SERVICE_PAGES } from "@/lib/seo/config";
import { buildServicePageSchema } from "@/lib/seo/schema";
import { JsonLdScript } from "@/components/seo/json-ld-script";

interface ServiceJsonLdProps {
  slug: string;
}

export function ServiceJsonLd({ slug }: ServiceJsonLdProps) {
  const page = SERVICE_PAGES.find((item) => item.slug === slug);
  if (!page) return null;

  return <JsonLdScript data={buildServicePageSchema(page)} />;
}
