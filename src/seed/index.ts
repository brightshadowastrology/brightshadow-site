import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());

const { getPayload } = await import("payload");
const { default: config } = await import("@payload-config");

import { seedHeader } from "./header";
import { seedFooter } from "./footer";
import { seedHomeHero } from "./home-hero";
import { seedHomeCTA } from "./home-cta";

async function seed() {
  const payload = await getPayload({ config });

  console.log("Deleting all pages...");
  const existingPages = await payload.find({ collection: "pages", limit: 100 });
  for (const page of existingPages.docs) {
    await payload.delete({ collection: "pages", id: page.id });
  }
  console.log(`Deleted ${existingPages.docs.length} page(s).`);

  //console.log("Seeding header...");
  // await seedHeader(payload);

  //console.log("Seeding footer...");
  //await seedFooter(payload);

  console.log("Seeding home page hero...");
  await seedHomeHero(payload);

  // console.log("Seeding home page CTA...");
  await seedHomeCTA(payload);

  console.log("All seeds complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
