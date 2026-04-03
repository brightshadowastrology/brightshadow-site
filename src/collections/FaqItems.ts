import type { CollectionConfig } from 'payload'

export const FaqItems: CollectionConfig = {
  slug: 'faq-items',
  admin: {
    useAsTitle: 'question',
  },
  fields: [
    { name: 'question', type: 'text', required: true },
    { name: 'answer', type: 'richText', required: true },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Shop', value: 'shop' },
      ],
      required: true,
    },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
