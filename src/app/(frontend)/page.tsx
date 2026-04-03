import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HomeOfferings from "@/components/sections/HomeOfferings";
import HowItWorks from "@/components/sections/HowItWorks";
import IfYoure from "@/components/sections/IfYoure";
import HomeAbout from "@/components/sections/HomeAbout";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import { getSiteSettings } from "@/lib/payload-queries";

export default async function Home() {
  const payload = await getPayload({ config });

  const [
    hero,
    homeOfferings,
    howItWorks,
    ifYoure,
    homeAbout,
    homePageSettings,
    testimonialsResult,
  ] = await Promise.all([
    payload.findGlobal({ slug: "hero-section" }),
    payload.findGlobal({ slug: "home-offerings-section" }),
    payload.findGlobal({ slug: "how-it-works-section" }),
    payload.findGlobal({ slug: "if-youre-section" }),
    payload.findGlobal({ slug: "home-about-section" }),
    payload.findGlobal({ slug: "home-page-settings" }),
    payload.find({
      collection: "testimonials",
      sort: "order",
      limit: 10,
    }),
  ]);

  const testimonials = testimonialsResult.docs.map((t) => ({
    quote: t.quote,
    body: <RichText data={t.body} />,
    author: t.author,
  }));

  return (
    <>
      <Hero data={hero} />
      <HomeOfferings data={homeOfferings} />
      <HowItWorks data={howItWorks} />
      <IfYoure data={ifYoure} />
      <HomeAbout data={homeAbout} />
      <Testimonials testimonials={testimonials} />
      <CTASection
        line1={homePageSettings.ctaLine1 ?? undefined}
        line2={homePageSettings.ctaLine2 ?? undefined}
        ctaLabel={homePageSettings.ctaLabel ?? undefined}
        ctaHref={homePageSettings.ctaHref ?? undefined}
      />
    </>
  );
}
