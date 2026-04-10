import type { Block } from "payload";

import { defaultLexical } from "@/fields/defaultLexical";
import { link } from "@/fields/link";

export const SplitContentBlock: Block = {
  slug: "splitContent",
  interfaceName: "SplitContentBlock",
  fields: [
    {
      name: "eyebrow",
      type: "text",
      label: "Eyebrow",
    },
    {
      name: "intro",
      type: "text",
      label: "Intro",
    },
    {
      name: "bodyText",
      type: "richText",
      label: "Body Text",
      editor: defaultLexical,
    },
    link({
      appearances: ["primary", "secondary"],
    }),
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Media",
    },
    {
      name: "contentLeftSide",
      type: "checkbox",
      label: "Content on Left Side",
      defaultValue: true,
      admin: {
        description:
          "When checked, the text content appears on the left and media on the right. Uncheck to reverse.",
      },
    },
  ],
  labels: {
    plural: "Split Content Blocks",
    singular: "Split Content Block",
  },
};
