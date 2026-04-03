import type { GlobalConfig } from 'payload'

export const HomePageSettings: GlobalConfig = {
  slug: 'home-page-settings',
  fields: [
    {
      name: 'ctaLine1',
      type: 'text',
      defaultValue: 'Your birthchart is a map.',
    },
    {
      name: 'ctaLine2',
      type: 'text',
      defaultValue: 'Creative practice is how you navigate it.',
    },
    { name: 'ctaLabel', type: 'text', defaultValue: 'BOOK YOUR FIRST CONSULTATION' },
    { name: 'ctaHref', type: 'text', defaultValue: '/booking' },
  ],
}
