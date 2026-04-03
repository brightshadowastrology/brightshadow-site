"use client";

import React from "react";
import SectionLabel from "@/components/UI/SectionLabel";
import { AccordionItem, AccordionRoot } from "@/components/UI/AccordionItem";

export interface FaqItem {
  value: string;
  question: string;
  answer: React.ReactNode;
}

interface FAQsProps {
  faqs: FaqItem[];
}

export default function FAQs({ faqs }: FAQsProps) {
  if (faqs.length === 0) return null;

  return (
    <section className="w-full bg-[var(--neutral-100)] flex flex-col items-center justify-center pb-[var(--gutter-size)] pt-[var(--spacing-xl)] px-[var(--gutter-size)]">
      <div className="flex flex-col gap-[var(--spacing-xxl)] items-center w-full max-w-[75%]">
        <SectionLabel>FAQs</SectionLabel>

        <AccordionRoot type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              title={faq.question}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>
    </section>
  );
}
