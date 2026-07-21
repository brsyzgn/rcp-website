"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface FloatingWhatsAppProps {
  className?: string;
  /** Mobilde alt iletişim çubuğu varken gizle (varsayılan: true) */
  hideOnMobile?: boolean;
}

export function FloatingWhatsApp({
  className,
  hideOnMobile = true,
}: FloatingWhatsAppProps) {
  return (
    <motion.a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/35 transition-shadow hover:shadow-xl hover:shadow-green-500/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300/60 focus-visible:ring-offset-2",
        hideOnMobile && "hidden md:flex",
        !hideOnMobile && "flex",
        className
      )}
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="size-7" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-green-400" />
      </span>
    </motion.a>
  );
}
