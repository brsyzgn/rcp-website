"use client";

import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileContactBarProps {
  className?: string;
}

export function MobileContactBar({ className }: MobileContactBarProps) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-navy-100 bg-white/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(11,35,71,0.08)] backdrop-blur-xl md:hidden",
        className
      )}
      role="navigation"
      aria-label="Hızlı iletişim"
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-navy-900 text-sm font-semibold text-white shadow-md shadow-navy-900/20 transition-colors active:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-400/50"
        >
          <Phone className="size-4" aria-hidden />
          Ara
        </a>
        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-white shadow-md shadow-green-500/25 transition-colors active:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300/50"
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
