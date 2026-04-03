import React from "react";
import { cn } from "@/shared/lib/css";

interface CarouselIndicatorProps {
  count?: number;
  activeIndex?: number;
  onDotClick?: (index: number) => void;
  className?: string;
}

export default function CarouselIndicator({
  count = 5,
  activeIndex = 0,
  onDotClick,
  className,
}: CarouselIndicatorProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-[var(--spacing-xs)]",
        className,
      )}
      role="tablist"
      aria-label="Carousel navigation"
    >
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={i}
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => onDotClick?.(i)}
            className={cn(
              "w-[19px] h-[19px] rounded-full",
              "transition-colors duration-200",
              "focus-visible:outline-2 focus-visible:outline-[var(--border-action)] focus-visible:outline-offset-2",
              isActive ? "bg-[var(--surface-action)]" : "bg-[var(--accent-100)]",
              onDotClick ? "cursor-pointer" : "cursor-default",
            )}
          />
        );
      })}
    </div>
  );
}
