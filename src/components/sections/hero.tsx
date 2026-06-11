"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section
      id="hero"
      className="bg-white"
      aria-label="Yaşam Elektronik Tuzla güvenlik ve elektronik sistemleri"
    >
      <div className="relative w-full overflow-hidden bg-black pt-18">
        <div className="relative h-[460px] w-full sm:h-[500px] lg:h-[700px]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/rp-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/rp.mp4" type="video/mp4" />
          </video>

          {/* Hafif overlay — okunabilirlik için */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/55"
            aria-hidden
          />

          {/* İçerik — video üzerinde */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
            <div className="mx-auto w-full max-w-[1200px] text-center">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/90 uppercase backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                Güvenliğiniz Bizim İşimiz
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-2xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl"
              >
                Yaşam Elektronik
                <span className="sr-only"> Tuzla</span>
                <span className="mt-2 block bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                  Güvenlik ve Elektronik Sistemleri
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
              >
                Profesyonel kamera, alarm, diyafon, uydu ve TV servis
                hizmetlerinde Tuzla ve İstanbul Anadolu Yakası&apos;nın güvenilir
                çözüm ortağı.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
              >
                <Button
                  size="lg"
                  className="h-13 w-full gap-2 rounded-xl bg-brand-navy px-8 text-base font-semibold text-white shadow-lg shadow-black/25 hover:bg-navy-800 sm:w-auto"
                  render={<a href={`tel:${COMPANY.phoneRaw}`} />}
                >
                  <Phone className="size-5" />
                  Hemen Ara
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 w-full gap-2 rounded-xl border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/20 sm:w-auto"
                  render={
                    <a
                      href={COMPANY.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <MessageCircle className="size-5 text-green-400" />
                  WhatsApp&apos;tan Ulaş
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.36 }}
                className="mt-10 flex justify-center gap-8 sm:gap-12"
              >
                {[
                  { value: "15+", label: "Yıl Deneyim" },
                  { value: "500+", label: "Mutlu Müşteri" },
                  { value: "7/24", label: "Destek" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-xs text-white/60">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
