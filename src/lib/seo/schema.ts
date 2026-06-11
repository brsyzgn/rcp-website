import {
  COMPANY,
  SCHEMA_SERVICES,
  SERVICE_AREAS,
  SOCIAL_LINKS,
  TESTIMONIALS,
} from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/seo/faq-data";
import { DEFAULT_DESCRIPTION, SERVICE_PAGES, SITE_URL } from "@/lib/seo/config";

type ServicePage = (typeof SERVICE_PAGES)[number];

export function buildLocalBusinessSchema() {
  const reviews = TESTIMONIALS.map((testimonial) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: testimonial.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating,
      bestRating: 5,
    },
    reviewBody: testimonial.text,
    publisher: {
      "@type": "Organization",
      name: "Yaşam Elektronik",
    },
  }));

  return {
    "@type": ["LocalBusiness", "ElectronicsStore"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Yaşam Elektronik",
    alternateName: ["Yaşam Elektronik Tuzla", "Yaşam Elektronik İstanbul"],
    description: DEFAULT_DESCRIPTION,
    slogan: COMPANY.slogan,
    url: SITE_URL,
    telephone: COMPANY.phoneRaw,
    email: COMPANY.email,
    image: `${SITE_URL}/rcp.png`,
    logo: `${SITE_URL}/rcp.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: "Tuzla",
      addressRegion: "İstanbul",
      postalCode: "34940",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.8178,
      longitude: 29.3012,
    },
    hasMap: COMPANY.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Elektronik ve Güvenlik Hizmetleri",
      itemListElement: SCHEMA_SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: "Tuzla, İstanbul",
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: TESTIMONIALS.length,
      bestRating: 5,
    },
    review: reviews,
    sameAs: [
      COMPANY.whatsapp,
      COMPANY.mapsUrl,
      ...SOCIAL_LINKS.map((link) => link.href).filter(Boolean),
    ],
  };
}

export function buildWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Yaşam Elektronik",
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#localbusiness` },
    inLanguage: "tr-TR",
  };
}

export function buildFaqSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServicePageSchema(page: ServicePage) {
  const pageUrl = `${SITE_URL}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#localbusiness` },
        inLanguage: "tr-TR",
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: page.h1,
        description: page.metaDescription,
        provider: { "@id": `${SITE_URL}/#localbusiness` },
        areaServed: SERVICE_AREAS.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export function buildHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildLocalBusinessSchema(),
      buildWebsiteSchema(),
      buildFaqSchema(),
    ],
  };
}
