import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload";

import { revalidatePath } from "next/cache";

import type { Product } from "../../../payload-types";

export const revalidateProduct: CollectionAfterChangeHook<Product> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating products`);
    revalidatePath("/", "layout");
  }

  return doc;
};

export const revalidateProductDelete: CollectionAfterDeleteHook<Product> = ({
  doc,
  req: { context, payload },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating products after delete`);
    revalidatePath("/", "layout");
  }

  return doc;
};
