import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yasamelektronik.com";

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

export const SERVICE_PAGES = [
  {
    slug: "kamera-sistemleri-tuzla",
    title: "Kamera Sistemleri Tuzla",
    metaTitle: "Kamera Sistemleri Tuzla | Yaşam Elektronik",
    metaDescription:
      "Tuzla ve İstanbul Anadolu Yakası'nda IP kamera, CCTV ve güvenlik kamera sistemi kurulumu. Yaşam Elektronik ile profesyonel keşif ve montaj.",
    h1: "Tuzla Kamera Sistemleri Kurulumu",
    keywords: ["Tuzla Kamera Sistemleri", "İstanbul Kamera Sistemleri", "CCTV Tuzla"],
  },
  {
    slug: "alarm-sistemleri-tuzla",
    title: "Alarm Sistemleri Tuzla",
    metaTitle: "Alarm Sistemleri Tuzla | Yaşam Elektronik",
    metaDescription:
      "Ev ve iş yeri alarm sistemi kurulumu Tuzla. Kablosuz ve kablolu alarm çözümleri, 7/24 güvenlik. Yaşam Elektronik uzman ekibi.",
    h1: "Tuzla Alarm Sistemleri",
    keywords: ["Tuzla Alarm Sistemleri", "İstanbul Alarm Sistemleri", "Alarm Sistemleri Tuzla"],
  },
  {
    slug: "diyafon-sistemleri-tuzla",
    title: "Diyafon Sistemleri Tuzla",
    metaTitle: "Görüntülü Diyafon Tuzla | Yaşam Elektronik",
    metaDescription:
      "Apartman ve site girişlerine görüntülü diyafon kurulumu Tuzla. Görüntülü kapı telefonu montaj ve bakım hizmeti.",
    h1: "Görüntülü Diyafon Sistemleri Tuzla",
    keywords: ["Görüntülü Diyafon Tuzla", "Tuzla Diyafon Sistemleri", "Diyafon kurulumu"],
  },
  {
    slug: "uydu-sistemleri-tuzla",
    title: "Uydu Sistemleri Tuzla",
    metaTitle: "Uydu Anten Servisi Tuzla | Yaşam Elektronik",
    metaDescription:
      "Uydu ve merkezi anten kurulumu Tuzla. Çanak anten, merkezi sistem ve uydu yayın çözümleri. Yaşam Elektronik.",
    h1: "Uydu ve Merkezi Anten Sistemleri Tuzla",
    keywords: ["Uydu Anten Servisi Tuzla", "Tuzla Uydu Sistemleri", "Merkezi Anten Tuzla"],
  },
  {
    slug: "tv-tamiri-tuzla",
    title: "TV Tamiri Tuzla",
    metaTitle: "LED LCD TV Tamiri Tuzla | Yaşam Elektronik",
    metaDescription:
      "LED ve LCD TV tamiri, LED değişimi Tuzla. Tüm marka televizyonlarda garantili teknik servis. Yaşam Elektronik.",
    h1: "LED LCD TV Tamiri Tuzla",
    keywords: ["LED LCD TV Tamiri Tuzla", "Tuzla TV Tamiri", "TV servisi İstanbul"],
  },
] as const;

const OG_IMAGE = {
  url: `${SITE_URL}/favicon-512x512.png`,
  width: 512,
  height: 512,
  alt: SITE_NAME,
} as const;

export const SITE_ICONS = {
  icon: [
    { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
  ],
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  shortcut: "/favicon-48x48.png",
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
