import type { Block } from "payload";

export const FAQsBlock: Block = {
  slug: "faqs",
  interfaceName: "FAQsBlock",
  fields: [
    {
      name: "faqs",
      type: "relationship",
      relationTo: "faq-items",
      hasMany: true,
      label: "FAQs",
      admin: {
        description:
          "Select specific FAQs to display. Leave empty to show all.",
      },
    },
    {
      name: "category",
      type: "select",
      label: "Category",
      options: [
        { label: "General", value: "general" },
        { label: "Shop", value: "shop" },
      ],
      admin: {
        description:
          "Filter FAQs by category. Leave empty to show all categories.",
      },
    },
  ],
  labels: {
    plural: "FAQs Blocks",
    singular: "FAQs Block",
  },
};
