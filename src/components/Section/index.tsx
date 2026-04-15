import { ReactNode } from "react";
import { cn } from "@/utilities/ui";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        "w-full overflow-hidden px-[var(--gutter-size)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
