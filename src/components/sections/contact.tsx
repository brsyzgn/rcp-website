"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Send, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "@/lib/constants";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="İletişim"
          title="Bizimle İletişime Geçin"
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
                className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:border-navy-200 hover:shadow-md"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="overflow-hidden rounded-2xl border border-navy-100 shadow-sm"
            >
              <iframe
                title="Yaşam Elektronik Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.234!2d29.3012!3d40.8178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7f8b8b8b8b9%3A0x0!2zVsSwYXRhbiBDZC4gTm86MTI5LCBJc3Rhc3lvbiBNYWguLCBUdXpsYS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-navy-100 bg-white p-8 shadow-lg shadow-navy-900/5 lg:col-span-3"
          >
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <CheckCircle className="mb-4 size-16 text-green-500" />
                <h3 className="text-xl font-bold text-navy-900">
                  Mesajınız Alındı!
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full gap-2 rounded-xl bg-navy-900 text-base font-semibold text-white shadow-lg shadow-navy-900/20 hover:bg-navy-800 sm:w-auto sm:px-8"
                >
                  <Send className="size-4" />
                  Mesaj Gönder
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
