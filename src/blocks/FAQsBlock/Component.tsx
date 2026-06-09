import SectionLabel from "@/blocks/SectionLabelBlock/Component";
import AccordionItem, { AccordionRoot } from "@/components/AccordionItem";
import { Section } from "@/components/Section";
import type { FaqItem } from "@/payload-types";
import { getLocale } from "@/utilities/getLocale";
import { cn } from "@/utilities/ui";
import config from "@payload-config";
import { getPayload } from "payload";
import React from "react";

type FAQsBlockProps = {
  faqs?: (number | FaqItem)[] | null;
  category?: string;
  className?: string;
};

const FAQsBlock: React.FC<FAQsBlockProps> = async ({
  faqs,
  category,
  className,
}) => {
  let filteredFaqs: FaqItem[] = [];

  if (faqs && faqs.length > 0) {
    filteredFaqs = faqs.filter(
      (f): f is FaqItem => typeof f !== "number" && f !== null,
    );
  } else {
    const [payload, locale] = await Promise.all([
      getPayload({ config }),
      getLocale(),
    ]);
    const result = await payload.find({
      collection: "faq-items",
      where: category ? { category: { equals: category } } : {},
      sort: "order",
      locale,
    });
    filteredFaqs = result.docs;
  }

  if (!filteredFaqs.length) return null;

  return (
    <Section
      className={cn(
        "bg-[var(--neutral-100)]",
        "flex flex-col items-center justify-center",
        "pb-[var(--gutter-size)] pt-[var(--spacing-xl)] px-[var(--gutter-size)]",
        className,
      )}
    >
      <div
        className={cn(
          "w-full max-w-[1440px] mx-auto",
          "flex flex-col items-center",
          "gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)] lg:gap-[var(--spacing-2xl)]",
        )}
      >
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
    </Section>
  );
};

export default FAQsBlock;
