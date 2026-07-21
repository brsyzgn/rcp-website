"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { FAQ_ITEMS } from "@/lib/seo/faq-data";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="sss" className="bg-white py-20 sm:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="SSS"
          title="Sık Sorulan Sorular"
          titleId="faq-heading"
          description="Tuzla kamera, alarm, diyafon ve TV servis hizmetlerimiz hakkında merak edilenler."
        />

        <div className="space-y-3" role="list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <article
                key={item.question}
                role="listitem"
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white shadow-sm transition-colors",
                  isOpen
                    ? "border-emerald-200/80 shadow-md shadow-emerald-500/5"
                    : "border-[rgba(11,35,71,0.12)]"
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand-navy transition-colors hover:bg-navy-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy-400/40 sm:px-6 sm:text-base"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    {item.question}
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-slate-400 transition-transform duration-300",
                        isOpen && "rotate-180 text-emerald-600"
                      )}
                      aria-hidden
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-500 sm:px-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
