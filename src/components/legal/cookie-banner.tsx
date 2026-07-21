"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, Shield, X } from "lucide-react";
import { useLegal } from "@/components/legal/legal-provider";
import {
  acceptAllCookies,
  acceptNecessaryOnly,
  readCookiePreferences,
  writeCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookies";
import { cn } from "@/lib/utils";

export function CookieBanner() {
  const { openLegal } = useLegal();
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readCookiePreferences();
    if (!existing) {
      const timer = window.setTimeout(() => setVisible(true), 600);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const closeWith = (prefs: CookiePreferences) => {
    void prefs;
    setVisible(false);
    setManaging(false);
  };

  const handleAcceptAll = () => closeWith(acceptAllCookies());
  const handleNecessaryOnly = () => closeWith(acceptNecessaryOnly());
  const handleSavePreferences = () =>
    closeWith(writeCookiePreferences({ analytics, marketing }));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-label="Çerez tercihleri"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-3 left-3 top-[5.25rem] z-[70] max-h-[min(70vh,calc(100dvh-9rem))] overflow-y-auto sm:top-auto sm:right-auto sm:bottom-6 sm:left-6 sm:max-h-none sm:w-full sm:max-w-md md:bottom-6"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950/95 shadow-2xl shadow-navy-950/40 backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/25">
                    <Cookie className="size-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-white">
                      Gizliliğinize önem veriyoruz
                    </h2>
                    <p className="mt-0.5 text-xs text-blue-200/60">
                      Çerez tercihlerinizi yönetin
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleNecessaryOnly}
                  className="rounded-lg p-1.5 text-blue-200/50 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40"
                  aria-label="Bannerı kapat (yalnızca zorunlu)"
                >
                  <X className="size-4" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-blue-100/70">
                Web sitemizde deneyiminizi geliştirmek, analiz yapmak ve
                hizmetlerimizi iyileştirmek amacıyla çerezler kullanılmaktadır.{" "}
                <button
                  type="button"
                  onClick={() => openLegal("cookies")}
                  className="font-medium text-emerald-300 underline decoration-emerald-500/40 underline-offset-2 transition-colors hover:text-emerald-200"
                >
                  Çerez Politikası
                </button>
              </p>

              <AnimatePresence initial={false}>
                {managing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-white/5 p-3">
                      <PreferenceRow
                        label="Zorunlu"
                        description="Site güvenliği ve temel işlevler"
                        checked
                        locked
                      />
                      <PreferenceRow
                        label="Analitik"
                        description="Anonim kullanım istatistikleri"
                        checked={analytics}
                        onChange={setAnalytics}
                      />
                      <PreferenceRow
                        label="Pazarlama"
                        description="İlgili içerik ve kampanya ölçümü"
                        checked={marketing}
                        onChange={setMarketing}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 flex flex-col gap-2.5">
                {managing ? (
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="flex h-11 w-full items-center justify-center rounded-xl bg-emerald-500 text-sm font-semibold text-navy-950 transition-all hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                  >
                    Tercihleri Kaydet
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex h-11 w-full items-center justify-center rounded-xl bg-emerald-500 text-sm font-semibold text-navy-950 transition-all hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                  >
                    Tümünü Kabul Et
                  </button>
                )}

                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setManaging((v) => !v)}
                    className="flex h-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-sm font-medium text-blue-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    {managing ? "Gizle" : "Tercihleri Yönet"}
                  </button>
                  <button
                    type="button"
                    onClick={handleNecessaryOnly}
                    className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 text-sm font-medium text-blue-100 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    <Shield className="size-3.5 opacity-70" />
                    Sadece Zorunlu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PreferenceRow({
  label,
  description,
  checked,
  locked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <label
      className={cn(
        "flex items-center justify-between gap-3 rounded-lg px-2.5 py-2.5",
        !locked && "cursor-pointer hover:bg-white/5"
      )}
    >
      <span>
        <span className="block text-sm font-medium text-white">{label}</span>
        <span className="block text-xs text-blue-200/50">{description}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={locked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="h-4 w-4 accent-emerald-500 disabled:opacity-70"
        aria-label={label}
      />
    </label>
  );
}
