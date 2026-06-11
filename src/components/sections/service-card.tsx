"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { Cctv, Radio, Satellite, Tv, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  cctv: Cctv,
  intercom: Radio,
  satellite: Satellite,
  tv: Tv,
} as const;

export type ServiceItem = {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  image: string;
  imageAlt: string;
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

function ParallaxAccent({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ y: smoothY, rotate }}
      className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 md:block lg:right-12"
    >
      <div
        className={cn(
          "relative h-36 w-36 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-sm lg:h-44 lg:w-44",
          index % 2 === 0 ? "rotate-3" : "-rotate-3"
        )}
      >
        <div className="absolute inset-3 rounded-2xl border border-white/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-black text-white/10 lg:text-6xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute -bottom-2 -left-2 h-16 w-16 rounded-full bg-blue-500/20 blur-xl" />
      </div>
    </motion.div>
  );
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const Icon = iconMap[service.icon];

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.12, 1.05]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <Link
        href={service.href}
        className="absolute inset-0 z-20 rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        aria-label={`${service.title} hizmet detayları`}
      />
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[280px] overflow-hidden rounded-3xl shadow-xl shadow-navy-900/15 transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-navy-900/25 sm:h-[300px] lg:h-[350px]"
      >
        {/* Background image with scroll parallax + hover zoom */}
        <motion.div
          className="absolute inset-0 scale-105"
          style={{ y: imageY, scale: imageScale }}
        >
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
          />
        </motion.div>

        {/* Navy overlay */}
        <div className="absolute inset-0 bg-navy-950/65 transition-colors duration-500 group-hover:bg-navy-950/55" />

        {/* Gradient depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />

        <ParallaxAccent index={index} scrollYProgress={scrollYProgress} />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="max-w-xl rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all duration-500 group-hover:border-white/25 group-hover:bg-white/15 sm:max-w-lg sm:p-7 lg:max-w-xl lg:p-8">
            <div className="mb-4 flex items-start gap-4 sm:mb-5 sm:gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]">
                <Icon className="size-7 text-white sm:size-8 lg:size-9" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 flex-1 pt-1">
                <span className="mb-1.5 inline-block text-[10px] font-semibold tracking-[0.2em] text-blue-300/80 uppercase sm:text-xs">
                  Hizmet {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold leading-tight text-white sm:text-xl lg:text-2xl">
                  {service.title}
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/75 sm:text-base sm:leading-relaxed">
              {service.description}
            </p>

            <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-white/0 transition-all duration-500 group-hover:text-white/90 sm:mt-5">
              Detaylı Bilgi
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700 group-hover:w-full" />
      </motion.div>
    </motion.article>
  );
}
