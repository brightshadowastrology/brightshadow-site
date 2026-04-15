import type { Block } from "payload";

export const BannerBlock: Block = {
  slug: "banner",
  interfaceName: "BannerBlock",
  fields: [
    { name: "introLine1", type: "text", label: "Intro Line 1" },
    { name: "introLine2", type: "text", label: "Intro Line 2" },
    {
      name: "introLineVariant",
      type: "select",
      label: "Intro Line Variant",
      options: [
        { label: "Default", value: "default" },
        { label: "Large", value: "large" },
        { label: "Small", value: "small" },
      ],
      admin: {
        description: "Select a variant for Intro Line 1 to adjust its styling",
      },
    },
    {
      name: "introLineClassName",
      type: "text",
      label: "Intro Line 1 Class Name",
      admin: { description: "Optional CSS class for styling Intro Line 1" },
    },
    {
      name: "introLine2ClassName",
      type: "text",
      label: "Intro Line 2 Class Name",
      admin: { description: "Optional CSS class for styling Intro Line 2" },
    },
  ],
  labels: {
    plural: "Banner Blocks",
    singular: "Banner Block",
  },
};
