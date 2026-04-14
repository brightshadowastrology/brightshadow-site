import type { Payload } from "payload";
import { seedTestimonialsCollection } from "../globals/seed-collections";

export async function seedServicesTestimonials(payload: Payload) {
  const created = await seedTestimonialsCollection(payload);

  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "services" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log("Services page not found — skipping testimonials block.");
    return;
  }

  const page = existing.docs[0];
  const currentLayout = Array.isArray(page.layout) ? page.layout : [];

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [
        ...currentLayout,
        {
          blockType: "testimonials" as const,
          testimonials: created,
        },
      ],
    },
  });

  console.log("Services page testimonials block added.");
}
