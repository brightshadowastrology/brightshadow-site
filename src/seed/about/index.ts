import type { Payload } from "payload";

import { seedAboutAbout } from "./about-about";
import { seedAboutApproach } from "./about-offerings";
import { seedAboutCTA } from "./about-cta";

export async function seedAboutPage(payload: Payload) {
  console.log("Creating about page...");
  await payload.create({
    collection: "pages",
    data: {
      title: "About",
      slug: "about",
      hero: {
        type: "none" as const,
      },
      layout: [],
      _status: "published",
    },
  });

  console.log("Seeding about page 'About' block...");
  await seedAboutAbout(payload);

  console.log("Seeding about page 'My Approach' block...");
  await seedAboutApproach(payload);

  console.log("Seeding about page CTA block...");
  await seedAboutCTA(payload);

  console.log("About page seeded.");
}
