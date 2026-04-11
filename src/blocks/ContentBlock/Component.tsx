import { cn } from "@/utilities/ui";
import React from "react";
import RichText from "@/components/UI/RichText";
import Card from "@/blocks/CardBlock/Component";
import SectionLabel from "@/blocks/SectionLabelBlock/Component";
import { block } from "sharp";

type BlockItem = {
  blockType: string;
  [key: string]: unknown;
};

type Column = {
  size?: "full" | "half" | "oneThird" | "twoThirds" | null;
  blocks?: BlockItem[] | null;
};

type ContentBlockProps = {
  columns?: Column[] | null;
  className?: string;
};

const colsSpanClasses: Record<string, string> = {
  full: "col-span-4 lg:col-span-12",
  half: "col-span-4 lg:col-span-6",
  oneThird: "col-span-4 lg:col-span-4",
  twoThirds: "col-span-4 lg:col-span-8",
};

function renderBlock(block: BlockItem, index: number) {
  switch (block.blockType) {
    case "sectionLabel":
      return (
        <SectionLabel
          key={index}
          {...(block as unknown as Parameters<typeof SectionLabel>[0])}
        />
      );
    case "richTextBlock":
      return (
        <RichText
          key={index}
          data={block.content as Parameters<typeof RichText>[0]["data"]}
          enableGutter={false}
        />
      );
    case "card":
      return (
        <Card
          key={index}
          {...(block as unknown as Parameters<typeof Card>[0])}
        />
      );
    default:
      return null;
  }
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  columns,
  className,
}) => {
  return (
    <section
      className={cn(
        "p-[var(--gutter-size)] bg-[var(--neutral-100)] grid grid-cols-4 lg:grid-cols-12 gap-[var(--spacing-md)]",
        className,
      )}
    >
      {columns &&
        columns.length > 0 &&
        columns.map((col, index) => {
          const { size, blocks } = col;
          const spanClass = colsSpanClasses[size ?? "oneThird"];

          return (
            <div
              key={index}
              className={cn(spanClass, "gap-[var(--spacing-xl)] flex flex-col")}
            >
              {blocks &&
                blocks.map((block, i) => {
                  if (block.blockType === "sectionLabel" && size === "full") {
                    return (
                      <div
                        className="w-full flex justify-center pb-[var(--spacing-xl)]"
                        key={i}
                      >
                        {renderBlock(block, i)}
                      </div>
                    );
                  }

                  return renderBlock(block, i);
                })}
            </div>
          );
        })}
    </section>
  );
};
