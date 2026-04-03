import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "kicker", type: "text" },
    { name: "stripeProductId", type: "text" },
    {
      name: "stripePrices",
      type: "array",
      fields: [
        { name: "stripePriceId", type: "text" },
        { name: "label", type: "text" },
        { name: "currency", type: "text" },
        { name: "unitAmount", type: "number" },
        { name: "interval", type: "text" },
      ],
    },
    { name: "description", type: "richText" },
    { name: "order", type: "number", defaultValue: 0 },
  ],
};
