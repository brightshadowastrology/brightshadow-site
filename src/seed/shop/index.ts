import type { Payload } from "payload";

import { seedShopProducts } from "./shop-products";
import { seedShopFAQs } from "./shop-faqs";

export async function seedShopPage(payload: Payload) {
  console.log("Creating shop page...");
  await payload.create({
    collection: "pages",
    data: {
      title: "Shop",
      slug: "shop",
      hero: {
        type: "none" as const,
      },
      layout: [],
      _status: "published",
    },
  });

  console.log("Seeding shop page shop products block...");
  await seedShopProducts(payload);

  console.log("Seeding shop page FAQs block...");
  await seedShopFAQs(payload);

  console.log("Shop page seeded.");
}
