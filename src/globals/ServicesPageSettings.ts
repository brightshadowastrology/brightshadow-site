import type { GlobalConfig } from 'payload'

export const ServicesPageSettings: GlobalConfig = {
  slug: 'services-page-settings',
  fields: [
    {
      name: 'introLine1',
      type: 'text',
      defaultValue: 'Clarity, creativity, and a map for what comes next.',
    },
    { name: 'introLine2', type: 'text', defaultValue: 'Choose your depth.' },
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
