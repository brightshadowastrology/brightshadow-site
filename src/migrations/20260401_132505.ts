import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_services_page" AS ENUM('home', 'services');
  CREATE TYPE "public"."enum_faq_items_category" AS ENUM('general', 'shop');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar NOT NULL,
  	"body" jsonb NOT NULL,
  	"author" varchar NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "services_deliverables" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"kicker" varchar,
  	"price" numeric,
  	"duration" varchar,
  	"description" jsonb,
  	"page" "enum_services_page" NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "products_stripe_prices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"stripe_price_id" varchar,
  	"label" varchar,
  	"currency" varchar,
  	"unit_amount" numeric,
  	"interval" varchar
  );
  
  CREATE TABLE "products" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"kicker" varchar,
  	"stripe_product_id" varchar,
  	"description" jsonb,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faq_items" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL,
  	"category" "enum_faq_items_category" NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"testimonials_id" integer,
  	"services_id" integer,
  	"products_id" integer,
  	"faq_items_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_title" varchar DEFAULT 'Bright Shadow Astrology',
  	"meta_description" varchar DEFAULT 'Astrology and therapeutic arts practices.',
  	"navbar_cta_label" varchar DEFAULT 'BOOK AN APPOINTMENT',
  	"navbar_cta_href" varchar DEFAULT '/booking',
  	"footer_copyright" varchar DEFAULT '© 2025. Bright Shadow Astrology. All Rights Reserved.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "hero_section" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_before" varchar DEFAULT 'Understand your stars, ',
  	"heading_accent" varchar DEFAULT 'create',
  	"heading_after" varchar DEFAULT ' your future.',
  	"body" varchar DEFAULT 'I use astrology and therapeutic arts practices to help you explore your cosmic design, heal the past, and open new possibilities.',
  	"primary_button_label" varchar DEFAULT 'HOW IT WORKS',
  	"primary_button_href" varchar DEFAULT '#how-it-works',
  	"secondary_button_label" varchar DEFAULT 'BOOK A CONSULTATION',
  	"secondary_button_href" varchar DEFAULT '/booking',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "how_it_works_section_body_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "how_it_works_section" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'How It Works',
  	"heading" varchar DEFAULT 'Bright Shadow Astrology is a space for meaning-making, where astrology, art, and inner work meet.',
  	"button_label" varchar DEFAULT 'WORK WITH ME',
  	"button_href" varchar DEFAULT '/services',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "if_youre_section_conditions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "if_youre_section" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"top_label" varchar DEFAULT 'IF YOU''RE...',
  	"bottom_label" varchar DEFAULT '...YOU''VE COME TO THE RIGHT PLACE',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_about_section_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_about_section" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'About Me',
  	"heading" varchar DEFAULT 'Hi, I''m Singithi!',
  	"button_label" varchar DEFAULT 'Learn More',
  	"button_href" varchar DEFAULT '/about',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_offerings_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "home_offerings_section" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'I Offer',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_page_section_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_page_section" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'About Me',
  	"heading" varchar DEFAULT 'Hi, I''m Singithi!',
  	"button_label" varchar DEFAULT 'WORK WITH ME',
  	"button_href" varchar DEFAULT '/services',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "approach_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "approach_section" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'My Approach',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_page_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_line1" varchar DEFAULT 'Your birthchart is a map.',
  	"cta_line2" varchar DEFAULT 'Creative practice is how you navigate it.',
  	"cta_label" varchar DEFAULT 'BOOK YOUR FIRST CONSULTATION',
  	"cta_href" varchar DEFAULT '/booking',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_page_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_line1" varchar DEFAULT 'Thank you for being here.',
  	"cta_line2" varchar DEFAULT 'I''d love to be part of your journey.',
  	"cta_label" varchar DEFAULT 'BOOK YOUR FIRST CONSULTATION',
  	"cta_href" varchar DEFAULT '/booking',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "services_page_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_line1" varchar DEFAULT 'Clarity, creativity, and a map for what comes next.',
  	"intro_line2" varchar DEFAULT 'Choose your depth.',
  	"cta_line1" varchar DEFAULT 'Thank you for being here.',
  	"cta_line2" varchar DEFAULT 'I''d love to be part of your journey.',
  	"cta_label" varchar DEFAULT 'BOOK YOUR FIRST CONSULTATION',
  	"cta_href" varchar DEFAULT '/booking',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "shop_page_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_line1" varchar DEFAULT 'Want to explore your chart on your own terms?',
  	"intro_line2" varchar DEFAULT 'Each report and workbook is personally created from your birth chart data — no generic content here.',
  	"cta_line1" varchar DEFAULT 'Thank you for being here.',
  	"cta_line2" varchar DEFAULT 'I''d love to be part of your journey.',
  	"cta_label" varchar DEFAULT 'BOOK YOUR FIRST CONSULTATION',
  	"cta_href" varchar DEFAULT '/booking',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "blog_page_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Something is brewing.',
  	"body" varchar DEFAULT 'Essays, reflections, and astrological insights are on their way. Check back soon.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_deliverables" ADD CONSTRAINT "services_deliverables_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_stripe_prices" ADD CONSTRAINT "products_stripe_prices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faq_items_fk" FOREIGN KEY ("faq_items_id") REFERENCES "public"."faq_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_nav_items" ADD CONSTRAINT "site_settings_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_legal_links" ADD CONSTRAINT "site_settings_footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "how_it_works_section_body_paragraphs" ADD CONSTRAINT "how_it_works_section_body_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."how_it_works_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "if_youre_section_conditions" ADD CONSTRAINT "if_youre_section_conditions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."if_youre_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_about_section_paragraphs" ADD CONSTRAINT "home_about_section_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_about_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_offerings_section_items" ADD CONSTRAINT "home_offerings_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_offerings_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_section_paragraphs" ADD CONSTRAINT "about_page_section_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page_section"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "approach_section_cards" ADD CONSTRAINT "approach_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."approach_section"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "services_deliverables_order_idx" ON "services_deliverables" USING btree ("_order");
  CREATE INDEX "services_deliverables_parent_id_idx" ON "services_deliverables" USING btree ("_parent_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "products_stripe_prices_order_idx" ON "products_stripe_prices" USING btree ("_order");
  CREATE INDEX "products_stripe_prices_parent_id_idx" ON "products_stripe_prices" USING btree ("_parent_id");
  CREATE INDEX "products_updated_at_idx" ON "products" USING btree ("updated_at");
  CREATE INDEX "products_created_at_idx" ON "products" USING btree ("created_at");
  CREATE INDEX "faq_items_updated_at_idx" ON "faq_items" USING btree ("updated_at");
  CREATE INDEX "faq_items_created_at_idx" ON "faq_items" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_products_id_idx" ON "payload_locked_documents_rels" USING btree ("products_id");
  CREATE INDEX "payload_locked_documents_rels_faq_items_id_idx" ON "payload_locked_documents_rels" USING btree ("faq_items_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_nav_items_order_idx" ON "site_settings_nav_items" USING btree ("_order");
  CREATE INDEX "site_settings_nav_items_parent_id_idx" ON "site_settings_nav_items" USING btree ("_parent_id");
  CREATE INDEX "site_settings_footer_legal_links_order_idx" ON "site_settings_footer_legal_links" USING btree ("_order");
  CREATE INDEX "site_settings_footer_legal_links_parent_id_idx" ON "site_settings_footer_legal_links" USING btree ("_parent_id");
  CREATE INDEX "how_it_works_section_body_paragraphs_order_idx" ON "how_it_works_section_body_paragraphs" USING btree ("_order");
  CREATE INDEX "how_it_works_section_body_paragraphs_parent_id_idx" ON "how_it_works_section_body_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "if_youre_section_conditions_order_idx" ON "if_youre_section_conditions" USING btree ("_order");
  CREATE INDEX "if_youre_section_conditions_parent_id_idx" ON "if_youre_section_conditions" USING btree ("_parent_id");
  CREATE INDEX "home_about_section_paragraphs_order_idx" ON "home_about_section_paragraphs" USING btree ("_order");
  CREATE INDEX "home_about_section_paragraphs_parent_id_idx" ON "home_about_section_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "home_offerings_section_items_order_idx" ON "home_offerings_section_items" USING btree ("_order");
  CREATE INDEX "home_offerings_section_items_parent_id_idx" ON "home_offerings_section_items" USING btree ("_parent_id");
  CREATE INDEX "about_page_section_paragraphs_order_idx" ON "about_page_section_paragraphs" USING btree ("_order");
  CREATE INDEX "about_page_section_paragraphs_parent_id_idx" ON "about_page_section_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "approach_section_cards_order_idx" ON "approach_section_cards" USING btree ("_order");
  CREATE INDEX "approach_section_cards_parent_id_idx" ON "approach_section_cards" USING btree ("_parent_id");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "services_deliverables" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "products_stripe_prices" CASCADE;
  DROP TABLE "products" CASCADE;
  DROP TABLE "faq_items" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings_nav_items" CASCADE;
  DROP TABLE "site_settings_footer_legal_links" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "hero_section" CASCADE;
  DROP TABLE "how_it_works_section_body_paragraphs" CASCADE;
  DROP TABLE "how_it_works_section" CASCADE;
  DROP TABLE "if_youre_section_conditions" CASCADE;
  DROP TABLE "if_youre_section" CASCADE;
  DROP TABLE "home_about_section_paragraphs" CASCADE;
  DROP TABLE "home_about_section" CASCADE;
  DROP TABLE "home_offerings_section_items" CASCADE;
  DROP TABLE "home_offerings_section" CASCADE;
  DROP TABLE "about_page_section_paragraphs" CASCADE;
  DROP TABLE "about_page_section" CASCADE;
  DROP TABLE "approach_section_cards" CASCADE;
  DROP TABLE "approach_section" CASCADE;
  DROP TABLE "home_page_settings" CASCADE;
  DROP TABLE "about_page_settings" CASCADE;
  DROP TABLE "services_page_settings" CASCADE;
  DROP TABLE "shop_page_settings" CASCADE;
  DROP TABLE "blog_page_settings" CASCADE;
  DROP TYPE "public"."enum_services_page";
  DROP TYPE "public"."enum_faq_items_category";`);
}
