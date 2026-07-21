"use client";

import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { SocialLinks, PRIMARY_SOCIAL_IDS } from "@/components/ui/social-links";
import { useLegal } from "@/components/legal/legal-provider";
import { SERVICE_LIST } from "@/lib/services";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { LEGAL_LINKS } from "@/lib/legal/content";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { openLegal } = useLegal();

  return (
    <footer className="bg-navy-950 text-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Kolon 1 — Marka */}
          <div>
            <div className="mb-5">
              <Logo className="h-11 w-auto sm:h-12" />
              <p className="mt-3 text-xs font-medium tracking-wide text-blue-300/80">
                {COMPANY.slogan}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-blue-200/60">
              Tuzla ve İstanbul Anadolu Yakası&apos;nda kamera, alarm, diyafon,
              uydu anten ve TV servis hizmetlerinde güvenilir çözüm ortağınız.
            </p>
            <SocialLinks
              variant="dark"
              include={PRIMARY_SOCIAL_IDS}
              accentHover
              className="mt-6"
            />
          </div>

          {/* Kolon 2 — Hizmetler */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              Hizmetler
            </h3>
            <ul className="space-y-3">
              {SERVICE_LIST.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}`}
                    className="text-sm text-blue-200/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolon 3 — Hızlı Menü */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              Hızlı Menü
            </h3>
            <nav aria-label="Footer navigasyon">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                      className="text-sm text-blue-200/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Kolon 4 — İletişim */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              İletişim
            </h3>
            <address className="space-y-4 not-italic">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-start gap-3 text-sm text-blue-200/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-blue-400" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-3 text-sm text-blue-200/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-blue-400" />
                {COMPANY.email}
              </a>
              <p className="flex items-start gap-3 text-sm text-blue-200/70">
                <MapPin className="mt-0.5 size-4 shrink-0 text-blue-400" />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.city}
                </span>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-sm text-blue-300/50 sm:text-left">
            © {currentYear} {COMPANY.name}. Tüm hakları saklıdır.
          </p>
          <nav aria-label="Yasal belgeler" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {LEGAL_LINKS.map((item, index) => (
              <span key={item.id} className="flex items-center gap-4">
                {index > 0 && (
                  <span className="hidden text-blue-300/25 sm:inline" aria-hidden>
                    ·
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => openLegal(item.id)}
                  className="text-sm text-blue-300/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                >
                  {item.label}
                </button>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
