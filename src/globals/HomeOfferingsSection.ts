import type { GlobalConfig } from 'payload'

export const HomeOfferingsSection: GlobalConfig = {
  slug: 'home-offerings-section',
  fields: [
    { name: 'label', type: 'text', defaultValue: 'I Offer' },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
  ],
}
