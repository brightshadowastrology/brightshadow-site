import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateFooter: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating footer`)

    try {
      revalidateTag('global_footer')
    } catch (_) {
      // revalidateTag requires a Next.js request context; skip when running outside one (e.g. seed scripts)
    }
  }

  return doc
}
