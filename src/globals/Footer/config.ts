import type { GlobalConfig } from "payload";

import { link } from "@/fields/link";
import { revalidateFooter } from "./hooks/revalidateFooter";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: "@/globals/Footer/RowLabel#RowLabel",
        },
      },
    },
    {
      name: "legalItems",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: "@/globals/Footer/RowLabel#RowLabel",
        },
      },
    },
    {
      name: "copyright",
      type: "text",
      admin: {
        description:
          "Copyright text to display in the footer (e.g. '© 2024 Your Company')",
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
};
