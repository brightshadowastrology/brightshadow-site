import { Section } from "@/components/Section";
import { cn } from "@/utilities/ui";
import Link from "next/link";

export function QuestionsCTA() {
  return (
    <Section className="w-full bg-[var(--surface-section-alt)]">
      <div
        className={cn(
          "flex flex-col items-center gap-[var(--spacing-md)]",
          "py-[var(--spacing-2xl)] px-[var(--gutter-size)]",
          "max-w-[var(--container-max)] mx-auto w-full text-center",
        )}
      >
        <h2 className="font-[var(--font-header)] text-[color:var(--text-heading)]">
          Questions about your purchase?
        </h2>
        <p className="text-[color:var(--text-muted)] max-w-[480px]">
          {`I'm here to help you choose the right offering for your journey.`}
        </p>
        <Link
          href="/contact"
          className={cn(
            "uppercase text-[length:var(--type-label)]",
            "tracking-[var(--tracking-label)]",
            "text-[color:var(--text-body)]",
            "border-b border-[var(--border-subtle)]",
            "pb-[var(--spacing-2xs)]",
            "hover:text-[color:var(--surface-action)] hover:border-[var(--surface-action)]",
            "transition-colors duration-200",
          )}
        >
          CONTACT US
        </Link>
      </div>
    </Section>
  );
}
