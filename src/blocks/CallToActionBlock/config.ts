import type { Block } from "payload";

import { link } from "../../fields/link";

export const CallToActionBlock: Block = {
  slug: "cta",
  interfaceName: "CallToActionBlock",
  fields: [
    {
      name: "line1",
      type: "text",
      label: "Line 1",
    },
    {
      name: "line2",
      type: "text",
      label: "Line 2",
    },
    link({
      appearances: ["primary", "secondary"],
      overrides: {
        name: "cta",
      },
    }),
  ],
  labels: {
    plural: "Calls to Action",
    singular: "Call to Action",
  },
};
