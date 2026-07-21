"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Phone,
  Search,
  FileText,
  Wrench,
  ShieldCheck,
  ArrowDown,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelinePattern } from "@/components/ui/timeline-pattern";
import { useCanHover } from "@/hooks/use-can-hover";
import { PROCESS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<(typeof PROCESS_STEPS)[number]["icon"], LucideIcon> = {
  phone: Phone,
  search: Search,
  fileText: FileText,
  wrench: Wrench,
  shield: ShieldCheck,
};

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const canHover = useCanHover();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const lineProgress = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 80,
    damping: 25,
  });

  return (
    <section
      id="surec"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-navy-50/40 via-white to-white py-20 sm:py-28"
      aria-labelledby="process-heading"
    >
      <TimelinePattern />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Süreç"
          title="Çalışma Sürecimiz"
          titleId="process-heading"
          description="İlk görüşmeden satış sonrası desteğe kadar her adımı şeffaf ve kontrollü yönetiyoruz."
        />

        {/* Desktop: horizontal card timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute top-[52px] right-[6%] left-[6%] h-px bg-navy-100" />
          <motion.div
            className="absolute top-[52px] right-[6%] left-[6%] h-0.5 origin-left bg-gradient-to-r from-emerald-500 via-navy-700 to-navy-900"
            style={{ scaleX: lineProgress }}
          />

          <ol className="relative grid grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.id} className="relative flex flex-col items-center">
                <ProcessCard
                  step={step}
                  index={index}
                  canHover={canHover}
                  layout="horizontal"
                />
                {index < PROCESS_STEPS.length - 1 && (
                  <span className="pointer-events-none absolute top-[44px] -right-3 z-20 hidden xl:flex">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-600 shadow-sm">
                      <ArrowDown className="size-3.5 -rotate-90" />
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet: vertical card timeline */}
        <ol className="relative mx-auto max-w-lg space-y-0 lg:hidden">
          <div className="absolute top-6 bottom-6 left-[27px] w-px bg-navy-100" />
          <motion.div
            className="absolute top-6 bottom-6 left-[27px] w-0.5 origin-top bg-gradient-to-b from-emerald-500 via-navy-700 to-navy-900"
            style={{ scaleY: lineProgress }}
          />

          {PROCESS_STEPS.map((step, index) => (
            <li key={step.id} className="relative pb-8 last:pb-0">
              <ProcessCard
                step={step}
                index={index}
                canHover={canHover}
                layout="vertical"
              />
              {index < PROCESS_STEPS.length - 1 && (
                <div className="absolute top-full left-[19px] z-20 -mt-3 flex justify-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-600 shadow-sm">
                    <ArrowDown className="size-3.5" />
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
  canHover,
  layout,
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
  canHover: boolean;
  layout: "horizontal" | "vertical";
}) {
  const Icon = iconMap[step.icon];
  const isVertical = layout === "vertical";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={canHover ? { y: -6 } : undefined}
      className={cn(
        "group relative z-10",
        isVertical ? "flex gap-4 pl-0" : "flex w-full flex-col items-center"
      )}
    >
      {/* Step number node on timeline */}
      <div
        className={cn(
          "relative flex shrink-0 items-center justify-center",
          isVertical ? "mt-5" : "mb-5"
        )}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/70 shadow-lg shadow-navy-900/10 backdrop-blur-md ring-1 ring-navy-100 transition-all duration-300 group-hover:border-emerald-300/60 group-hover:shadow-emerald-500/15 group-hover:ring-emerald-200/50">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-emerald-600">
            <Icon className="size-5" strokeWidth={1.75} />
          </div>
        </div>
        <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white shadow-md shadow-emerald-500/30">
          {index + 1}
        </span>
      </div>

      <div
        className={cn(
          "flex-1 overflow-hidden rounded-2xl border border-white/70 bg-white/65 p-5 shadow-md shadow-navy-900/5 backdrop-blur-md ring-1 ring-navy-100/80 transition-all duration-300",
          "group-hover:border-emerald-200/70 group-hover:bg-white/85 group-hover:shadow-lg group-hover:shadow-emerald-500/10 group-hover:ring-emerald-100",
          !isVertical && "w-full text-center"
        )}
      >
        <div
          className={cn(
            "mb-2 h-0.5 w-8 rounded-full bg-emerald-500/80",
            !isVertical && "mx-auto"
          )}
        />
        <p className="text-[10px] font-semibold tracking-[0.2em] text-emerald-700/80 uppercase">
          Adım {index + 1}
        </p>
        <h3 className="mt-1.5 text-base font-bold text-navy-900 lg:text-[17px]">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}
