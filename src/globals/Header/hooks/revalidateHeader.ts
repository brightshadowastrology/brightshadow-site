import type { GlobalAfterChangeHook } from "payload";

import { revalidateTag } from "next/cache";

export const revalidateHeader: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating header`);

    try {
      revalidateTag("global_header");
    } catch (_) {
      // revalidateTag requires a Next.js request context; skip when running outside one (e.g. seed scripts)
    }
  }

  return doc;
};
