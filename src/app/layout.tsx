import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ROOT_METADATA } from "@/lib/seo/config";
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
      <body className="min-h-screen bg-white font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
        >
          İçeriğe atla
        </a>
        {children}
      </body>
    </html>
  );
}
