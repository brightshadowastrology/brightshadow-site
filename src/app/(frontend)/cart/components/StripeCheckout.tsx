"use client";

import { type LineItem } from "@/lib/types";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCallback } from "react";

import { fetchClientSecret } from "@/app/actions/stripe";

const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error(
    "Missing environment variable: NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY",
  );
}

const stripePromise = loadStripe(NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

type CheckoutProps = {
  customerEmail: string;
  lineItems: LineItem[];
};

export default function StripeCheckout({
  customerEmail,
  lineItems,
}: CheckoutProps) {
  const getClientSecret = useCallback(async () => {
    if (customerEmail.trim() === "") {
      throw new Error("Customer email is required to proceed with checkout.");
    }
    const secret = await fetchClientSecret(customerEmail, lineItems);
    return secret as string;
  }, [customerEmail, lineItems]);

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret: getClientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
