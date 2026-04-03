"use client";

import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/UI/Button";
import Input from "@/components/UI/Form/Input";
import StripeCheckout from "@/components/UI/StripeCheckout";
import { type LineItem } from "@/lib/types";
import { cn } from "@/utilities/ui";
import Divider from "../Divider";

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
