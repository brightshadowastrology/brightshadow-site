import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cva, type VariantProps } from "cva";
import { cn } from "@/utilities/ui";

const cardVariants = cva({
  base: [
    "flex flex-col items-center",
    "bg-[var(--primary-200)]",
    "rounded-tr-[100px] rounded-bl-[50px] rounded-br-[100px]",
    "w-full",
    "transition-[transform,box-shadow] duration-300 ease-out",
  ],
  variants: {
    variant: {
      default: "",
      "with-image": "",
    },
    clickable: {
      true: "hover:-translate-y-2 hover:[box-shadow:var(--shadow-card)] hover:cursor-pointer",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    clickable: false,
  },
});

interface CardProps extends VariantProps<typeof cardVariants> {
  title: string;
  description: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function Card({
  variant = "default",
  title,
  description,
  href,
  imageSrc,
  imageAlt = "",
  className,
}: CardProps) {
  const classes = cn(cardVariants({ variant, clickable: !!href }), className);

  const inner = (
    <>
      {variant === "with-image" && imageSrc && (
        <div className="relative w-full h-[250px] overflow-hidden rounded-tr-[100px] rounded-bl-[50px] rounded-br-[100px] shrink-0">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        </div>
      )}

      <div className="flex flex-col gap-[var(--spacing-sm)] items-center justify-center w-full pt-[var(--spacing-lg)] pb-[var(--spacing-2xl)] px-[var(--spacing-xxl)]">
        <h3 className="font-normal leading-snug text-[color:var(--primary-600)] w-full">
          {title}
        </h3>
        <p className="font-normal leading-normal text-[color:var(--primary-600)] w-full">
          {description}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}
