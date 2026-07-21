import { getServiceBySlug } from "@/lib/services";
import { buildServicePageSchema } from "@/lib/seo/schema";
import { StructuredData } from "@/components/seo/structured-data";
import type { ServiceFaqItem } from "@/lib/services";

interface ServiceJsonLdProps {
  slug: string;
  faq?: readonly ServiceFaqItem[];
}

export function ServiceJsonLd({ slug, faq = [] }: ServiceJsonLdProps) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  return <StructuredData data={buildServicePageSchema(service, faq)} />;
}
