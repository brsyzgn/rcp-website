"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { LEGAL_DOCS, type LegalDocId } from "@/lib/legal/content";

interface LegalModalProps {
  docId: LegalDocId | null;
  onClose: () => void;
}

export function LegalModal({ docId, onClose }: LegalModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const doc = docId ? LEGAL_DOCS[docId] : null;

  useEffect(() => {
    if (!doc) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [doc, onClose]);

  return (
    <AnimatePresence>
      {doc && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Modalı kapat"
            className="absolute inset-0 bg-navy-950/55 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-navy-100 bg-white shadow-2xl shadow-navy-950/25 sm:rounded-3xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-navy-100 bg-gradient-to-b from-navy-50/80 to-white px-5 py-5 sm:px-8">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-navy-500 uppercase">
                  Yaşam Elektronik · Yasal
                </p>
                <h2
                  id={titleId}
                  className="mt-1 text-xl font-bold tracking-tight text-navy-900 sm:text-2xl"
                >
                  {doc.title}
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Son güncelleme: {doc.lastUpdated}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-navy-100 text-navy-700 transition-colors hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400/40"
                aria-label="Kapat"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">
              <div className="space-y-7">
                {doc.sections.map((section) => (
                  <section key={section.heading}>
                    <h3 className="text-sm font-bold text-navy-900 sm:text-base">
                      {section.heading}
                    </h3>
                    <div className="mt-2 space-y-3">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 48)}
                          className="text-sm leading-relaxed text-slate-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <div className="border-t border-navy-100 bg-navy-50/40 px-5 py-4 sm:px-8">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400/50 sm:w-auto sm:px-8"
              >
                Anladım
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
