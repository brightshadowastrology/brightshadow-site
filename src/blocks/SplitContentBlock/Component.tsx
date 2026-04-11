import React from "react";

import type { SplitContentBlock as SplitContentBlockProps } from "@/payload-types";
import { Section } from "@/components/UI/Section";
import { Media } from "@/components/UI/Media";
import { CMSLink } from "@/components/UI/Link";
import RichText from "@/components/UI/RichText";
import SectionLabel from "@/components/UI/SectionLabel";
import { cn } from "@/utilities/ui";

export const SplitContentBlock: React.FC<SplitContentBlockProps> = ({
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
        "relative w-1/2 shrink-0 overflow-hidden",
        contentLeftSide
          ? "rounded-tl-[200px] rounded-bl-[50px]"
          : "rounded-tr-[200px] rounded-br-[50px]",
      )}
    >
      <Media fill resource={media} imgClassName={cn("object-cover")} />
    </div>
  );

  const textContent = (
    <div className="flex flex-col justify-between flex-1 pt-[var(--spacing-xl)] pb-[var(--spacing-3xl)] px-[var(--gutter-size)]">
      <SectionLabel>{eyebrow}</SectionLabel>

      <div className="flex flex-col gap-[var(--spacing-xl)] mt-[var(--gutter-size)]">
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

        {link && <CMSLink {...link} />}
      </div>
    </div>
  );

  return (
    <Section
      className={cn("bg-[var(--neutral-200)] flex min-h-[90vh]", className)}
    >
      {contentLeftSide ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : (
        <>
          {imageContent}
          {textContent}
        </>
      )}
    </Section>
  );
};
