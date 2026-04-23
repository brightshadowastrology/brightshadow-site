"use client";

import React, { useState } from "react";
import { type Product } from "@/payload-types";
import Image from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/Button";
import { cn } from "@/utilities/ui";
import BirthchartDataForm from "@/components/BirthchartDataForm";
import { useCart } from "@/context/CartContext";
import RichText from "@/components/RichText";

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

type ProductCardProps = {
  product: Product;
  className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const [showForm, setShowForm] = useState(false);
  const { addItem } = useCart();

  if (typeof product === "number") return null;

  const price =
    product.stripePrices[product.stripePrices.length - 1]?.unitAmount ?? 0;

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
        className={cn(
          "w-full",
          "bg-[var(--primary-100)]",
          "rounded-tl-[var(--radius-xl)] rounded-br-[var(--radius-xl)]",
          "overflow-hidden",
        )}
      >
        <Accordion.Item value="item">
          <Accordion.Header className="flex flex-col lg:flex-row items-stretch w-full">
            {product.media && (
              <div className="relative w-full h-48 lg:h-auto lg:w-[20%] shrink-0 self-stretch overflow-hidden">
                <Image
                  src={product.media}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 20vw"
                  alt=""
                />
              </div>
            )}

            <Accordion.Trigger
              className={cn(
                "flex flex-1 items-center justify-between",
                "p-[var(--spacing-lg)] md:px-[var(--spacing-xl)]",
                "min-h-[20vh] md:min-h-[10vh] cursor-pointer text-left",
                "group",
              )}
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-normal text-[color:var(--primary-600)] leading-snug">
                  {product.name}
                </h3>
                {product.kicker && (
                  <p className="text-[color:var(--primary-500)] text-sm leading-snug">
                    {product.kicker}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-[var(--spacing-md)] shrink-0 ml-[var(--spacing-xl)]">
                <div className="flex items-start leading-none">
                  <span className="font-header text-[color:var(--primary-500)] text-[length:var(--type-lg)] mt-1">
                    $
                  </span>
                  <span className="font-header text-[color:var(--primary-600)] text-[length:var(--type-price)] leading-none">
                    {price.toFixed(0)}
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
                "relative overflow-hidden min-h-[50vh]",
                "border-t border-[var(--border-divider)]",
                "flex flex-col justify-between",
                "px-[var(--spacing-xl)] pt-[var(--spacing-xl)] pb-[var(--spacing-2xl)]",
                "flex flex-col gap-[var(--spacing-lg)]",
              )}
            >
              {product.description && (
                <div className="text-[color:var(--text-body)] leading-relaxed">
                  <RichText data={product.description} enableGutter={false} />
                </div>
              )}
              <Button
                size="large"
                onClick={() => {
                  setShowForm(true);
                }}
                className="w-full md:w-[300px]"
              >
                {`Enter My Birth Info`}
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
                    onSubmit={async (data) => {
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
                        ...product,
                        media: product.media ?? undefined,
                        stripePriceId:
                          product.stripePrices[0]?.stripePriceId ?? "",
                        natalData,
                      });

                      setShowForm(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default ProductCard;
