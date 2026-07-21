import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/contact/floating-whatsapp";
import { MobileContactBar } from "@/components/contact/mobile-contact-bar";
import { ServiceHero } from "@/components/service/service-hero";

interface ServicePageLayoutProps {
  slug: string;
  h1: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ServicePageLayout({
  slug,
  h1,
  title,
  description,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-28 md:pb-0">
        <ServiceHero h1={h1} title={title} description={description} />
        <article
          className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
          aria-labelledby={`${slug}-details`}
        >
          <h2 id={`${slug}-details`} className="sr-only">
            {title} Detayları
          </h2>
          <div className="space-y-14">{children}</div>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </>
  );
}
