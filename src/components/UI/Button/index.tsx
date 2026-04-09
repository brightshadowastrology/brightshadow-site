import { cn } from "@/utilities/ui";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "cva";
import * as React from "react";

const buttonVariants = cva({
  base: [
    "inline-flex items-center justify-center",
    "font-normal leading-none uppercase",
    "whitespace-nowrap cursor-pointer",
    "transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-[var(--border-action)] focus-visible:outline-offset-2",
  ],
  variants: {
    variant: {
      primary: [
        "max-w-[300px]",
        "bg-[var(--surface-action)] hover:bg-[var(--surface-action-hover)]",
        "text-[color:var(--text-action)] hover:text-[color:var(--text-action-hover)] text-base",
      ],
      secondary: [
        "border border-[var(--border-action)]",
        "bg-transparent hover:bg-[var(--accent-200)]",
        "text-[color:var(--border-action)]",
      ],
    },
    size: {
      default: "px-[var(--spacing-md)] py-[var(--spacing-xs)] h-[3rem]",
      large: "px-[var(--spacing-xl)] py-[var(--spacing-md)] h-[4rem]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});
export interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
