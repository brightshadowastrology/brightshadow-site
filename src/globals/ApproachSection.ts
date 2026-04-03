import type { GlobalConfig } from 'payload'

export const ApproachSection: GlobalConfig = {
  slug: 'approach-section',
  fields: [
    { name: 'label', type: 'text', defaultValue: 'My Approach' },
    {
      name: 'cards',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
