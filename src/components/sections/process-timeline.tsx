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
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelinePattern } from "@/components/ui/timeline-pattern";
import { useCanHover } from "@/hooks/use-can-hover";
import { PROCESS_STEPS } from "@/lib/constants";

const iconMap: Record<(typeof PROCESS_STEPS)[number]["icon"], LucideIcon> = {
  phone: Phone,
  search: Search,
  fileText: FileText,
  wrench: Wrench,
  shield: ShieldCheck,
};

const stepVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function StepIcon({
  icon: Icon,
  index,
  canHover,
}: {
  icon: LucideIcon;
  index: number;
  canHover: boolean;
}) {
  return (
    <motion.div
      whileHover={canHover ? { y: -8, scale: 1.06 } : undefined}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-navy/10 bg-white shadow-lg shadow-brand-navy/10 ring-4 ring-white transition-shadow duration-300 group-hover:border-brand-navy/25 group-hover:shadow-xl group-hover:shadow-brand-navy/15 sm:h-[72px] sm:w-[72px]"
    >
      <div className="absolute inset-0 rounded-full bg-brand-navy/5 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy sm:h-12 sm:w-12">
        <Icon className="size-5 text-white sm:size-[22px]" strokeWidth={1.75} />
      </div>
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-bold text-white shadow-sm">
        {index + 1}
      </span>
    </motion.div>
  );
}

function StepContent({
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

  if (layout === "vertical") {
    return (
      <motion.div
        custom={index}
        variants={stepVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="group relative flex gap-5 pl-2"
      >
        <StepIcon icon={Icon} index={index} canHover={canHover} />
        <div className="flex-1 pb-10 pt-2">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-400 uppercase">
            {step.label}
          </span>
          <h3 className="mt-1 text-lg font-bold text-brand-navy">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {step.description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      custom={index}
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="group flex flex-col items-center text-center"
    >
      <StepIcon icon={Icon} index={index} canHover={canHover} />
      <div className="mt-5 px-1">
        <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-400 uppercase">
          {step.label}
        </span>
        <h3 className="mt-1.5 text-base font-bold text-brand-navy lg:text-lg">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const canHover = useCanHover();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const lineScaleX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 80,
    damping: 25,
  });

  const lineScaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 80,
    damping: 25,
  });

  return (
    <section
      id="surec"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <TimelinePattern />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Çalışma Sürecimiz"
          title="Sorunsuz ve Profesyonel Hizmet Süreci"
          description="İlk görüşmeden kurulum ve desteğe kadar tüm süreci titizlikle yönetiyoruz."
        />

        {/* Desktop horizontal timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute top-9 right-[10%] left-[10%] h-px bg-navy-100" />
          <motion.div
            className="absolute top-9 right-[10%] left-[10%] h-0.5 origin-left bg-brand-navy"
            style={{ scaleX: lineScaleX }}
          />

          <div className="grid grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, index) => (
              <StepContent
                key={step.id}
                step={step}
                index={index}
                canHover={canHover}
                layout="horizontal"
              />
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative lg:hidden">
          <div className="absolute top-9 bottom-9 left-8 w-px bg-navy-100" />
          <motion.div
            className="absolute top-9 bottom-9 left-8 w-0.5 origin-top bg-brand-navy"
            style={{ scaleY: lineScaleY }}
          />

          <div className="relative ml-4">
            {PROCESS_STEPS.map((step, index) => (
              <StepContent
                key={step.id}
                step={step}
                index={index}
                canHover={canHover}
                layout="vertical"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
