import type { Block } from "payload";

export const ProductsBlock: Block = {
  slug: "products",
  interfaceName: "ProductsBlock",
  fields: [
    {
      name: "products",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
      label: "Products",
      admin: {
        description:
          "Select specific products to display. Leave empty to show all.",
      },
    },
  ],
  labels: {
    plural: "Products Blocks",
    singular: "Products Block",
  },
};
