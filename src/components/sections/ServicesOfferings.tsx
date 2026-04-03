import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";

interface ServiceItem {
  id: string;
  name: string;
  price?: number | null;
  duration?: string | null;
  description: React.ReactNode;
}

interface ServicesOfferingsProps {
  services: ServiceItem[];
  introLine1?: string | null;
  introLine2?: string | null;
}

export default function ServicesOfferings({
  services,
  introLine1 = "Clarity, creativity, and a map for what comes next.",
  introLine2 = "Choose your depth.",
}: ServicesOfferingsProps) {
  return (
    <section className="w-full bg-[var(--primary-100)] flex flex-col gap-[var(--spacing-xxl)] items-center justify-center pb-[var(--gutter-size)] pt-[var(--spacing-xl)] px-[var(--gutter-size)]">
      <SectionLabel>Offerings</SectionLabel>

      <div className="flex flex-col gap-[var(--spacing-lg)] items-center text-center">
        <h2 className="italic leading-normal whitespace-nowrap text-[color:var(--primary-600)]">
          {introLine1}
        </h2>
        <h3 className="leading-normal whitespace-nowrap text-[color:var(--primary-600)]">
          {introLine2}
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full items-start">
        {services.map((svc) => (
          <ServiceCard
            key={svc.id}
            variant="default"
            title={svc.name}
            price={svc.price ?? 0}
            duration={svc.duration ?? undefined}
            description={svc.description}
            ctaLabel="YES, PLEASE"
            ctaHref={`/book/${svc.id}`}
          />
        ))}
      </div>
    </section>
  );
}
