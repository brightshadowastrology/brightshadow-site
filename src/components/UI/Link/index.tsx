import { Button, type ButtonProps } from "@/components/UI/Button";
import { cn } from "@/utilities/ui";
import Link from "next/link";
import React from "react";

import type { Page, Post } from "@/payload-types";

type CMSLinkType = {
  appearance?: ButtonProps["variant"] | null;
  children?: React.ReactNode;
  className?: string;
  label?: string | null;
  newTab?: boolean | null;
  reference?: {
    relationTo: "pages" | "posts";
    value: Page | Post | string | number;
  } | null;
  size?: ButtonProps["size"] | null;
  type?: "custom" | "reference" | null;
  url?: string | null;
};

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance,
    children,
    className,
    label,
    newTab,
    reference,
    size = "large",
    url,
  } = props;

  const href =
    type === "reference" &&
    typeof reference?.value === "object" &&
    reference.value.slug
      ? `${reference?.relationTo !== "pages" ? `/${reference?.relationTo}` : ""}/${
          reference.value.slug
        }`
      : url;

  if (!href) return null;

  const newTabProps = newTab
    ? { rel: "noopener noreferrer", target: "_blank" }
    : {};

  return (
    <>
      {appearance ? (
        <Button
          asChild
          className={className}
          variant={appearance ?? undefined}
          size={size ?? undefined}
        >
          <Link
            className={cn(className)}
            href={href || url || ""}
            {...newTabProps}
          >
            {label && label}
            {children && children}
          </Link>
        </Button>
      ) : (
        <Link
          className={cn(
            "uppercase hover:text-[color:var(--surface-action)]",
            className,
          )}
          href={href || url || ""}
          {...newTabProps}
        >
          {label && label}
          {children && children}
        </Link>
      )}
    </>
  );
};
