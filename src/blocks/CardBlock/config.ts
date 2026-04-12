import type { Block, Field } from "payload";

export const cardFields: Field[] = [
  {
    name: "title",
    type: "text",
    required: true,
  },
  {
    name: "description",
    type: "text",
    required: true,
  },
  {
    name: "href",
    type: "text",
    required: false,
  },
  {
    name: "media",
    type: "upload",
    relationTo: "media",
    required: true,
    label: "Media",
  },
  {
    name: "className",
    type: "text",
    required: false,
  },
];

export const CardBlock: Block = {
  slug: "card",
  interfaceName: "CardBlock",
  fields: cardFields,
};
