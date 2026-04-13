import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());

const { getPayload } = await import("payload");
const { default: config } = await import("@payload-config");

import { seedHeader } from "./globals/header";
import { seedFooter } from "./globals/footer";
import { seedHomeHero } from "./home/home-hero";
import { seedHomeCTA } from "./home/home-cta";
import { seedHomeHowItWorks } from "./home/home-how-it-works";
import { seedHomeQualifier } from "./home/home-qualifier";
import { seedHomeAbout } from "./home/home-about";
import { seedHomeTestimonials } from "./home/home-testimonials";
import { seedHomeOfferings } from "./home/home-offerings";
import {
  seedFAQItemsCollection,
  seedProductsCollection,
  seedServicesCollection,
  seedTestimonialsCollection,
} from "./globals/seed-collections";
import { seedTermsAndConditions } from "./legal/termsAndConditions";
import { seedPrivacyPolicy } from "./legal/privacyPolicy";

async function seed() {
  const payload = await getPayload({ config });

  // console.log("Removing existing data...");
  // await payload.db.deleteMany({ collection: "faq-items", where: {} });
  // await payload.db.deleteMany({ collection: "products", where: {} });
  // await payload.db.deleteMany({ collection: "services", where: {} });
  // await payload.db.deleteMany({ collection: "testimonials", where: {} });

  // console.log("Deleting all pages...");
  // const existingPages = await payload.find({ collection: "pages", limit: 100 });
  // for (const page of existingPages.docs) {
  //   await payload.delete({ collection: "pages", id: page.id });
  // }
  // console.log(`Deleted ${existingPages.docs.length} page(s).`);

  // console.log(
  //   "Seeding collections. This may take a few moments, please wait... ",
  // );

  // await seedServicesCollection(payload);
  // await seedProductsCollection(payload);
  // await seedFAQItemsCollection(payload);
  //await seedTestimonialsCollection(payload);

  // console.log("Seeding Terms & Conditions page...");
  // await seedTermsAndConditions(payload);

  // console.log("Seeding Privacy Policy page...");
  // await seedPrivacyPolicy(payload);

  //console.log("Seeding header...");
  // await seedHeader(payload);

  //console.log("Seeding footer...");
  //await seedFooter(payload);

  // console.log("Seeding home page hero...");
  // await seedHomeHero(payload);

  //console.log("Seeding home page offerings...");
  //await seedHomeOfferings(payload);

  // console.log("Seeding home page 'How It Works'...");
  // await seedHomeHowItWorks(payload);

  // console.log("Seeding home page qualifier block...");
  // await seedHomeQualifier(payload);

  // console.log("Seeding home page 'About'...");
  // await seedHomeAbout(payload);

  // console.log("Seeding home page testimonials...");
  //await seedHomeTestimonials(payload);

  // console.log("Seeding home page CTA...");
  // await seedHomeCTA(payload);

  console.log("All seeds complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
