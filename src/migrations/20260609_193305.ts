import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_hero_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "_pages_v_version_hero_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "header_nav_items_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "header_locales" (
  	"cta_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_nav_items_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_legal_items_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_locales" (
  	"copyright" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages_locales" ADD COLUMN "hero_heading_before" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "hero_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "hero_heading_after" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "hero_body_text" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_heading_before" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_heading_after" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_body_text" varchar;
  ALTER TABLE "pages_hero_links_locales" ADD CONSTRAINT "pages_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links_locales" ADD CONSTRAINT "_pages_v_version_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_locales" ADD CONSTRAINT "header_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_locales" ADD CONSTRAINT "header_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_items_locales" ADD CONSTRAINT "footer_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_items_locales" ADD CONSTRAINT "footer_legal_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_legal_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "pages_hero_links_locales_locale_parent_id_unique" ON "pages_hero_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "_pages_v_version_hero_links_locales_locale_parent_id_unique" ON "_pages_v_version_hero_links_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "header_nav_items_locales_locale_parent_id_unique" ON "header_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "header_locales_locale_parent_id_unique" ON "header_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_nav_items_locales_locale_parent_id_unique" ON "footer_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_legal_items_locales_locale_parent_id_unique" ON "footer_legal_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "pages_hero_links" DROP COLUMN "link_label";
  ALTER TABLE "pages" DROP COLUMN "hero_heading_before";
  ALTER TABLE "pages" DROP COLUMN "hero_heading_accent";
  ALTER TABLE "pages" DROP COLUMN "hero_heading_after";
  ALTER TABLE "pages" DROP COLUMN "hero_body_text";
  ALTER TABLE "_pages_v_version_hero_links" DROP COLUMN "link_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_heading_before";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_heading_accent";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_heading_after";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_body_text";
  ALTER TABLE "header_nav_items" DROP COLUMN "link_label";
  ALTER TABLE "header" DROP COLUMN "cta_label";
  ALTER TABLE "footer_nav_items" DROP COLUMN "link_label";
  ALTER TABLE "footer_legal_items" DROP COLUMN "link_label";
  ALTER TABLE "footer" DROP COLUMN "copyright";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links_locales" CASCADE;
  DROP TABLE "_pages_v_version_hero_links_locales" CASCADE;
  DROP TABLE "header_nav_items_locales" CASCADE;
  DROP TABLE "header_locales" CASCADE;
  DROP TABLE "footer_nav_items_locales" CASCADE;
  DROP TABLE "footer_legal_items_locales" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  ALTER TABLE "pages_hero_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_heading_before" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_heading_accent" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_heading_after" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_body_text" varchar;
  ALTER TABLE "_pages_v_version_hero_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heading_before" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heading_accent" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_heading_after" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_body_text" varchar;
  ALTER TABLE "header_nav_items" ADD COLUMN "link_label" varchar NOT NULL;
  ALTER TABLE "header" ADD COLUMN "cta_label" varchar NOT NULL;
  ALTER TABLE "footer_nav_items" ADD COLUMN "link_label" varchar NOT NULL;
  ALTER TABLE "footer_legal_items" ADD COLUMN "link_label" varchar NOT NULL;
  ALTER TABLE "footer" ADD COLUMN "copyright" varchar;
  ALTER TABLE "pages_locales" DROP COLUMN "hero_heading_before";
  ALTER TABLE "pages_locales" DROP COLUMN "hero_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "hero_heading_after";
  ALTER TABLE "pages_locales" DROP COLUMN "hero_body_text";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_hero_heading_before";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_hero_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_hero_heading_after";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_hero_body_text";`)
}
