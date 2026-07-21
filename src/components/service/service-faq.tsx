"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ServiceFaqItem } from "@/lib/seo/service-content";
import { cn } from "@/lib/utils";

interface ServiceFAQProps {
  items: ServiceFaqItem[];
}

export function ServiceFAQ({ items }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  if (items.length === 0) return null;

  return (
    <section aria-labelledby="service-faq-heading" className="py-2">
      <h2
        id="service-faq-heading"
        className="text-xl font-bold tracking-tight text-navy-900 sm:text-2xl"
      >
        Sık Sorulan Sorular
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        Bu hizmet hakkında en çok merak edilenler.
      </p>

      <div className="mt-6 space-y-3" role="list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-btn-${index}`;

          return (
            <article
              key={item.question}
              role="listitem"
              className={cn(
                "overflow-hidden rounded-2xl border bg-white shadow-sm transition-colors",
                isOpen
                  ? "border-emerald-200/80 shadow-md shadow-emerald-500/5"
                  : "border-navy-100"
              )}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand-navy transition-colors hover:bg-navy-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-navy-400/40"
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
                    <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-500">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
