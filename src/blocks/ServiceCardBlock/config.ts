import type { Block, Field } from "payload";
import { link } from "../../fields/link";

export const serviceCardFields: Field[] = [
  {
    name: "title",
    type: "text",
    required: true,
  },
  {
    name: "price",
    type: "number",
    required: true,
  },
  {
    name: "currency",
    type: "text",
    defaultValue: "CAD",
  },
  {
    name: "duration",
    type: "text",
  },
  {
    name: "description",
    type: "richText",
    required: true,
  },
  link({
    appearances: ["primary", "secondary"],
    overrides: {
      name: "link",
    },
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
    name: "className",
    type: "text",
    required: false,
  },
];

export const ServiceCardBlock: Block = {
  slug: "serviceCard",
  interfaceName: "ServiceCardBlock",
  fields: serviceCardFields,
};
