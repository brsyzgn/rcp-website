import Link from "next/link";
import { Phone, ArrowLeft, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { COMPANY } from "@/lib/constants";

interface ServiceHeroProps {
  h1: string;
  title: string;
  description: string;
}

export function ServiceHero({ h1, title, description }: ServiceHeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-navy-100 bg-gradient-to-b from-navy-50/80 via-slate-50 to-white py-12 pt-28 sm:py-16"
      aria-labelledby="service-page-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(16,185,129,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(11,35,71,0.08), transparent 45%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          className="mb-6"
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: title },
          ]}
        />

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-brand-navy focus-visible:outline-none focus-visible:text-brand-navy lg:hidden"
        >
          <ArrowLeft className="size-4" />
          Ana Sayfa
        </Link>

        <p className="mb-2 text-xs font-semibold tracking-widest text-emerald-700 uppercase">
          Yaşam Elektronik · Tuzla
        </p>
        <h1
          id="service-page-heading"
          className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
        >
          {h1}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          {description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400/50"
          >
            <Phone className="size-4" />
            Hemen Ara
          </a>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-navy-200 bg-white px-6 text-sm font-semibold text-brand-navy transition-colors hover:border-emerald-300 hover:bg-emerald-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40"
          >
            <MessageCircle className="size-4 text-emerald-600" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
