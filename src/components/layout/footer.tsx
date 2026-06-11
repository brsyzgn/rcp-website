import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { COMPANY, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";
import { SERVICE_PAGES } from "@/lib/seo/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Logo className="h-11 w-auto sm:h-12" />
              <p className="mt-3 text-xs text-blue-300/70">{COMPANY.slogan}</p>
            </div>
            <p className="text-sm leading-relaxed text-blue-200/60">
              Tuzla ve İstanbul Anadolu Yakası&apos;nda kamera, alarm, diyafon,
              uydu anten ve TV servis hizmetlerinde güvenilir çözüm ortağınız.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              Hızlı Bağlantılar
            </h3>
            <nav aria-label="Footer navigasyon">
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                      className="text-sm text-blue-200/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              Hizmetler
            </h3>
            <ul className="space-y-3">
              {SERVICE_PAGES.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/${page.slug}`}
                    className="text-sm text-blue-200/70 transition-colors hover:text-white"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              Hizmet Bölgeleri
            </h3>
            <ul className="space-y-3">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="text-sm text-blue-200/70"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wider text-white uppercase">
              İletişim
            </h3>
            <address className="space-y-4 not-italic">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-start gap-3 text-sm text-blue-200/70 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-blue-400" />
                {COMPANY.phone}
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-blue-200/70 transition-colors hover:text-white"
              >
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-green-400" />
                WhatsApp
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
          <p className="text-sm text-blue-300/50">
            © {currentYear} {COMPANY.name}. Tüm hakları saklıdır.
          </p>
          <p className="text-center text-sm text-blue-300/50">
            Yaşam Elektronik Tuzla · Kamera · Alarm · Diyafon · Uydu · TV Servisi
          </p>
        </div>
      </div>
    </footer>
  );
}
