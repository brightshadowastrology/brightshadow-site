import type { Block, Field } from "payload";

export const sectionFields: Field[] = [
  {
    name: "title",
    type: "text",
    required: true,
  },
  {
    name: "variant",
    type: "text",
    required: false,
  },
];

export const SectionLabelBlock: Block = {
  slug: "sectionLabel",
  interfaceName: "SectionLabelBlock",
  fields: sectionFields,
};
