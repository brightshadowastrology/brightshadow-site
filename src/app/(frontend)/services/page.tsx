import FAQs from "@/components/sections/FAQs";
import ServicesOfferings from "@/components/sections/ServicesOfferings";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Metadata } from "next";
import { getPayload } from "payload";

export const metadata: Metadata = {
  title: "Services — Bright Shadow Studio",
  description:
    "Astrological consultations, readings, and coaching with Singithi.",
};

export default async function ServicesPage() {
  const payload = await getPayload({ config });

  const [servicesResult, faqsResult, servicesPageSettings] = await Promise.all([
    payload.find({
      collection: "services",
      where: { page: { equals: "services" } },
      sort: "order",
      limit: 20,
    }),
    payload.find({
      collection: "faq-items",
      where: { category: { equals: "general" } },
      sort: "order",
      limit: 20,
    }),
    payload.findGlobal({ slug: "services-page-settings" }),
  ]);

  const services = servicesResult.docs.map((svc) => ({
    id: String(svc.id),
    name: svc.name,
    price: svc.price,
    duration: svc.duration,
    description: <RichText data={svc.description} />,
  }));

  const faqs = faqsResult.docs.map((faq, i) => ({
    value: `q${i + 1}`,
    question: faq.question,
    answer: <RichText data={faq.answer} />,
  }));

  return (
    <>
      <ServicesOfferings
        services={services}
        introLine1={servicesPageSettings.introLine1 ?? undefined}
        introLine2={servicesPageSettings.introLine2 ?? undefined}
      />
      <FAQs faqs={faqs} />
    </>
  );
}
