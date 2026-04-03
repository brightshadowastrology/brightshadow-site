import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";

// Collections
import { Users } from "./collections/Users";
import { Testimonials } from "./collections/Testimonials";
import { Services } from "./collections/Services";
import { Products } from "./collections/Products";
import { FaqItems } from "./collections/FaqItems";

// Globals
import { SiteSettings } from "./globals/SiteSettings";
import { HeroSection } from "./globals/HeroSection";
import { HowItWorksSection } from "./globals/HowItWorksSection";
import { IfYoureSection } from "./globals/IfYoureSection";
import { HomeAboutSection } from "./globals/HomeAboutSection";
import { HomeOfferingsSection } from "./globals/HomeOfferingsSection";
import { AboutPageSection } from "./globals/AboutPageSection";
import { ApproachSection } from "./globals/ApproachSection";
import { HomePageSettings } from "./globals/HomePageSettings";
import { AboutPageSettings } from "./globals/AboutPageSettings";
import { ServicesPageSettings } from "./globals/ServicesPageSettings";
import { ShopPageSettings } from "./globals/ShopPageSettings";
import { BlogPageSettings } from "./globals/BlogPageSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Testimonials, Services, Products, FaqItems],
  globals: [
    SiteSettings,
    HeroSection,
    HowItWorksSection,
    IfYoureSection,
    HomeAboutSection,
    HomeOfferingsSection,
    AboutPageSection,
    ApproachSection,
    HomePageSettings,
    AboutPageSettings,
    ServicesPageSettings,
    ShopPageSettings,
    BlogPageSettings,
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? "",
      ssl: process.env.DATABASE_URI?.includes("supabase")
        ? { rejectUnauthorized: false }
        : false,
    },
  }),
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  graphQL: {
    disable: true,
  },
});
