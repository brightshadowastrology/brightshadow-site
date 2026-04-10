import { defaultLexical } from "@/fields/defaultLexical";
import type { CollectionConfig } from "payload";
import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";

export const FAQItems: CollectionConfig = {
  slug: "faq-items",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: "question",
    defaultColumns: ["question", "category", "order"],
  },
  fields: [
    {
      name: "question",
      type: "text",
      required: true,
    },
    {
      name: "answer",
      type: "richText",
      editor: defaultLexical,
      required: true,
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "General", value: "general" },
        { label: "Shop", value: "shop" },
      ],
    },
    {
      name: "order",
      type: "number",
      required: true,
      admin: {
        description:
          "Display order within category (lower numbers appear first).",
      },
    },
  ],
};
