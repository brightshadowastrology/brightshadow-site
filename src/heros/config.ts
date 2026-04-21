import type { Field } from "payload";

import { linkGroup } from "@/fields/linkGroup";

export const hero: Field = {
  name: "hero",
  type: "group",
  fields: [
    {
      name: "type",
      type: "select",
      defaultValue: "highImpact",
      label: "Type",
      options: [
        {
          label: "None",
          value: "none",
        },
        {
          label: "High Impact",
          value: "highImpact",
        },
      ],
      required: true,
    },
    {
      name: "headingBefore",
      type: "text",
      label: "Heading (before accent)",
      admin: {
        condition: (_, { type } = {}) => type === "highImpact",
      },
    },
    {
      name: "headingAccent",
      type: "text",
      label: "Heading accent word",
      admin: {
        condition: (_, { type } = {}) => type === "highImpact",
        description: "Rendered in the accent colour.",
      },
    },
    {
      name: "headingAfter",
      type: "text",
      label: "Heading (after accent)",
      admin: {
        condition: (_, { type } = {}) => type === "highImpact",
      },
    },
    {
      name: "bodyText",
      type: "textarea",
      label: "Body text",
      admin: {
        condition: (_, { type } = {}) => type === "highImpact",
      },
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: "media",
      type: "text",
      admin: {
        condition: (_, { type } = {}) => ["highImpact"].includes(type),
        description: "Path to an image in the /public folder, e.g. /images/my-image.jpg",
      },
      required: false,
    },
  ],
  label: false,
};
