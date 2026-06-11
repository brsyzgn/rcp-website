import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { HomeJsonLd } from "@/components/seo/home-json-ld";
import { createMetadata } from "@/lib/seo/config";

export const metadata: Metadata = createMetadata({
  path: "/",
});

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <WhyUs />
        <ProcessTimeline />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
