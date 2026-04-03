import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/UI/Button";
import SectionLabel from "@/components/UI/SectionLabel";

// TODO: Replace with permanent local asset
const artImg = "/images/studio.jpg";

interface ParagraphItem {
  id?: string | null;
  text: string;
}

interface HowItWorksData {
  label?: string | null;
  heading?: string | null;
  bodyParagraphs?: ParagraphItem[] | null;
  buttonLabel?: string | null;
  buttonHref?: string | null;
}

interface HowItWorksProps {
  data: HowItWorksData;
}

export default function HowItWorks({ data }: HowItWorksProps) {
  const label = data.label ?? "How It Works";
  const heading =
    data.heading ??
    "Bright Shadow Studio is a space for meaning-making, where astrology, art, and inner work meet.";
  const bodyParagraphs = data.bodyParagraphs ?? [];
  const buttonLabel = data.buttonLabel ?? "WORK WITH ME";
  const buttonHref = data.buttonHref ?? "/services";

  return (
    <section
      id="how-it-works"
      className="w-full h-[105vh] bg-[var(--primary-100)] flex items-stretch"
    >
      {/* Left — content */}
      <div className="flex flex-col justify-between w-1/2 shrink-0 px-[var(--gutter-size)] pb-[var(--gutter-size)] pt-[var(--spacing-xl)]">
        <SectionLabel>{label}</SectionLabel>

        <div className="flex flex-col gap-[var(--spacing-xl)] mt-[var(--spacing-xl)]">
          <h2 className="font-normal leading-[42px] text-[color:var(--text-body)]">
            {heading}
          </h2>

          <div className="font-normal leading-[22px] text-[color:var(--text-body)] space-y-[22px]">
            {bodyParagraphs.map((p) => (
              <p key={p.id ?? p.text}>{p.text}</p>
            ))}
          </div>

          <Button size="large" asChild>
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
        </div>
      </div>

      {/* Right — image */}
      <div className="relative flex-1 w-1/2 overflow-hidden rounded-tl-[100px] min-h-[892px]">
        <Image
          src={artImg}
          alt="Art studio with brushes and supplies"
          fill
          unoptimized
          className="object-cover grayscale"
        />
      </div>
    </section>
  );
}
