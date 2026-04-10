import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: "author",
    defaultColumns: ["author", "quote", "order"],
  },
  fields: [
    {
      name: "quote",
      type: "text",
      required: true,
    },
    {
      name: "body",
      type: "richText",
      editor: lexicalEditor({}),
      required: true,
    },
    {
      name: "author",
      type: "text",
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
