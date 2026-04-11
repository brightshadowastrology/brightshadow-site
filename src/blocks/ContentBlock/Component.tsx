import { cn } from "@/utilities/ui";
import React from "react";
import RichText from "@/components/UI/RichText";

import type { ContentBlock as ContentBlockProps } from "@/payload-types";

import { CMSLink } from "@/components/UI/Link";
import Divider from "@/components/UI/Divider";

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props;

  const colsSpanClasses = {
    full: "12",
    half: "6",
    oneThird: "4",
    twoThirds: "8",
  };

  return (
    <section className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
      {columns &&
        columns.length > 0 &&
        columns.map((col, index) => {
          const { enableDivider, enableLink, link, richText, size } = col;

          return (
            <div
              className={cn(
                `col-span-4 lg:col-span-${colsSpanClasses[size!]} gap-[var(--spacing-xl)] flex flex-col`,
                {
                  "md:col-span-2": size !== "full",
                },
              )}
              key={index}
            >
              <div>
                {richText && <RichText data={richText} enableGutter={false} />}

                {enableLink && <CMSLink {...link} />}
              </div>

              {enableDivider && <Divider />}
            </div>
          );
        })}
    </section>
  );
};
