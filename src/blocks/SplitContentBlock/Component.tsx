import React from "react";

import type { SplitContentBlock as SplitContentBlockProps } from "@/payload-types";
import { Section } from "@/components/UI/Section";
import { Media } from "@/components/UI/Media";
import Image from "next/image";
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
}) => {
  const imageContent = (
    <div
      className={cn(
        "relative w-1/2 shrink-0 overflow-hidden",
        contentLeftSide ? "rounded-tl-[100px]" : "rounded-tr-[100px]",
      )}
    >
      <Media fill resource={media} imgClassName={cn("object-cover")} />
    </div>
  );

  const textContent = (
    <div className="flex flex-col flex-1 gap-[var(--spacing-xxl)] pt-[var(--spacing-xl)] pb-[var(--gutter-size)] px-[var(--gutter-size)]">
      <SectionLabel>{eyebrow}</SectionLabel>

      <div className="flex flex-col gap-[var(--spacing-xl)]">
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
    <Section className="bg-[var(--neutral-200)] flex min-h-[80vh]">
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
