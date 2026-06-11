import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { COMPANY } from "@/lib/constants";

interface ServicePageLayoutProps {
  slug: string;
  h1: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ServicePageLayout({
  slug,
  h1,
  title,
  description,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      <Header />
      <main id="main-content">
        <section
          className="border-b border-slate-100 bg-slate-50 py-12 pt-28 sm:py-16"
          aria-labelledby="service-page-heading"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <li>
                  <Link href="/" className="hover:text-brand-navy">
                    Ana Sayfa
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-brand-navy">{title}</li>
              </ol>
            </nav>
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-brand-navy lg:hidden"
            >
              <ArrowLeft className="size-4" />
              Ana Sayfa
            </Link>
            <p className="mb-2 text-xs font-semibold tracking-widest text-blue-600 uppercase">
              Yaşam Elektronik · Tuzla
            </p>
            <h1
              id="service-page-heading"
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
            >
              {h1}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800"
              >
                <Phone className="size-4" />
                Hemen Ara
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-navy-200 px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-navy-50"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
        <article
          className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8"
          aria-labelledby={`${slug}-details`}
        >
          <h2 id={`${slug}-details`} className="sr-only">
            {title} Detayları
          </h2>
          <div className="prose prose-slate max-w-none text-slate-600">
            {children}
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
