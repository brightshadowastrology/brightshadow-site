import React from "react";

import { Section } from "@/components/Section";
import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import { CMSLink } from "@/components/Link";

const CallToActionBlock: React.FC<CTABlockProps> = ({ cta, line1, line2 }) => {
  return (
    <Section className="bg-[var(--neutral-200)] flex flex-col gap-[var(--spacing-2xl)] px-[var(--gutter-size)] py-[var(--spacing-xxl)] items-center justify-center">
      <div className="flex flex-col gap-[var(--spacing-sm)] md:gap-[var(--spacing-lg)] items-center text-center">
        <h2 className="font-normal leading-normal text-xl md:text-3xl text-[color:var(--primary-600)]">
          {line1}
        </h2>
        <h2 className="font-normal leading-normal text-3xl md:text-4xl italic text-[color:var(--primary-600)]">
          {line2}
        </h2>
      </div>

      {cta && (
        <CMSLink
          size="large"
          {...cta}
          className="max-w-none w-full md:w-auto"
        />
      )}
    </Section>
  );
};

export default CallToActionBlock;
