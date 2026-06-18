import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { getStripeSession } from "@/app/actions/stripe";
import { PayloadRedirects } from "@/components/PayloadRedirects";
import configPromise from "@payload-config";
import { draftMode } from "next/headers";
import { getPayload, type RequiredDataFromCollectionSlug } from "payload";
import { cache } from "react";

import { RenderBlocks } from "@/blocks/RenderBlocks";
import { RenderHero } from "@/heros/RenderHero";
import { generateMeta } from "@/utilities/generateMeta";
import { getLocale } from "@/utilities/getLocale";
import PageClient from "./page.client";

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const pages = await payload.find({
    collection: "pages",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== "home";
    })
    .map(({ slug }) => {
      return { slug };
    });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
  searchParams: Promise<Record<string, string>>;
};

export default async function Page({
  params: paramsPromise,
  searchParams,
}: Args) {
  const { slug = "home" } = await paramsPromise;
  const resolvedSearchParams = await searchParams;

  const payload = await getPayload({ config: configPromise });

  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug);
  const url = "/" + decodedSlug;
  let page: RequiredDataFromCollectionSlug<"pages"> | null;

  const locale = await getLocale();

  page = await queryPageBySlug({
    slug: decodedSlug,
    locale,
  });

  if (!page) {
    return <PayloadRedirects url={url} />;
  }

  let clearCart = false;

  if (resolvedSearchParams && decodedSlug === "return") {
    const session_id = resolvedSearchParams.session_id;
    if (!session_id) redirect("/");
    const stripeSession = await getStripeSession(session_id);

    const lineItemsText = (stripeSession.lineItems || [])
      .map((item) => {
        const amount = ((item.amount_total ?? 0) / 100).toFixed(2);
        return `- ${item.description} x${item.quantity} (${item.currency?.toUpperCase()} ${amount})`;
      })
      .join("\n");

    const messageBody = `You've just had a purchase\n\nCustomer email: ${stripeSession.customer_email}\n\nItems purchased:\n${lineItemsText}`;

    // Send email
    await payload.sendEmail({
      to: "brightshadowastrology@gmail.com",
      subject: "Report/Workbook Purchase",
      text: messageBody,
    });

    if (stripeSession.status !== "complete") redirect("/");

    clearCart = true;
  }

  const { hero, layout } = page;

  return (
    <article
      className={
        page.slug === "terms-and-conditions" || page.slug === "privacy-policy"
          ? "px-[var(--gutter-size)] pb-[var(--gutter-size)] max-w-[var(--container-max)] flex flex-col mx-auto"
          : ""
      }
    >
      <PageClient clearCart={clearCart} />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout || []} />
    </article>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = "home" } = await paramsPromise;
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug);
  const locale = await getLocale();
  const page = await queryPageBySlug({
    slug: decodedSlug,
    locale,
  });

  return generateMeta({ doc: page });
}

const queryPageBySlug = cache(
  async ({ slug, locale }: { slug: string; locale: "en" | "fr" }) => {
    const { isEnabled: draft } = await draftMode();

    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
      collection: "pages",
      draft,
      limit: 1,
      pagination: false,
      overrideAccess: draft,
      locale,
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    return result.docs?.[0] || null;
  },
);
