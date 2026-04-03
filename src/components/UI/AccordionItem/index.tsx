"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@/utilities/ui";

export interface AccordionItemProps {
  value: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({
  value,
  title,
  children,
  className,
}: AccordionItemProps) {
  return (
    <Accordion.Item
      value={value}
      className={cn("border-t border-[var(--border-subtle)] w-full", className)}
    >
      <Accordion.Header>
        <Accordion.Trigger
          className={cn(
            "flex items-center justify-between w-full",
            "p-[var(--spacing-lg)]",
            "font-normal font-body",
            "text-h4",
            "text-[color:var(--neutral-700)]",
            "cursor-pointer group",
            "transition-colors duration-200",
            "hover:text-[color:var(--neutral-800)]",
            "[&[data-state=open]]:text-[color:var(--neutral-800)]",
          )}
        >
          <span className="text-left">{title}</span>
          <span
            className="text-h1 leading-none ml-4 transition-transform duration-200 group-data-[state=open]:rotate-45 shrink-0"
            aria-hidden
          >
            +
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        className={cn(
          "overflow-hidden",
          "data-[state=open]:animate-accordion-down",
          "data-[state=closed]:animate-accordion-up",
        )}
      >
        <div
          className={cn(
            "px-[var(--spacing-lg)] pb-[var(--spacing-xl)]",
            "font-normal",
            "text-2xl leading-normal",
            "text-[color:var(--neutral-700)]",
          )}
        >
          {children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export type AccordionRootProps = (
  | Accordion.AccordionSingleProps
  | Accordion.AccordionMultipleProps
) & { className?: string };

export function AccordionRoot({ className, ...props }: AccordionRootProps) {
  return (
    <Accordion.Root
      className={cn("w-full", className)}
      {...(props as Accordion.AccordionSingleProps)}
    />
  );
}

export default AccordionItem;
