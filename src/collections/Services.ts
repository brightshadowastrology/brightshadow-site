import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";

export const Services: CollectionConfig = {
  slug: "services",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "price", "page", "order"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "duration",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      editor: lexicalEditor({}),
      required: true,
    },
    {
      name: "deliverables",
      type: "array",
      fields: [
        {
          name: "text",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "page",
      type: "select",
      required: true,
      options: [
        { label: "Services", value: "services" },
      ],
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
