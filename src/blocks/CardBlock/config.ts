import type { Block, Field } from "payload";

import { defaultLexical } from "@/fields/defaultLexical";
import { link } from "@/fields/link";

export const cardFields: Field[] = [
  {
    name: "image",
    type: "upload",
    relationTo: "media",
    required: false,
  },
  {
    name: "title",
    type: "text",
    required: true,
  },
  {
    name: "kicker",
    type: "text",
    required: false,
  },
  {
    name: "description",
    type: "richText",
    editor: defaultLexical,
  },
  {
    name: "enableLink",
    type: "checkbox",
  },
  link({
    overrides: {
      admin: {
        condition: (_data, siblingData) => {
          return Boolean(siblingData?.enableLink);
        },
      },
    },
  }),
];

export const CardBlock: Block = {
  slug: "card",
  interfaceName: "CardBlock",
  fields: cardFields,
};
