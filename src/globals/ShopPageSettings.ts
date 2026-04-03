import type { GlobalConfig } from 'payload'

export const ShopPageSettings: GlobalConfig = {
  slug: 'shop-page-settings',
  fields: [
    {
      name: 'introLine1',
      type: 'text',
      defaultValue: 'Want to explore your chart on your own terms?',
    },
    {
      name: 'introLine2',
      type: 'text',
      defaultValue:
        'Each report and workbook is personally created from your birth chart data — no generic content here.',
    },
    { name: 'ctaLine1', type: 'text', defaultValue: 'Thank you for being here.' },
    {
      name: 'ctaLine2',
      type: 'text',
      defaultValue: "I'd love to be part of your journey.",
    },
    { name: 'ctaLabel', type: 'text', defaultValue: 'BOOK YOUR FIRST CONSULTATION' },
    { name: 'ctaHref', type: 'text', defaultValue: '/booking' },
  ],
}
