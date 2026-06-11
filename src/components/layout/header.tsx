"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SocialLinks } from "@/components/ui/social-links";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { scrollToSection } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const getNavHref = (href: string) =>
    href.startsWith("#") ? `/${href}` : href;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleAnchorNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileOpen(false);
      requestAnimationFrame(() => {
        scrollToSection(href);
      });
    },
    []
  );

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b border-navy-100 bg-white/90 backdrop-blur-xl transition-all duration-300",
        isScrolled && "shadow-sm shadow-navy-900/5"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90 sm:gap-3"
          aria-label="Yaşam Elektronik ana sayfa"
        >
          <Logo className="h-11 w-auto transition-transform group-hover:scale-[1.02] sm:h-12 lg:h-[52px]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={getNavHref(link.href)}
              onClick={(e) => {
                if (isHome) handleAnchorNav(e, link.href);
              }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <SocialLinks variant="header" />
          <Button
            size="lg"
            className="hidden h-10 gap-2 bg-navy-900 px-4 text-white hover:bg-navy-800 md:flex"
            render={<a href={`tel:${COMPANY.phoneRaw}`} />}
          >
            <Phone className="size-4" />
            <span className="hidden xl:inline">Hemen Ara</span>
          </Button>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-white transition-colors hover:bg-navy-800 md:hidden"
            aria-label="Telefon ile ara"
          >
            <Phone className="size-4" />
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-navy-900 lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-navy-100 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobil menü">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={getNavHref(link.href)}
                  onClick={(e) => {
                    if (isHome) handleAnchorNav(e, link.href);
                    else setIsMobileOpen(false);
                  }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-navy-900 px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="size-4" />
                {COMPANY.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
