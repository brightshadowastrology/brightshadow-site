import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

async function getPayloadClient() {
  return getPayload({ config })
}

export const getSiteSettings = cache(async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'site-settings' })
})
