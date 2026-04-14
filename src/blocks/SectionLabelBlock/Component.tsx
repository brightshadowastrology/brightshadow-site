import React from "react";
import { cn } from "@/utilities/ui";

interface SectionLabelProps {
  title: string;
  variant?: "default" | "dark";
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({
  title,
  variant = "default",
  className,
}) => {
  const isDark = variant === "dark";

  const borderColor = isDark
    ? "border-[var(--neutral-100)]"
    : "border-[var(--border-subtle)]";

  const textColor = isDark
    ? "text-[color:var(--neutral-100)]"
    : "text-[color:var(--text-body)]";

  return (
    <div
      className={cn(
        "w-fit inline-flex items-center justify-center",
        "border-b-[0.5px] border-solid",
        "px-[var(--spacing-md)] py-[var(--spacing-2xs)]",
        borderColor,
        className,
      )}
    >
      <span
        className={cn(
          "font-light uppercase",
          "text-[length:var(--type-label)] leading-normal",
          "text-center tracking-[var(--tracking-label)]",
          "whitespace-nowrap",
          textColor,
        )}
      >
        {title}
      </span>
    </div>
  );
};

export default SectionLabel;
