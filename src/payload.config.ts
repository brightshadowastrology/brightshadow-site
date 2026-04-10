import { buildConfig } from "payload";
import sharp from "sharp";
import { postgresAdapter } from "@payloadcms/db-postgres";
import path from "path";
import { plugins } from "./plugins";
import { fileURLToPath } from "url";
import { defaultLexical } from "@/fields/defaultLexical";

// Collections
import { Categories } from "./collections/Categories";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Posts } from "./collections/Posts";
import { Testimonials } from "./collections/Testimonials";
import { Services } from "./collections/Services";
import { Products } from "./collections/Products";
import { FAQItems } from "./collections/FAQItems";
import { Users } from "./collections/Users";

// Globals
import { Footer } from "@/globals/Footer/config";
import { Header } from "@/globals/Header/config";

import { getServerSideURL } from "./utilities/getURL";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 375,
          height: 667,
        },
        {
          label: "Tablet",
          name: "tablet",
          width: 768,
          height: 1024,
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [Pages, Posts, Media, Categories, Users, Testimonials, Services, Products, FAQItems],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? "",
      ssl: process.env.DATABASE_URI?.includes("supabase")
        ? { rejectUnauthorized: false }
        : false,
    },
  }),
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  plugins,
  secret: process.env.PAYLOAD_SECRET ?? "",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  graphQL: {
    disable: true,
  },
});
