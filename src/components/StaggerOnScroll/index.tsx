"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/utilities/ui";

interface StaggerOnScrollProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerOnScroll({
  children,
  className,
  staggerDelay = 200,
}: StaggerOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];
    items.forEach((el) => {
      el.style.opacity = "0";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        items.forEach((el, i) => {
          setTimeout(() => {
            el.style.opacity = "";
            el.classList.add("animate-fade-in-translate-up");
          }, i * staggerDelay);
        });
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerDelay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
