import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ServicePageLayout } from "@/components/seo/service-page-layout";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";
import { createMetadata, SERVICE_PAGES } from "@/lib/seo/config";
import { SERVICE_BODY } from "@/lib/seo/service-content";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = SERVICE_PAGES.find((item) => item.slug === slug);
  if (!page) return {};

  return createMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}`,
    keywords: [...page.keywords, "Yaşam Elektronik", "Yaşam Elektronik Tuzla"],
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = SERVICE_PAGES.find((item) => item.slug === slug);
  const content = SERVICE_BODY[slug];

  if (!page || !content) notFound();

  const relatedPages = SERVICE_PAGES.filter((item) => item.slug !== slug);

  return (
    <>
      <ServiceJsonLd slug={slug} />
      <ServicePageLayout
        slug={slug}
        h1={page.h1}
        title={page.title}
        description={content.intro}
      >
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}

        <section className="mt-10 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-semibold text-brand-navy">
            Diğer Hizmetlerimiz
          </h2>
          <ul className="mt-4 space-y-2">
            {relatedPages.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`/${related.slug}`}
                  className="text-sm text-blue-600 hover:text-blue-800"
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
