import Link from "next/link";
import { Button } from "@/components/UI/Button";

interface CTASectionProps {
  line1?: string;
  line2?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTASection({
  line1 = "Thank you for being here.",
  line2 = "I'd love to be part of your journey.",
  ctaLabel = "BOOK YOUR FIRST CONSULTATION",
  ctaHref = "/booking",
}: CTASectionProps) {
  return (
    <section className="w-full bg-[var(--neutral-200)] flex flex-col gap-[var(--spacing-xxl)] items-center justify-center py-[var(--gutter-size)]">
      <div className="flex flex-col gap-[var(--spacing-sm)] items-center text-center">
        <h2 className="font-normal leading-normal whitespace-nowrap text-4xl text-[color:var(--primary-600)]">
          {line1}
        </h2>
        <h2 className="font-normal leading-normal whitespace-nowrap text-5xl italic text-[color:var(--primary-600)]">
          {line2}
        </h2>
      </div>

      <Button size="large" asChild>
        <Link href={ctaHref}>{ctaLabel}</Link>
      </Button>
    </section>
  );
}
