import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/UI/Button";
import SectionLabel from "@/components/UI/SectionLabel";

const headshotImg = "/images/headshot.jpg";

interface ParagraphItem {
  id?: string | null;
  text: string;
}

interface HomeAboutData {
  label?: string | null;
  heading?: string | null;
  paragraphs?: ParagraphItem[] | null;
  buttonLabel?: string | null;
  buttonHref?: string | null;
}

interface HomeAboutProps {
  data: HomeAboutData;
}

export default function HomeAbout({ data }: HomeAboutProps) {
  const label = data.label ?? "About Me";
  const heading = data.heading ?? "Hi, I'm Singithi!";
  const paragraphs = data.paragraphs ?? [];
  const buttonLabel = data.buttonLabel ?? "Learn More";
  const buttonHref = data.buttonHref ?? "/about";

  return (
    <section className="w-full bg-[var(--neutral-200)] flex h-[105vh]">
      {/* Left — headshot */}
      <div className="relative w-1/2 shrink-0 overflow-hidden rounded-tr-[100px]">
        <Image
          src={headshotImg}
          alt="Singithi — Bright Shadow Studio"
          fill
          unoptimized
          className="object-cover object-top"
        />
      </div>

      {/* Right — content */}
      <div className="flex flex-col justify-center items-center w-1/2 pt-[var(--spacing-xl)] pb-[var(--gutter-size)]">
        <div className="flex w-2/3 flex-col gap-[var(--spacing-xxl)] h-full justify-between">
          <SectionLabel>{label}</SectionLabel>

          <div className="flex flex-col gap-[var(--spacing-xl)]">
            <h2 className="font-normal leading-snug text-[color:var(--text-body)]">
              {heading}
            </h2>

            <div className="font-normal leading-normal text-[color:var(--text-body)] space-y-[22px]">
              {paragraphs.map((p) => (
                <p key={p.id ?? p.text}>{p.text}</p>
              ))}
            </div>

            <Button size="large" asChild>
              <Link href={buttonHref}>{buttonLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
