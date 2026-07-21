import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ServicePageLayout } from "@/components/seo/service-page-layout";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";
import {
  ServiceBenefits,
  ServiceScope,
  ServiceProcess,
  ServiceFAQ,
  ServiceCTA,
} from "@/components/service";
import { createMetadata } from "@/lib/seo/config";
import { SERVICE_LIST, getServiceBySlug } from "@/lib/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICE_LIST.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/${service.slug}`,
    keywords: [...service.keywords, "Yaşam Elektronik", "Yaşam Elektronik Tuzla"],
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedServices = SERVICE_LIST.filter((item) => item.slug !== slug);

  return (
    <>
      <ServiceJsonLd slug={slug} faq={service.faq} />
      <ServicePageLayout
        slug={slug}
        h1={service.h1}
        title={service.title}
        description={service.description}
      >
        <ServiceBenefits items={[...service.benefits]} />
        <ServiceScope
          items={[...service.scope]}
          paragraphs={[...service.paragraphs]}
        />
        <ServiceProcess />
        <ServiceFAQ items={[...service.faq]} />
        <ServiceCTA
          title={service.cta.title}
          description={service.cta.description}
        />

        <section
          aria-labelledby="related-services-heading"
          className="border-t border-slate-200 pt-10"
        >
          <h2
            id="related-services-heading"
            className="text-lg font-semibold text-brand-navy"
          >
            Diğer Hizmetlerimiz
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {relatedServices.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/${related.slug}`}
                  className="block rounded-xl border border-navy-100 bg-navy-50/40 px-4 py-3 text-sm font-medium text-navy-800 transition-colors hover:border-emerald-200 hover:bg-emerald-50/40 hover:text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400/40"
                >
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </ServicePageLayout>
    </>
  );
}
