import type { GlobalConfig } from 'payload'

export const IfYoureSection: GlobalConfig = {
  slug: 'if-youre-section',
  fields: [
    { name: 'topLabel', type: 'text', defaultValue: "IF YOU'RE..." },
    {
      name: 'conditions',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'bottomLabel', type: 'text', defaultValue: "...YOU'VE COME TO THE RIGHT PLACE" },
  ],
}
