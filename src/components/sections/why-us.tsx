"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, ShieldCheck, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCanHover } from "@/hooks/use-can-hover";
import { WHY_US } from "@/lib/constants";

const iconMap = {
  award: Award,
  users: Users,
  zap: Zap,
  shield: ShieldCheck,
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: (canHover: boolean) => ({
    opacity: 0,
    y: canHover ? 40 : 24,
  }),
  visible: (canHover: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: canHover ? 0.6 : 0.5,
      ease: "easeOut" as const,
    },
  }),
  hover: {
    y: -8,
    scale: 1.015,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

const numberVariants = {
  visible: { x: 0, y: 0 },
  hover: {
    x: 4,
    y: -4,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

const iconVariants = {
  visible: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

function CardPattern({ index }: { index: number }) {
  const patternId = `trust-grid-${index}`;
  return (
    <svg
      className="absolute inset-0 h-full w-full text-[#0B2347]/[0.04]"
      aria-hidden
    >
      <defs>
        <pattern
          id={patternId}
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M32 0H0V32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      <line
        x1="0"
        y1="100%"
        x2="40%"
        y2="0"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
    </svg>
  );
}

function CornerPattern() {
  return (
    <svg
      className="absolute right-4 bottom-10 h-16 w-16 text-[#2563EB]/10 transition-opacity duration-300 group-hover:text-[#2563EB]/20"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <path d="M8 56 H56 M56 8 V56 M40 24 H56 V40" stroke="currentColor" strokeWidth="1" />
      <circle cx="48" cy="48" r="3" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

function TrustCard({
  item,
  index,
  Icon,
  canHover,
}: {
  item: (typeof WHY_US)[number];
  index: number;
  Icon: LucideIcon;
  canHover: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      custom={canHover}
      variants={cardVariants}
      whileHover={canHover ? "hover" : undefined}
      className="group relative flex h-[280px] flex-col overflow-hidden rounded-3xl border border-[rgba(11,35,71,0.12)] bg-gradient-to-br from-[#F8FBFF] to-[#EEF5FF] p-7 shadow-[0_4px_24px_-4px_rgba(11,35,71,0.08)] transition-[box-shadow,border-color,background] duration-300 hover:border-[rgba(37,99,235,0.35)] hover:shadow-[0_16px_48px_-8px_rgba(11,35,71,0.14)] hover:from-[#F4F9FF] hover:to-[#E8F2FF] sm:h-[300px] sm:p-8"
    >
      <CardPattern index={index} />
      <CornerPattern />

      {/* Hover gradient boost */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.06) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      {/* Large transparent number */}
      <motion.span
        variants={canHover ? numberVariants : undefined}
        className="pointer-events-none absolute top-3 right-5 select-none text-7xl font-black leading-none text-[#0B2347]/[0.06] transition-colors duration-300 group-hover:text-[#0B2347]/10 sm:top-4 sm:right-6 sm:text-8xl"
        aria-hidden
      >
        {number}
      </motion.span>

      {/* Icon with glow */}
      <div className="relative mb-5 w-fit">
        <div
          className="absolute inset-0 scale-[1.8] rounded-full bg-[#2563EB]/20 opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-70"
          aria-hidden
        />
        <motion.div
          variants={canHover ? iconVariants : undefined}
          className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B2347] shadow-md shadow-[#0B2347]/25"
        >
          <Icon className="size-6 text-white" strokeWidth={1.75} />
        </motion.div>
      </div>

      <h3 className="relative mb-3 text-xl font-bold text-[#0B2347]">
        {item.title}
      </h3>
      <p className="relative text-sm leading-relaxed text-slate-500">
        {item.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute right-0 bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
    </motion.div>
  );
}

export function WhyUs() {
  const canHover = useCanHover();

  return (
    <section id="neden-biz" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Neden Biz"
          title="Güveninizi Hak Ediyoruz"
          description="Yılların deneyimi, profesyonel ekibimiz ve müşteri memnuniyeti odaklı yaklaşımımızla fark yaratıyoruz."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
        >
          {WHY_US.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <TrustCard
                key={item.title}
                item={item}
                index={index}
                Icon={Icon}
                canHover={canHover}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
