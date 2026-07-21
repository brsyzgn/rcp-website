import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yasamelektronik.com";

export const SITE_NAME = "Yaşam Elektronik";

export const DEFAULT_TITLE =
  "Yaşam Elektronik | Kamera, Alarm ve Diyafon Sistemleri Tuzla İstanbul";

export const DEFAULT_DESCRIPTION =
  "Yaşam Elektronik; Tuzla ve İstanbul genelinde kamera sistemleri, alarm sistemleri, görüntülü diyafon, uydu anten kurulumu ve TV tamir hizmetleri sunmaktadır.";

export const SEO_KEYWORDS = [
  "Yaşam Elektronik",
  "Yaşam Elektronik Tuzla",
  "Yaşam Elektronik İstanbul",
  "Tuzla Kamera Sistemleri",
  "Tuzla Alarm Sistemleri",
  "Tuzla Diyafon Sistemleri",
  "Tuzla Uydu Sistemleri",
  "Tuzla TV Tamiri",
  "İstanbul Kamera Sistemleri",
  "İstanbul Alarm Sistemleri",
  "Kamera Sistemleri Tuzla",
  "Alarm Sistemleri Tuzla",
  "Görüntülü Diyafon Tuzla",
  "Uydu Anten Servisi Tuzla",
  "LED LCD TV Tamiri Tuzla",
  "güvenlik kamerası kurulumu",
  "CCTV Tuzla",
  "merkezi anten Tuzla",
] as const;

/** Hizmet sayfaları — tek kaynak: src/lib/services.ts */
export { SERVICE_PAGES, services, SERVICE_LIST, getServiceBySlug } from "@/lib/services";

const OG_IMAGE = {
  url: `${SITE_URL}/favicon-512x512.png`,
  width: 512,
  height: 512,
  alt: SITE_NAME,
} as const;

export const SITE_ICONS = {
  icon: [
    { url: `${SITE_URL}/favicon.ico`, sizes: "48x48", type: "image/x-icon" },
    { url: `${SITE_URL}/favicon-48x48.png`, sizes: "48x48", type: "image/png" },
    { url: `${SITE_URL}/favicon-192x192.png`, sizes: "192x192", type: "image/png" },
    { url: `${SITE_URL}/favicon-512x512.png`, sizes: "512x512", type: "image/png" },
  ],
  apple: [
    {
      url: `${SITE_URL}/apple-touch-icon.png`,
      sizes: "180x180",
      type: "image/png",
    },
  ],
  shortcut: `${SITE_URL}/favicon.ico`,
};

export function createMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "",
  keywords = [...SEO_KEYWORDS],
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
} = {}): Metadata {
  const url = `${SITE_URL}${path}`;
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  const resolvedTitle =
    path === "" || path === "/"
      ? { absolute: title }
      : title;

  return {
    title: resolvedTitle,
    description,
    keywords,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "business",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: SITE_ICONS,
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  };
}

export const ROOT_METADATA: Metadata = {
  ...createMetadata(),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  icons: SITE_ICONS,
};
