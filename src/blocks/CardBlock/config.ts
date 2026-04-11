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
    name: "imageSrc",
    type: "text",
    required: false,
  },
  {
    name: "imageAlt",
    type: "text",
    required: false,
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
