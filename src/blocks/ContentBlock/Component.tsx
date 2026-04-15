import { cn } from "@/utilities/ui";
import React from "react";
import RichText from "@/components/RichText";
import Card from "@/blocks/CardBlock/Component";
import SectionLabel from "@/blocks/SectionLabelBlock/Component";
import Divider from "@/blocks/DividerBlock/Component";
import ServiceCard from "@/blocks/ServiceCardBlock/Component";
import Products from "@/blocks/ProductsBlock/Component";
import BannerBlock from "@/blocks/BannerBlock/Component";

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
    case "divider":
      return (
        <Divider
          key={index}
          className={block.className as string | undefined}
        />
      );
    case "serviceCard":
      return (
        <ServiceCard
          key={index}
          {...(block as unknown as Parameters<typeof ServiceCard>[0])}
        />
      );
    case "products":
      return (
        <Products
          key={index}
          {...(block as unknown as Parameters<typeof Products>[0])}
        />
      );
    case "banner":
      return (
        <BannerBlock
          key={index}
          {...(block as unknown as Parameters<typeof BannerBlock>[0])}
        />
      );
    default:
      return null;
  }
}

const ContentBlock: React.FC<ContentBlockProps> = ({ columns, className }) => {
  return (
    <section
      className={cn(
        "px-[var(--gutter-size)] pt-[var(--gutter-size)] pb-[var(--gutter-size)] bg-[var(--neutral-100)] grid grid-cols-4 lg:grid-cols-12 gap-[var(--spacing-md)]",
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
                        className="w-full flex justify-center pb-[var(--spacing-lg)]"
                        key={i}
                      >
                        {renderBlock(block, i)}
                      </div>
                    );
                  }

                  if (block.blockType === "richTextBlock" && size === "full") {
                    return (
                      <div
                        className="w-full flex justify-center py-[var(--spacing-xl)]"
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

export default ContentBlock;
