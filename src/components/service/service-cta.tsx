import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface ServiceCTAProps {
  title: string;
  description: string;
}

export function ServiceCTA({ title, description }: ServiceCTAProps) {
  return (
    <section
      aria-labelledby="service-cta-heading"
      className="relative overflow-hidden rounded-3xl border border-navy-800 bg-navy-950 px-6 py-10 text-center shadow-xl shadow-navy-950/20 sm:px-10 sm:py-12"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(16,185,129,0.18), transparent 42%), radial-gradient(circle at 80% 80%, rgba(59,130,246,0.12), transparent 40%)",
        }}
        aria-hidden
      />

      <div className="relative">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-emerald-400 uppercase">
          Ücretsiz Keşif
        </p>
        <h2
          id="service-cta-heading"
          className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-blue-100/70 sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-navy-900 shadow-lg transition-colors hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-auto"
          >
            <Phone className="size-4" />
            {COMPANY.phone}
          </a>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40 sm:w-auto"
          >
            <MessageCircle className="size-4 text-emerald-400" />
            WhatsApp ile Yazın
          </a>
        </div>
      </div>
    </section>
  );
}
