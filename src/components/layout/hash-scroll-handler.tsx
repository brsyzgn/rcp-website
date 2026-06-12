"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/scroll-to-section";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash;
    if (!hash) return;

    // Android: wait for layout/paint after navigation
    const timer = window.setTimeout(() => {
      scrollToSection(hash, "auto");
    }, 150);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
