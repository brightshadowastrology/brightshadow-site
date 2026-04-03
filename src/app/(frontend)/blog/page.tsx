import type { Metadata } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Blog — Bright Shadow Studio",
  description:
    "Musings on astrology, creativity, and self-discovery. Coming soon from Bright Shadow Studio.",
};

export default async function BlogPage() {
  const payload = await getPayload({ config });

  const [blogSettings] = await Promise.all([
    payload.findGlobal({ slug: "blog-page-settings" }),
  ]);

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh] px-[var(--spacing-xl)] bg-[var(--neutral-100)]">
      <SectionLabel className="mb-[var(--spacing-lg)]">Blog</SectionLabel>
      <h1 className="text-[length:var(--h1-font-size)] leading-tight mb-[var(--spacing-lg)] max-w-xl text-[color:var(--neutral-700)]">
        {blogSettings.heading}
      </h1>
      <p className="text-[length:var(--paragraph)] max-w-md text-[color:var(--neutral-700)]">
        {blogSettings.body}
      </p>
    </section>
  );
}
