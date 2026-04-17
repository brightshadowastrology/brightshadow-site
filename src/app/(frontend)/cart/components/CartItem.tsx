"use client";

import React, { useState } from "react";
import { Media } from "@/components/Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faMinus,
  faPlus,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import {
  CartItem as CartItemType,
  NatalData,
  useCart,
} from "@/context/CartContext";
import { cn } from "@/utilities/ui";
import { Modal } from "@/components/Modal";
import BirthchartDataForm from "@/components/BirthchartDataForm";
import { Time } from "@internationalized/date";
import { MONTHS } from "@/lib/constants";

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  }).format(amount);
}

function parseNatalDataToFormDefaults(natalData: NatalData) {
  const [day, monthName, year] = natalData.date.split(" ");
  const month = MONTHS.find((m) => m.label === monthName)?.value ?? "01";

  const [timePart, ampm] = natalData.time.split(" ");
  const [hStr, mStr] = timePart.split(":");
  let hour = parseInt(hStr, 10);
  const minute = parseInt(mStr, 10);
  if (ampm === "PM" && hour !== 12) hour += 12;
  if (ampm === "AM" && hour === 12) hour = 0;

  const place = {
    placeId: "",
    formattedAddress: natalData.location,
    displayName: natalData.location,
    location: null,
    timeZone: null,
    utcOffsetMinutes: null,
    addressComponents: [],
  };

  return { day, month, year, time: new Time(hour, minute), place };
}

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  className?: string;
}

