import React from "react";

import { Section } from "@/components/UI/Section";
import type { StatementBlock as StatementBlockProps } from "@/payload-types";

export const StatementBlock: React.FC<StatementBlockProps> = ({
  topLabel,
  body,
  bottomLabel,
}) => {
  return (
    // <Section className="bg-[var(--surface-muted)] py-[var(--gutter-size)] px-[var(--spacing-2xl)] md:px-[var(--gutter-size)]">
    //   <div className="max-w-[var(--content-max)] mx-auto flex flex-col gap-[var(--spacing-xl)]">
    //     {topLabel && (
    //       <span
    //         className="text-[length:var(--type-label)] uppercase tracking-[var(--tracking-label)] text-[color:var(--text-muted)]"
    //       >
    //         {topLabel}
    //       </span>
    //     )}

    //     {body && (
    //       <p
    //         className="font-[family-name:var(--font-header)] text-[length:var(--type-display)] leading-[var(--leading-snug)] text-[color:var(--text-accent)] font-normal"
    //       >
    //         {body}
    //       </p>
    //     )}

    //     {bottomLabel && (
    //       <span
    //         className="text-[length:var(--type-label)] uppercase tracking-[var(--tracking-label)] text-[color:var(--text-muted)] text-right"
    //       >
    //         {bottomLabel}
    //       </span>
    //     )}
    //   </div>
    // </Section>

    <Section className="bg-[var(--primary-200)] flex flex-col items-start px-[var(--gutter-size)] py-[var(--spacing-xxl)]">
      <div className="flex flex-col gap-[var(--spacing-xl)] items-start w-full">
        {/* Top label */}
        <p className="font-normal leading-normal text-[color:var(--primary-900)] tracking-[var(--tracking-label)] whitespace-nowrap">
          {topLabel}
        </p>

        {/* Main flowing text */}
        <h3 className="font-normal text-4xl leading-normal text-[color:var(--accent-600)]">
          {body}
        </h3>

        {/* Bottom right label */}
        <p className="w-full font-normal leading-normal text-[color:var(--primary-900)] tracking-[var(--tracking-label)] text-right">
          {bottomLabel}
        </p>
      </div>
    </Section>
  );
};
