import {
  COMPANY,
  SCHEMA_SERVICES,
  SERVICE_AREAS,
  SOCIAL_LINKS,
  TESTIMONIALS,
} from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/seo/faq-data";
import type { Service, ServiceFaqItem } from "@/lib/services";
import { DEFAULT_DESCRIPTION, SITE_URL } from "@/lib/seo/config";

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
    image: `${SITE_URL}/favicon-512x512.png`,
    logo: `${SITE_URL}/favicon-512x512.png`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
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

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Yaşam Elektronik",
    alternateName: ["Yaşam Elektronik Tuzla", COMPANY.name],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon-512x512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/favicon-512x512.png`,
    description: DEFAULT_DESCRIPTION,
    email: COMPANY.email,
    telephone: COMPANY.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: "Tuzla",
      addressRegion: "İstanbul",
      postalCode: "34940",
      addressCountry: "TR",
    },
    sameAs: SOCIAL_LINKS.map((link) => link.href).filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY.phoneRaw,
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
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
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "tr-TR",
  };
}

export function buildHomeBreadcrumbSchema() {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
    ],
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

export function buildServicePageSchema(
  page: Service,
  faq: readonly ServiceFaqItem[] = []
) {
  const pageUrl = `${SITE_URL}/${page.slug}`;

  const graph: Record<string, unknown>[] = [
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
  ];

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      buildLocalBusinessSchema(),
      buildWebsiteSchema(),
      buildFaqSchema(),
      buildHomeBreadcrumbSchema(),
    ],
  };
}
