import type { GlobalConfig } from 'payload'

export const AboutPageSettings: GlobalConfig = {
  slug: 'about-page-settings',
  fields: [
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
