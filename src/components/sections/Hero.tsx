import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/UI/Button";

const subtractImg = "/images/subtract.svg";

interface HeroData {
  headingBefore?: string | null;
  headingAccent?: string | null;
  headingAfter?: string | null;
  body?: string | null;
  primaryButtonLabel?: string | null;
  primaryButtonHref?: string | null;
  secondaryButtonLabel?: string | null;
  secondaryButtonHref?: string | null;
}

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const {
    headingBefore = "Understand your stars, ",
    headingAccent = "create",
    headingAfter = " your future.",
    body = "I use astrology and therapeutic arts practices to help you explore your cosmic design, heal the past, and open new possibilities.",
    primaryButtonLabel = "HOW IT WORKS",
    primaryButtonHref = "#how-it-works",
    secondaryButtonLabel = "BOOK A CONSULTATION",
    secondaryButtonHref = "/booking",
  } = data;

  return (
    <section className="relative w-full h-[80vh] bg-[var(--surface-page)] overflow-hidden">
      {/* Bottom beige  */}
      <div
        className="absolute bottom-[-1px] left-0 w-full pointer-events-none"
        aria-hidden
      >
        <Image
          src={subtractImg}
          alt=""
          width={1440}
          height={200}
          unoptimized
          className="block w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-[var(--spacing-lg)] items-start max-w-[50%] pt-[var(--spacing-3xl)] ml-[10%]">
        <h1 className="font-normal text-display leading-normal text-[color:var(--primary-950)] whitespace-pre-wrap">
          {headingBefore}
          <br />
          <span className="text-[color:var(--surface-action)]">
            {headingAccent}
          </span>
          {headingAfter}
        </h1>

        <div className="flex flex-col gap-[var(--spacing-lg)] items-start">
          <p className="font-normal text-2xl leading-normal text-[color:var(--primary-950)] max-w-[75%]">
            {body}
          </p>

          <div className="flex gap-[var(--spacing-md)] items-center">
            <Button variant="secondary" size="large" asChild>
              <Link href={primaryButtonHref ?? "#how-it-works"}>
                {primaryButtonLabel}
              </Link>
            </Button>
            <Button size="large" asChild>
              <Link href={secondaryButtonHref ?? "/booking"}>
                {secondaryButtonLabel}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
