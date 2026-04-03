import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cva, type VariantProps } from "cva";
import { Button } from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import { cn } from "@/shared/lib/css";

const serviceCardVariants = cva({
  base: "flex flex-col items-center h-full [box-shadow:var(--shadow-card)]",
  variants: {
    variant: {
      default:
        "bg-[var(--primary-50)] rounded-tl-[50px] rounded-tr-[50px] rounded-br-[100px] p-[10px]",
      image:
        "bg-[var(--primary-100)] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ServiceCardProps extends VariantProps<typeof serviceCardVariants> {
  title: string;
  price: number;
  currency?: string;
  duration?: string;
  description: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

function PriceDisplay({
  price,
  currency = "CAD",
  duration,
}: {
  price: number;
  currency?: string;
  duration?: string;
}) {
  return (
    <div className="flex flex-col gap-[var(--spacing-xs)] items-center w-full">
      <div className="flex gap-1 items-start justify-center w-full">
        <div className="flex flex-col h-7 items-center justify-center w-4">
          <span className="font-header font-normal text-h2 text-[color:var(--primary-500)]">
            $
          </span>
        </div>
        <div className="flex items-end">
          <span className="font-header font-normal text-price leading-none text-[color:var(--primary-600)]">
            {price}
          </span>
          <span className="font-header font-normal text-type-lg leading-none text-[color:var(--primary-500)] mb-1">
            {currency}
          </span>
        </div>
      </div>
      {duration && (
        <p className="font-normal text-[color:var(--primary-500)] text-center">
          {`/ ${duration}`}
        </p>
      )}
    </div>
  );
}

export default function ServiceCard({
  variant = "default",
  title,
  price,
  currency = "CAD",
  duration,
  description,
  ctaLabel = "YES, PLEASE",
  ctaHref,
  onCtaClick,
  imageSrc,
  imageAlt = "",
  className,
}: ServiceCardProps) {
  const isImage = variant === "image";

  return (
    <div className={cn(serviceCardVariants({ variant }), className)}>
      {isImage && imageSrc && (
        <div className="relative w-full h-[200px] overflow-hidden rounded-tr-[100px] rounded-br-[100px] shrink-0">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      )}

      <div className="flex flex-1 flex-col items-center justify-between w-full overflow-clip pb-[var(--spacing-xxl)] pt-[var(--spacing-xl)] px-[var(--spacing-xxl)]">
        <div className="flex flex-col items-center w-full overflow-clip gap-[var(--spacing-xl)]">
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="font-normal leading-snug text-[color:var(--primary-600)] text-center whitespace-nowrap">
              {title}
            </h3>
            <Divider />
          </div>

          <PriceDisplay price={price} currency={currency} duration={duration} />

          <div className="flex flex-col gap-[var(--spacing-lg)] items-center w-full">
            <Divider />
            <div className="prose font-normal leading-normal text-[color:var(--primary-600)] w-full">
              {description}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[var(--spacing-lg)] items-center mt-[var(--spacing-lg)]">
          <Divider />
          {ctaHref ? (
            <Button asChild size="large" className="w-full">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          ) : (
            <Button size="large" onClick={onCtaClick} className="w-full">
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
