import React from "react";

import { Section } from "@/components/Section";
import type { StatementBlock as StatementBlockProps } from "@/payload-types";

const StatementBlock: React.FC<StatementBlockProps> = ({
  topLabel,
  conditions,
  bottomLabel,
}) => {
  return (
    <Section className="bg-[var(--primary-200)] flex flex-col items-start px-[var(--gutter-size)] py-[var(--spacing-3xl)]">
      <div className="flex flex-col gap-[var(--spacing-xl)] items-start max-w-[1440px] mx-auto w-full">
        {/* Top label */}
        <p className="font-normal leading-normal text-[color:var(--primary-900)] tracking-[var(--tracking-label)] whitespace-nowrap">
          {topLabel}
        </p>

        {/* Main flowing text */}
        <h3 className="font-normal text-2xl md:text-4xl !leading-[1.5] text-[color:var(--accent-600)] ">
          {conditions &&
            conditions.map((condition, i) => (
              <span key={condition.id ?? condition.text}>
                {condition.text}
                {i < conditions.length - 1 && (
                  <span className="text-[color:var(--primary-400)]"> / </span>
                )}
              </span>
            ))}
        </h3>

        {/* Bottom right label */}
        <p className="w-full font-normal leading-normal text-[color:var(--primary-900)] tracking-[var(--tracking-label)] text-right">
          {bottomLabel}
        </p>
      </div>
    </Section>
  );
};

export default StatementBlock;
