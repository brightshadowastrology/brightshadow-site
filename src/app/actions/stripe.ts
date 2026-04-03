"use server";

import { headers } from "next/headers";
import { type LineItem } from "@/lib/types";
import { stripe } from "@/lib/stripe";

export async function fetchClientSecret(
  customerEmail: string,
  lineItems: LineItem[],
) {
  const origin = (await headers()).get("origin");

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded_page",
    customer_email: customerEmail,
    submit_type: "pay",
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["US", "CA"],
    },
    line_items: lineItems,
    mode: "payment",
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    automatic_tax: { enabled: false },
  });

  return session.client_secret;
}

export async function fetchStripeProducts() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return products.data;
}
