import type { Payload } from "payload";

import { seedServicesServices } from "./services-services";
import { seedServicesTestimonials } from "./services-testimonials";
import { seedServicesFAQs } from "./services-faqs";

export async function seedServicesPage(payload: Payload) {
  console.log("Creating services page...");
  await payload.create({
    collection: "pages",
    data: {
      title: "Services",
      slug: "services",
      hero: {
        type: "none" as const,
      },
      layout: [],
      _status: "published",
    },
  });

  console.log("Seeding services page 'Services' block...");
  await seedServicesServices(payload);

  console.log("Seeding services page testimonials block...");
  await seedServicesTestimonials(payload);

  console.log("Seeding services page FAQs block...");
  await seedServicesFAQs(payload);

  console.log("Services page seeded.");
}
