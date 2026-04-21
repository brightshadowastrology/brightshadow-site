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
      type: "text",
      required: false,
      label: "Media (public path)",
      admin: {
        description: "Path to an image in the /public folder, e.g. /images/my-image.jpg",
      },
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
    {
      name: "className",
      type: "text",
      label: "Custom CSS Class (typically for background color)",
    },
  ],
  labels: {
    plural: "Split Content Blocks",
    singular: "Split Content Block",
  },
};
