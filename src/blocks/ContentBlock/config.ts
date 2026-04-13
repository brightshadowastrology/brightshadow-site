import type { Block } from "payload";

import { defaultLexical } from "@/fields/defaultLexical";
import { CardBlock } from "@/blocks/CardBlock/config";
import { DividerBlock } from "@/blocks/DividerBlock/config";
import { SectionLabelBlock } from "@/blocks/SectionLabelBlock/config";

const RichTextBlock: Block = {
  slug: "richTextBlock",
  fields: [
    {
      name: "content",
      type: "richText",
      editor: defaultLexical,
      label: false,
    },
  ],
};

const ColumnBlock: Block = {
  slug: "column",
  fields: [
    {
      name: "size",
      type: "select",
      defaultValue: "oneThird",
      options: [
        { label: "One Third", value: "oneThird" },
        { label: "Half", value: "half" },
        { label: "Two Thirds", value: "twoThirds" },
        { label: "Full", value: "full" },
      ],
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: [RichTextBlock, CardBlock, SectionLabelBlock, DividerBlock],
    },
  ],
};

export const ContentBlock: Block = {
  slug: "content",
  interfaceName: "ContentBlock",
  fields: [
    {
      name: "columns",
      type: "blocks",
      blocks: [ColumnBlock],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: "className",
      type: "text",
      label: "Custom CSS Class (typically for background color)",
    },
  ],
};
