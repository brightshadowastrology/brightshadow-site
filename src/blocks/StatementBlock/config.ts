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
      name: "conditions",
      type: "array",
      label: "Conditions",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Text",
          required: true,
        },
      ],
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
