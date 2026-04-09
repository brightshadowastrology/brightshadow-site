import React from "react";

import { Section } from "@/components/UI/Section";
import type { CallToActionBlock as CTABlockProps } from "@/payload-types";

import { CMSLink } from "@/components/UI/Link";

export const CallToActionBlock: React.FC<CTABlockProps> = ({
  cta,
  line1,
  line2,
}) => {
  return (
    // <Section className="flex flex-col items-center gap-8 text-center">
    //   <div className="flex flex-col gap-2">
    //     {line1 && <p className="text-lg">{line1}</p>}
    //     {line2 && <h2 className="text-4xl">{line2}</h2>}
    //   </div>
    //   {cta && <CMSLink size="large" {...cta} />}
    // </Section>

    <Section className="bg-[var(--neutral-200)] flex flex-col gap-[var(--spacing-xxl)] items-center justify-center">
      <div className="flex flex-col gap-[var(--spacing-sm)] items-center text-center">
        <h2 className="font-normal leading-normal whitespace-nowrap text-4xl text-[color:var(--primary-600)]">
          {line1}
        </h2>
        <h2 className="font-normal leading-normal whitespace-nowrap text-5xl italic text-[color:var(--primary-600)]">
          {line2}
        </h2>
      </div>

      {cta && <CMSLink size="large" {...cta} />}
    </Section>
  );
};
