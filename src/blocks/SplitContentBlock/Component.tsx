import React from "react";

import type { SplitContentBlock as SplitContentBlockProps } from "@/payload-types";
import { Section } from "@/components/Section";
import { Media } from "@/components/Media";
import { CMSLink } from "@/components/Link";
import RichText from "@/components/RichText";
import SectionLabel from "@/blocks/SectionLabelBlock/Component";
import { cn } from "@/utilities/ui";

const SplitContentBlock: React.FC<SplitContentBlockProps> = ({
  eyebrow,
  intro,
  bodyText,
  link,
  media,
  contentLeftSide,
  className,
}) => {
  const imageContent = (
    <div
      className={cn(
        "h-[50vh] lg:h-full shrink-0 overflow-hidden mt-[var(--spacing-xl)] md:mt-0",
        contentLeftSide
          ? "rounded-[var(--radius-lg)] lg:p-0 lg:rounded-tr-[0px] lg:rounded-tl-[200px] lg:rounded-bl-[50px] lg:rounded-br-[0px]"
          : "rounded-[var(--radius-lg)] lg:p-0 lg:rounded-tr-[200px] lg:rounded-tl-[0px] lg:rounded-bl-[0px] lg:rounded-br-[50px]",
      )}
    >
      <Media resource={media} imgClassName={cn("object-cover")} />
    </div>
  );

  const textContent = (
    <div
      className={cn(
        "h-full",
        "flex flex-col justify-between",
        "pt-[var(--spacing-xl)] pb-[var(--spacing-3xl)] md:pb-[var(--gutter-size)] px-[var(--gutter-size)]",
      )}
    >
      <div className="flex justify-center lg:justify-start">
        <SectionLabel title={eyebrow || ""} />
      </div>

      <div className="block md:hidden">{imageContent}</div>

      <div className="flex flex-col gap-[var(--spacing-xl)] mt-[var(--spacing-xl)] md:mt-[var(--spacing-3xl)]">
        <h2 className="font-normal leading-snug text-[color:var(--text-body)]">
          {intro}
        </h2>

        <div className="font-normal leading-[22px] text-[color:var(--text-body)] space-y-[22px]">
          {bodyText && (
            <RichText
              data={bodyText}
              enableGutter={false}
              enableProse={false}
              className="prose"
            />
          )}
        </div>

        {link && (
          <div className="flex justify-center lg:justify-start">
            <CMSLink {...link} className="max-w-none w-full md:w-auto" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Section className={cn("bg-[var(--neutral-200)] min-h-[80vh]", className)}>
      {contentLeftSide ? (
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">{textContent}</div>
          <div className="flex-1 hidden md:block">{imageContent}</div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 hidden md:block">{imageContent}</div>
          <div className="flex-1">{textContent}</div>
        </div>
      )}
    </Section>
  );
};

export default SplitContentBlock;
