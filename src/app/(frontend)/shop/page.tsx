import FAQs from "@/components/sections/FAQs";
import StoreOfferings from "@/components/sections/StoreOfferings";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Metadata } from "next";
import { getPayload } from "payload";
export const metadata: Metadata = {
  title: "Store — Bright Shadow Studio",
  description:
    "Personalised astrology reports and workbooks from Bright Shadow Studio.",
};

export default async function StorePage() {
  const payload = await getPayload({ config });

  const [productsResult, faqsResult, shopPageSettings] = await Promise.all([
    payload.find({ collection: "products", sort: "order", limit: 20 }),
    payload.find({
      collection: "faq-items",
      where: { category: { equals: "shop" } },
      sort: "order",
      limit: 20,
    }),
    payload.findGlobal({ slug: "shop-page-settings" }),
  ]);

  const products = productsResult.docs.map((product) => ({
    id: String(product.id),
    name: product.name,
    kicker: product.kicker,
    price:
      product.stripePrices?.[product.stripePrices.length - 1]?.unitAmount ?? 0,
    stripeProductId: product.stripeProductId || "",
    stripePriceId:
      product.stripePrices?.[product.stripePrices.length - 1]?.stripePriceId ??
      "",
    description: <RichText data={product.description} />,
  }));

  const faqs = faqsResult.docs.map((faq, i) => ({
    value: `q${i + 1}`,
    question: faq.question,
    answer: <RichText data={faq.answer} />,
  }));

  return (
    <>
      <StoreOfferings
        products={products}
        introLine1={shopPageSettings.introLine1 ?? undefined}
        introLine2={shopPageSettings.introLine2 ?? undefined}
      />
      <FAQs faqs={faqs} />
    </>
  );
}
