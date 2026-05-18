"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/utilities/ui";

interface SectionProps {
  children: ReactNode;
  className?: string;
  fadeIn?: boolean;
}

export function Section({ children, className, fadeIn = true }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setHasBeenVisible(true);
        } else {
          setVisible(false);
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
        className={cn(
          "w-full",
          fadeIn && "opacity-0",
          fadeIn && visible && "animate-fade-in",
          fadeIn && !visible && hasBeenVisible && "animate-fade-out",
        )}
      >
        {children}
      </div>
    </section>
  );
}
