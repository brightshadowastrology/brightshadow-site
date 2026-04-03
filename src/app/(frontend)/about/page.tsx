import AboutSection from "@/components/sections/AboutSection";
import ApproachCards from "@/components/sections/ApproachCards";
import CTASection from "@/components/sections/CTASection";
import Testimonials from "@/components/sections/Testimonials";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Metadata } from "next";
import { getPayload } from "payload";

export const metadata: Metadata = {
  title: "About — Bright Shadow Studio",
  description:
    "Meet Singithi — astrologer, artist, and founder of Bright Shadow Studio.",
};

export default async function AboutPage() {
  const payload = await getPayload({ config });

  const [aboutSection, approachSection, aboutPageSettings, testimonialsResult] =
    await Promise.all([
      payload.findGlobal({ slug: "about-page-section" }),
      payload.findGlobal({ slug: "approach-section" }),
      payload.findGlobal({ slug: "about-page-settings" }),
      payload.find({ collection: "testimonials", sort: "order", limit: 10 }),
    ]);

  const testimonials = testimonialsResult.docs.map((t) => ({
    quote: t.quote,
    body: <RichText data={t.body} />,
    author: t.author,
  }));

  return (
    <>
      <AboutSection data={aboutSection} />
      <ApproachCards data={approachSection} />
      <Testimonials testimonials={testimonials} />
      <CTASection
        line1={aboutPageSettings.ctaLine1 ?? undefined}
        line2={aboutPageSettings.ctaLine2 ?? undefined}
        ctaLabel={aboutPageSettings.ctaLabel ?? undefined}
        ctaHref={aboutPageSettings.ctaHref ?? undefined}
      />
    </>
  );
}
