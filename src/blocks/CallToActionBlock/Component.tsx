import React from "react";

import { Section } from "@/components/Section";
import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import { CMSLink } from "@/components/Link";

const CallToActionBlock: React.FC<CTABlockProps> = ({ cta, line1, line2 }) => {
  return (
    <Section className="bg-[var(--neutral-200)]  px-[var(--gutter-size)] py-[var(--spacing-xxl)]">
      <div className="flex flex-col gap-[var(--spacing-sm)] md:gap-[var(--spacing-2xl)] items-center text-center">
        <div className="flex flex-col gap-[var(--spacing-sm)] md:gap-[var(--spacing-lg)]">
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
      </div>
    </Section>
  );
};

export default CallToActionBlock;
