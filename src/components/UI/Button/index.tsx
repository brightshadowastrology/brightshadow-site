import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import { cn } from "@/shared/lib/css";

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
      default: "px-[var(--spacing-md)] py-[var(--spacing-xs)]",
      large: "px-[var(--spacing-xl)] py-[var(--spacing-md)]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  variant,
  size,
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </Comp>
  );
}

export { buttonVariants };
export default Button;
