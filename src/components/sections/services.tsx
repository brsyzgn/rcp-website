"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/sections/service-card";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section
      id="hizmetler"
      className="bg-white py-24 sm:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Hizmetlerimiz"
          titleId="services-heading"
          title="Kapsamlı Elektronik Çözümler"
          description="Güvenlikten eğlenceye, ev ve iş yeriniz için profesyonel kurulum, bakım ve onarım hizmetleri sunuyoruz."
        />

        <div className="flex flex-col gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
