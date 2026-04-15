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
    <div className="flex flex-col justify-between flex-1 pt-[var(--spacing-xl)] pb-[var(--gutter-size)] px-[var(--gutter-size)]">
      <SectionLabel title={eyebrow || ""} />

      <div className="flex flex-col gap-[var(--spacing-xl)] mt-[var(--spacing-3xl)]">
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

export default SplitContentBlock;
