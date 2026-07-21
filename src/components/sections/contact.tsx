"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Send,
  CheckCircle,
  Navigation,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks, PRIMARY_SOCIAL_IDS } from "@/components/ui/social-links";
import { ConsentCheckbox } from "@/components/legal/consent-checkbox";
import { COMPANY, MAPS_EMBED_URL } from "@/lib/constants";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!consent) {
      setConsentError("Devam etmek için KVKK onayını işaretlemeniz gerekir.");
      return;
    }
    setConsentError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      consent: true,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        errors?: { consent?: string; name?: string; phone?: string; message?: string };
      } | null;

      if (!response.ok || !result?.ok) {
        if (result?.errors?.consent) setConsentError(result.errors.consent);
        setSubmitError(
          result?.error ||
            "Mesaj gönderilemedi. Lütfen tekrar deneyin veya telefon ile ulaşın."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Bağlantı hatası oluştu. Lütfen internetinizi kontrol edip tekrar deneyin."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="bg-white py-24 sm:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="İletişim"
          title="Bizimle İletişime Geçin"
          titleId="contact-heading"
          description="Ücretsiz keşif ve fiyat teklifi için hemen arayın veya formu doldurun."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {[
              {
                icon: Phone,
                title: "Telefon",
                value: COMPANY.phone,
                href: `tel:${COMPANY.phoneRaw}`,
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "Mesaj Gönder",
                href: COMPANY.whatsapp,
                iconColor: "text-green-500",
              },
              {
                icon: MapPin,
                title: "Adres",
                value: `${COMPANY.address}, ${COMPANY.city}`,
                href: COMPANY.mapsUrl,
              },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Adres" ? "_blank" : undefined}
                rel={item.title === "Adres" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:border-navy-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900">
                  <item.icon
                    className={`size-5 ${"iconColor" in item && item.iconColor ? item.iconColor : "text-white"}`}
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm font-medium text-navy-900">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="rounded-2xl border border-navy-100 bg-navy-50/50 p-5"
            >
              <p className="mb-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Sosyal Medya
              </p>
              <SocialLinks
                variant="light"
                include={PRIMARY_SOCIAL_IDS}
                accentHover
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lg shadow-navy-900/10"
            >
              <div className="relative aspect-[16/10] min-h-[200px] w-full overflow-hidden sm:min-h-[220px]">
                <iframe
                  title="Yaşam Elektronik konum haritası"
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="border-t border-navy-100 p-4">
                <a
                  href={COMPANY.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-4 text-sm font-semibold text-white shadow-md shadow-navy-900/20 transition-all hover:bg-navy-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400/50"
                >
                  <Navigation className="size-4" />
                  Google Haritalarda Yol Tarifi Al
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-navy-100 bg-white p-6 shadow-lg shadow-navy-900/5 sm:p-8 lg:col-span-3"
          >
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <CheckCircle className="mb-4 size-16 text-emerald-500" />
                <h3 className="text-xl font-bold text-navy-900">
                  Mesajınız Alındı!
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="relative space-y-5"
                noValidate
              >
                <h3 className="text-lg font-bold text-navy-900">
                  İletişim Formu
                </h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-slate-500"
                    >
                      Ad Soyad
                    </label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="Adınız Soyadınız"
                      className="h-11 border-navy-100 focus-visible:border-navy-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-medium text-slate-500"
                    >
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      className="h-11 border-navy-100 focus-visible:border-navy-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs font-medium text-slate-500"
                  >
                    Hizmet Türü
                  </label>
                  <Input
                    id="service"
                    name="service"
                    autoComplete="off"
                    placeholder="Örn: Kamera Sistemi Kurulumu"
                    className="h-11 border-navy-100 focus-visible:border-navy-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-slate-500"
                  >
                    Mesajınız
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Mesajınızı buraya yazın..."
                    className="border-navy-100 focus-visible:border-navy-300"
                  />
                </div>

                <ConsentCheckbox
                  checked={consent}
                  onChange={(value) => {
                    setConsent(value);
                    if (value) setConsentError("");
                  }}
                  error={consentError}
                  className="scroll-mt-28"
                />

                {/* Honeypot — görsel olarak gizli, botlara karşı */}
                <div
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {submitError && (
                  <p role="alert" className="text-sm font-medium text-red-600">
                    {submitError}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 w-full gap-2 rounded-xl bg-navy-900 text-base font-semibold text-white shadow-lg shadow-navy-900/20 hover:bg-navy-800 disabled:opacity-70 sm:w-auto sm:px-8"
                >
                  <Send className="size-4" />
                  {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
