import { defaultLexical } from "@/fields/defaultLexical";
import type { CollectionConfig } from "payload";
import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "stripeProductId", "order"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "kicker",
      type: "text",
      required: true,
    },
    {
      name: "stripeProductId",
      type: "text",
      required: true,
    },
    {
      name: "stripePrices",
      type: "array",
      required: true,
      fields: [
        {
          name: "stripePriceId",
          type: "text",
          required: true,
        },
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "currency",
          type: "text",
          required: true,
        },
        {
          name: "unitAmount",
          type: "number",
          required: true,
        },
        {
          name: "interval",
          type: "text",
        },
      ],
    },
    {
      name: "description",
      type: "richText",
      editor: defaultLexical,
      required: true,
    },
    {
      name: "order",
      type: "number",
      required: true,
      admin: {
        description: "Display order (lower numbers appear first).",
      },
    },
  ],
};
