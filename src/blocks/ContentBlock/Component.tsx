import { cn } from "@/utilities/ui";
import React from "react";
import RichText from "@/components/UI/RichText";
import Card from "@/blocks/CardBlock/Component";

type BlockItem = {
  blockType: string;
  [key: string]: unknown;
};

type Row = {
  size?: "full" | "half" | "oneThird" | "twoThirds" | null;
  blocks?: BlockItem[] | null;
};

type ContentBlockProps = {
  rows?: Row[] | null;
};

const colsSpanClasses: Record<string, string> = {
  full: "12",
  half: "6",
  oneThird: "4",
  twoThirds: "8",
};

function renderBlock(block: BlockItem, index: number) {
  switch (block.blockType) {
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

export const ContentBlock: React.FC<ContentBlockProps> = ({ rows }) => {
  return (
    <section className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
      {rows &&
        rows.length > 0 &&
        rows.map((row, index) => {
          const { size, blocks } = row;
          const span = colsSpanClasses[size ?? "oneThird"];

          console.log(
            "Rendering column with size:",
            size,
            "which corresponds to span:",
            span,
          );
          return (
            <div
              key={index}
              className={cn(
                `col-span-4 lg:col-span-${span} gap-[var(--spacing-xl)] flex flex-col`,
                { "md:col-span-2": size !== "full" },
              )}
            >
              {blocks && blocks.map((block, i) => renderBlock(block, i))}
            </div>
          );
        })}
    </section>
  );
};
