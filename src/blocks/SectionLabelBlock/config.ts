import type { Block, Field } from "payload";

export const sectionFields: Field[] = [
  {
    name: "title",
    type: "text",
    required: true,
  },
];

export const SectionLabelBlock: Block = {
  slug: "sectionLabel",
  interfaceName: "SectionLabelBlock",
  fields: sectionFields,
};
