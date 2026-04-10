import type { Block } from "payload";

export const StatementBlock: Block = {
  slug: "statement",
  interfaceName: "StatementBlock",
  fields: [
    {
      name: "topLabel",
      type: "text",
      label: "Top Label",
    },
    {
      name: "body",
      type: "textarea",
      label: "Body",
    },
    {
      name: "bottomLabel",
      type: "text",
      label: "Bottom Label",
    },
  ],
  labels: {
    plural: "Statement Blocks",
    singular: "Statement Block",
  },
};
