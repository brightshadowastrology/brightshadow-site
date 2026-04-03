import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/UI/Button";
import SectionLabel from "@/components/UI/SectionLabel";

const headshotImg = "/images/headshot.jpg";

interface ParagraphItem {
  id?: string | null;
  text: string;
}

interface AboutPageSectionData {
  label?: string | null;
  heading?: string | null;
  paragraphs?: ParagraphItem[] | null;
  buttonLabel?: string | null;
  buttonHref?: string | null;
}

interface AboutSectionProps {
  data: AboutPageSectionData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const label = data.label ?? "About Me";
  const heading = data.heading ?? "Hi, I'm Singithi!";
  const paragraphs = data.paragraphs ?? [];
  const buttonLabel = data.buttonLabel ?? "WORK WITH ME";
  const buttonHref = data.buttonHref ?? "/services";

  return (
    <section className="w-full bg-[var(--neutral-200)] flex min-h-[886px]">
      {/* Left — headshot */}
      <div className="relative w-[49%] shrink-0 overflow-hidden rounded-tr-[100px]">
        <Image
          src={headshotImg}
          alt="Singithi — Bright Shadow Studio"
          fill
          unoptimized
          className="object-cover object-top"
        />
      </div>

      {/* Right — content */}
      <div className="flex flex-col flex-1 gap-[var(--spacing-xxl)] pt-[var(--spacing-xl)] pb-[var(--gutter-size)] px-[var(--gutter-size)]">
        <SectionLabel>{label}</SectionLabel>

        <div className="flex flex-col gap-[var(--spacing-xl)]">
          <h2 className="font-normal leading-snug text-[color:var(--text-body)]">
            {heading}
          </h2>

          <div className="font-normal leading-[22px] text-[color:var(--text-body)] space-y-[22px]">
            {paragraphs.map((p) => (
              <p key={p.id ?? p.text}>{p.text}</p>
            ))}
          </div>

          <Button size="large" asChild>
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
