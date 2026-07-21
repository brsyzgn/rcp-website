import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { HashScrollHandler } from "@/components/layout/hash-scroll-handler";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/contact/floating-whatsapp";
import { MobileContactBar } from "@/components/contact/mobile-contact-bar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { HomeJsonLd } from "@/components/seo/home-json-ld";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <HashScrollHandler />
      <Header />
      <main id="main-content" className="pb-28 md:pb-0">
        <Hero />
        <Services />
        <WhyUs />
        <ProcessTimeline />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileContactBar />
    </>
  );
}
