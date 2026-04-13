import type { Block } from "payload";

export const DividerBlock: Block = {
  slug: "divider",
  interfaceName: "DividerBlock",
  fields: [
    {
      name: "className",
      type: "text",
      label: "Class Name",
    },
  ],
  labels: {
    plural: "Dividers",
    singular: "Divider",
  },
};
