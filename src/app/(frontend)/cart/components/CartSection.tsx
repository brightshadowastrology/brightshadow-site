"use client";

import { Button } from "@/components/Button";
import { CartItem } from "@/components/CartItem";
import CheckoutForm from "@/components/CheckoutForm";
import { useCart } from "@/context/CartContext";
import { type LineItem } from "@/lib/types";
import { cn } from "@/utilities/ui";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CartSection() {
  const { items, removeItem, increment, decrement } = useCart();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  const cartItems = hasMounted ? items : [];

  const lineItems: LineItem[] = cartItems.map((item) => ({
    price: item.stripePriceId,
    quantity: item.quantity,
  }));

  return (
    <section className="flex flex-col items-start justify-start min-h-[125vh]">
      {/* Page header */}
      <div
        className={cn(
          "px-[var(--gutter-size)] pt-[var(--spacing-3xl)] pb-[var(--spacing-lg)]",
          "max-w-[var(--container-max)] mx-auto w-full",
        )}
      >
        <h1 className="font-[var(--font-header)] text-[color:var(--text-heading)]">
          Your Cart
        </h1>
        <p className="mt-[var(--spacing-2xs)] text-[color:var(--text-muted)]">
          {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
          cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        /* Empty state */
        <div
          className={cn(
            "flex flex-col items-center gap-[var(--spacing-lg)]",
            "px-[var(--gutter-size)] py-[var(--spacing-3xl)]",
            "max-w-[var(--container-max)] mx-auto w-full",
            "text-center",
          )}
        >
          <p className="text-[color:var(--text-muted)] text-[length:var(--type-lg)]">
            Your cart is empty.
          </p>
          <Button asChild variant="secondary" size="large">
            <Link href="/shop">CONTINUE SHOPPING</Link>
          </Button>
        </div>
      ) : (
        /* Cart grid */
        <div
          className={cn(
            "grid grid-cols-[40vw_1fr] gap-[var(--spacing-xl)]",
            "px-[var(--gutter-size)] pb-[var(--spacing-3xl)]",
            "max-w-[var(--container-max)] mx-auto w-full",
          )}
        >
          {/* ── Left: item list ── */}
          <div className="sticky top-[var(--spacing-xl)] self-start flex flex-col gap-[var(--spacing-md)]">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onIncrement={increment}
                onDecrement={decrement}
              />
            ))}
          </div>

          {/* ── Right: Order Summary ── */}
          <div>
            <CheckoutForm lineItems={lineItems} />
          </div>
        </div>
      )}
    </section>
  );
}
