import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LegalProvider } from "@/components/legal/legal-provider";
import { CookieBanner } from "@/components/legal/cookie-banner";
import { ROOT_METADATA, SITE_URL } from "@/lib/seo/config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = ROOT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={plusJakarta.variable}>
      <head>
        <link rel="icon" href={`${SITE_URL}/favicon.ico`} sizes="48x48" type="image/x-icon" />
        <link rel="icon" href={`${SITE_URL}/favicon-48x48.png`} sizes="48x48" type="image/png" />
        <link rel="icon" href={`${SITE_URL}/favicon-192x192.png`} sizes="192x192" type="image/png" />
        <link rel="apple-touch-icon" href={`${SITE_URL}/apple-touch-icon.png`} sizes="180x180" />
        <link rel="preload" href="/rp-poster.jpg" as="image" />
        <link rel="preload" href="/rp.mp4" as="video" type="video/mp4" />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-white font-sans antialiased">
        <LegalProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            İçeriğe atla
          </a>
          {children}
          <CookieBanner />
        </LegalProvider>
      </body>
    </html>
  );
}
