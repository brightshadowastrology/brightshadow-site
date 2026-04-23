"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/utilities/ui";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={cn("w-full overflow-hidden", className)}>
      <div
        ref={ref}
        className={cn("w-full", "opacity-0", visible && "animate-fade-in")}
      >
        {children}
      </div>
    </section>
  );
}