export function CartItem({
  item,
  onRemove,
  onIncrement,
  onDecrement,
  className,
}: CartItemProps) {
  const { updateNatalData } = useCart();
  const [editOpen, setEditOpen] = useState(false);

  const formDefaults = item.natalData
    ? parseNatalDataToFormDefaults(item.natalData)
    : undefined;

  const price = item.stripePrices
    ? item.stripePrices[item.stripePrices?.length - 1]?.unitAmount
    : 0;

  return (
    <>
      <div
        className={cn(
          "relative flex flex-col md:flex-row gap-[var(--spacing-md)]",
          "bg-[var(--surface-subtle)]",
          "rounded-[var(--radius-lg)]",
          "[box-shadow:var(--shadow-card)]",
          "px-[var(--spacing-md)] py-[var(--spacing-xl)]",
          "overflow-hidden",
          className,
        )}
      >
        {/* Remove button */}
        <button
          onClick={() => onRemove(item.id)}
          aria-label="Remove item"
          className={cn(
            "absolute top-[var(--spacing-md)] right-[var(--spacing-md)]",
            "w-7 h-7 flex items-center justify-center",
            "text-[color:var(--text-muted)] hover:text-[color:var(--text-heading)]",
            "transition-colors duration-200",
          )}
        >
          <FontAwesomeIcon icon={faXmark} className="text-base" />
        </button>

        {/* Image */}
        {item.media ? (
          <div className="relative w-[160px] h-[160px] shrink-0 rounded-[var(--radius-md)] overflow-hidden">
            <Media
              fill
              resource={item.media}
              imgClassName={cn("object-cover")}
            />
          </div>
        ) : (
          <div
            className={cn(
              "w-[160px] h-[160px] shrink-0",
              "rounded-[var(--radius-md)]",
              "bg-[var(--surface-section)]",
            )}
          />
        )}

        {/* Body */}
        <div className="flex flex-col gap-[var(--spacing-xs)] flex-1 pr-[var(--spacing-xl)]">
          <span
            className={cn(
              "uppercase text-[length:var(--type-label)]",
              "text-[color:var(--text-muted)]",
              "tracking-[var(--tracking-label)]",
              "font-[var(--font-body)]",
            )}
          >
            {"PDF Report"}
          </span>

          <h3 className="font-[var(--font-header)] text-[color:var(--text-heading)] leading-snug">
            {item.name}
          </h3>

          {item.natalData && (
            <div
              className={cn(
                "mt-[var(--spacing-xs)] pt-[var(--spacing-xs)]",
                "border-t border-[var(--border-divider)]",
                "flex flex-col gap-[var(--spacing-2xs)]",
              )}
            >
              <div className="pl-[var(--spacing-xs)]">
                {item.kicker && <p>{item.kicker}</p>}

                <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-end mt-4 mb-4">
                  <div>
                    <p className={"bold text-[color:var(--text-muted)]"}>
                      Natal Data:{" "}
                    </p>
                    {item.natalData.date}, {item.natalData.time} @{" "}
                    {item.natalData.location}
                  </div>

                  <button
                    onClick={() => setEditOpen(true)}
                    aria-label="Edit birth data"
                    className={cn(
                      "pt-2 md:pt-0",
                      "flex items-center gap-[var(--spacing-2xs)]",
                      "text-[length:var(--type-label)] uppercase tracking-[var(--tracking-label)]",
                      "text-[color:var(--text-muted)] hover:text-[color:var(--surface-action)]",
                      "transition-colors duration-200",
                    )}
                  >
                    <FontAwesomeIcon icon={faPencil} className="text-xs" />
                    Edit
                  </button>
                </div>

                {/* Qty + price row */}
                <div className="flex items-center gap-[var(--spacing-md)] mt-auto pt-[var(--spacing-xs)]">
                  {/* Qty controls */}
                  <div
                    className={cn(
                      "flex items-center gap-[var(--spacing-xs)]",
                      "border border-[var(--border-divider)]",
                      "rounded-[var(--radius-md)]",
                      "px-[var(--spacing-xs)] py-[var(--spacing-2xs)]",
                    )}
                  >
                    <button
                      onClick={() => onDecrement(item.id)}
                      aria-label="Decrease quantity"
                      className={cn(
                        "w-6 h-6 flex items-center justify-center",
                        "text-[color:var(--text-muted)] hover:text-[color:var(--text-heading)]",
                        "transition-colors duration-200",
                      )}
                    >
                      <FontAwesomeIcon icon={faMinus} className="text-xs" />
                    </button>

                    <span className="min-w-[20px] text-center text-[color:var(--text-heading)] font-semibold text-[length:var(--type-small)]">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => onIncrement(item.id)}
                      aria-label="Increase quantity"
                      className={cn(
                        "w-6 h-6 flex items-center justify-center",
                        "text-[color:var(--text-muted)] hover:text-[color:var(--text-heading)]",
                        "transition-colors duration-200",
                      )}
                    >
                      <FontAwesomeIcon icon={faPlus} className="text-xs" />
                    </button>
                  </div>

                  {/* Price */}
                  <span
                    className={cn(
                      "text-[color:var(--surface-action)]",
                      "text-[length:var(--type-lg)] font-semibold",
                    )}
                  >
                    {formatCurrency(price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {item.natalData && (
        <Modal
          open={editOpen}
          onOpenChange={setEditOpen}
          title="Edit Birth Information"
          className="px-[var(--spacing-xl)] py-[var(--spacing-lg)]"
        >
          <BirthchartDataForm
            defaultValues={formDefaults}
            onSubmit={async (data) => {
              const month =
                MONTHS.find((m) => m.value === data.month)?.label ?? data.month;
              const hour = data.time?.hour ?? 0;
              const minute = data.time?.minute ?? 0;
              const hour12 = hour % 12 === 0 ? 12 : hour % 12;
              const ampm = hour < 12 ? "AM" : "PM";
              const natalData: NatalData = {
                date: `${data.day} ${month} ${data.year}`,
                time: data.time
                  ? `${hour12}:${String(minute).padStart(2, "0")} ${ampm}`
                  : "",
                location: data.place?.displayName ?? "",
              };
              updateNatalData(item.id, natalData);
              setEditOpen(false);
            }}
          />
        </Modal>
      )}
    </>
  );
}
