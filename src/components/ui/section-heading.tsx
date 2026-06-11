"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  titleId,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            "mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest",
            light
              ? "bg-navy-800 text-blue-200 ring-1 ring-navy-700"
              : "bg-navy-50 text-navy-700 ring-1 ring-navy-100"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        id={titleId}
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-blue-100/80" : "text-slate-500"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
