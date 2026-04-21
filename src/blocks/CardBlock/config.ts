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
    type: "text",
    required: false,
    label: "Media (public path)",
    admin: {
      description: "Path to an image in the /public folder, e.g. /images/my-image.jpg",
    },
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
