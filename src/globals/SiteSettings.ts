import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    { name: 'siteTitle', type: 'text', defaultValue: 'Bright Shadow Studio' },
    {
      name: 'metaDescription',
      type: 'textarea',
      defaultValue: 'Astrology and therapeutic arts practices.',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    { name: 'navbarCtaLabel', type: 'text', defaultValue: 'BOOK AN APPOINTMENT' },
    { name: 'navbarCtaHref', type: 'text', defaultValue: '/booking' },
    {
      name: 'footerLegalLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
    {
      name: 'footerCopyright',
      type: 'text',
      defaultValue: '© 2025. Bright Shadow Studio. All Rights Reserved.',
    },
  ],
}
