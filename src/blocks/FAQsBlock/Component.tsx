import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import type { FaqItem } from "@/payload-types";
import SectionLabel from "@/blocks/SectionLabelBlock/Component";
import AccordionItem, { AccordionRoot } from "@/components/UI/AccordionItem";

type FAQsBlockProps = {
  faqs?: (number | FaqItem)[] | null;
  category?: string;
};

export const FAQsBlock: React.FC<FAQsBlockProps> = async ({
  faqs,
  category,
}) => {
  let filteredFaqs: FaqItem[] = [];

  if (faqs && faqs.length > 0) {
    filteredFaqs = faqs.filter(
      (f): f is FaqItem => typeof f !== "number" && f !== null,
    );
  } else {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "faq-items",
      where: category ? { category: { equals: category } } : {},
      sort: "order",
    });
    filteredFaqs = result.docs;
  }

  if (!filteredFaqs.length) return null;

  return (
    <section className="w-full bg-[var(--neutral-100)] flex flex-col items-center justify-center pb-[var(--gutter-size)] pt-[var(--spacing-xl)] px-[var(--gutter-size)]">
      <div className="flex flex-col gap-[var(--spacing-xxl)] items-center w-full max-w-[75%]">
        <SectionLabel title="FAQs" />

        <AccordionRoot type="single" collapsible className="w-full">
          {filteredFaqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id.toString()}
              title={faq.question}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>
    </section>
  );
};
