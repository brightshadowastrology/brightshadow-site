"use client";

import Divider from "@/blocks/DividerBlock/Component";
import { Button } from "@/components/Button";
import Input from "@/components/Form/Input";
import { type LineItem } from "@/lib/types";
import { cn } from "@/utilities/ui";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import StripeCheckout from "./StripeCheckout";

interface EmailFormFields {
  email: string;
}

interface CheckoutFormProps {
  lineItems: LineItem[] | null;
}

export default function CheckoutForm({ lineItems }: CheckoutFormProps) {
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormFields>();

  function onSubmit({ email }: EmailFormFields) {
    setCustomerEmail(email);
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-[var(--spacing-xl)]",
        "bg-[var(--surface-subtle)]",
        "rounded-[var(--radius-lg)]",
        "[box-shadow:var(--shadow-card)]",
        "p-[var(--spacing-xl)]",
        "overflow-hidden",
      )}
    >
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <h3 className="mb-[var(--spacing-lg)]">Customer Details</h3>
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        <div className="w-full flex items-center justify-center">
          <Button
            type="submit"
            className="w-full mt-[var(--spacing-md)] max-w-full"
          >
            {customerEmail ? `Update Payment` : "Continue to Payment"}
          </Button>
        </div>
      </Form.Root>

      {customerEmail !== null && lineItems !== null && (
        <>
          <Divider className="gap-0 p-0" />
          <StripeCheckout
            key={`${customerEmail}:${JSON.stringify(lineItems)}`}
            customerEmail={customerEmail}
            lineItems={lineItems}
          />
        </>
      )}
    </div>
  );
}
