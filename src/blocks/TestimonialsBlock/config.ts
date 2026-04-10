import type { Block } from "payload";

export const TestimonialsBlock: Block = {
  slug: "testimonials",
  interfaceName: "TestimonialsBlock",
  fields: [
    {
      name: "testimonials",
      type: "relationship",
      relationTo: "testimonials",
      hasMany: true,
      label: "Testimonials",
      admin: {
        description:
          "Select specific testimonials to display. Leave empty to show all.",
      },
    },
  ],
  labels: {
    plural: "Testimonials Blocks",
    singular: "Testimonials Block",
  },
};
