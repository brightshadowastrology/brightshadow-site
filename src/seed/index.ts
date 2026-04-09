import nextEnv from "@next/env";
nextEnv.loadEnvConfig(process.cwd());

const { getPayload } = await import("payload");
const { default: config } = await import("@payload-config");

import { seedHeader } from "./header";

async function seed() {
  const payload = await getPayload({ config });

  console.log("Seeding header...");
  await seedHeader(payload);

  console.log("All seeds complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
