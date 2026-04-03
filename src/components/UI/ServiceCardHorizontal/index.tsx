"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/shared/lib/css";
import BirthchartDataForm from "@/components/ui/BirthchartDataForm";
import { useCart } from "@/context/CartContext";

const MONTH_LABELS: Record<string, string> = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

interface ServiceCardHorizontalProps {
  id?: string;
  title: string;
  kicker?: string;
  price: number;
  stripeProductId: string;
  stripePriceId: string;
  description?: React.ReactNode;
  features?: React.ReactNode;
  ctaLabel?: string;
  onCtaClick?: () => void;
  onFormSubmit?: React.ComponentProps<typeof BirthchartDataForm>["onSubmit"];
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  defaultOpen?: boolean;
}

export default function ServiceCardHorizontal({
  id,
  title,
  kicker,
  price,
  stripeProductId,
  stripePriceId,
  description,
  features,
  ctaLabel = "ADD TO CART",
  onCtaClick,
  onFormSubmit,
  imageSrc,
  imageAlt = "",
  className,
  defaultOpen = false,
}: ServiceCardHorizontalProps) {
  const [showForm, setShowForm] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className={cn(
        "w-full",
        "rounded-tl-[var(--radius-2xl)] rounded-br-[var(--radius-2xl)]",
        "[box-shadow:var(--shadow-card)]",
        className,
      )}
    >
      <Accordion.Root
        type="single"
        collapsible
        defaultValue={defaultOpen ? "item" : undefined}
        className={cn(
          "w-full",
          "bg-[var(--primary-100)]",
          "rounded-tl-[var(--radius-xl)] rounded-br-[var(--radius-xl)]",
          "overflow-hidden",
        )}
      >
        <Accordion.Item value="item">
          <Accordion.Header className="flex items-stretch">
            {imageSrc && (
              <div className="relative w-[195px] shrink-0 self-stretch overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <Accordion.Trigger
              className={cn(
                "flex flex-1 items-center justify-between",
                "px-[var(--spacing-xl)]",
                "min-h-[195px] cursor-pointer text-left",
                "group",
              )}
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-normal text-[color:var(--primary-600)] leading-snug">
                  {title}
                </h3>
                {kicker && (
                  <p className="text-[color:var(--primary-500)] text-sm leading-snug">
                    {kicker}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-[var(--spacing-md)] shrink-0 ml-[var(--spacing-xl)]">
                <div className="flex items-start leading-none">
                  <span className="font-header text-[color:var(--primary-500)] text-[length:var(--type-lg)] mt-1">
                    $
                  </span>
                  <span className="font-header text-[color:var(--primary-600)] text-[length:var(--type-price)] leading-none">
                    {price}
                  </span>
                </div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={cn(
                    "text-[color:var(--accent-500)] text-lg",
                    "transition-transform duration-300",
                    "group-data-[state=open]:rotate-180",
                  )}
                />
              </div>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content
            className={cn(
              "prose overflow-hidden",
              "data-[state=open]:[animation:accordion-down_250ms_ease-out]",
              "data-[state=closed]:[animation:accordion-up_250ms_ease-out]",
            )}
          >
            <div
              className={cn(
                "relative overflow-hidden h-[50vh]",
                "border-t border-[var(--border-divider)]",
                "flex flex-col justify-between",
                "px-[var(--spacing-xl)] pt-[var(--spacing-xl)] pb-[var(--spacing-2xl)]",
                "flex flex-col gap-[var(--spacing-lg)]",
              )}
            >
              {description && (
                <div className="text-[color:var(--text-body)] leading-relaxed">
                  {description}
                </div>
              )}
              {features && (
                <div className="italic text-[color:var(--text-body)] leading-relaxed">
                  {features}
                </div>
              )}
              <Button
                size="large"
                onClick={() => {
                  onCtaClick?.();
                  setShowForm(true);
                }}
              >
                {ctaLabel}
              </Button>

              {/* Slide-up form panel — covers only the Accordion.Content area */}
              <div
                className={cn(
                  "absolute inset-0 flex flex-col",
                  "bg-[var(--primary-100)]",
                  "transition-transform duration-500 ease-in-out",
                  showForm ? "translate-y-0" : "translate-y-full",
                )}
              >
                {/* Form panel header */}
                <div
                  className={cn(
                    "flex items-start justify-between shrink-0",
                    "px-[var(--spacing-xl)]",
                    "border-b border-[var(--border-divider)]",
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="font-normal text-[color:var(--primary-600)] leading-snug">
                      Enter Birth Information
                    </h3>
                    <p className="text-[color:var(--primary-500)] text-sm leading-snug">
                      {title}
                    </p>
                  </div>
                  <button
                    aria-label="Close form"
                    onClick={() => setShowForm(false)}
                    className="text-[color:var(--primary-500)] hover:text-[color:var(--primary-600)] transition-colors mt-4"
                  >
                    <FontAwesomeIcon icon={faXmark} className="text-lg" />
                  </button>
                </div>

                {/* Scrollable form body */}
                <div className="flex-1 overflow-y-auto bg-white px-[var(--spacing-xl)]">
                  <BirthchartDataForm
                    onSubmit={
                      onFormSubmit ??
                      (async (data) => {
                        if (id) {
                          const hour = data.time?.hour ?? 0;
                          const minute = data.time?.minute ?? 0;
                          const hour12 = hour % 12 === 0 ? 12 : hour % 12;
                          const ampm = hour < 12 ? "AM" : "PM";
                          const natalData = {
                            date: `${data.day} ${MONTH_LABELS[data.month] ?? data.month} ${data.year}`,
                            time: data.time
                              ? `${hour12}:${String(minute).padStart(2, "0")} ${ampm}`
                              : "",
                            location: data.place?.displayName ?? "",
                          };
                          addItem({
                            id,
                            name: title,
                            kicker,
                            price,
                            imageSrc,
                            natalData,
                            stripeProductId,
                            stripePriceId,
                          });
                        }
                        setShowForm(false);
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
