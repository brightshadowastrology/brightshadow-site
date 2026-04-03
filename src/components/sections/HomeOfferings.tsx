import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";

const imgAstro = "/images/tea.png";
const imgReports = "/images/still_life_with_skull.png";
const imgCoaching = "/images/woman.webp";

const IMAGE_MAP: Record<number, { src: string; alt: string }> = {
  0: { src: imgAstro, alt: "Astrological consultations" },
  1: { src: imgReports, alt: "Reports and Workbooks" },
  2: { src: imgCoaching, alt: "Coaching" },
};

interface OfferingItem {
  id?: string | null;
  title: string;
  description: string;
  href: string;
}

interface HomeOfferingsData {
  label?: string | null;
  items?: OfferingItem[] | null;
}

interface HomeOfferingsProps {
  data: HomeOfferingsData;
}

export default function HomeOfferings({ data }: HomeOfferingsProps) {
  const label = data.label ?? "I Offer";
  const items = data.items ?? [];

  return (
    <section className="w-full bg-[var(--neutral-100)] flex flex-col gap-[var(--spacing-xxl)] items-center justify-center py-[var(--gutter-size)]">
      <SectionLabel>{label}</SectionLabel>

      {/* inline-grid so columns are fit-content (cards keep their natural width) */}
      <div className="w-3/4">
        <div className="inline-grid grid-cols-[repeat(3,fit-content(100%))] gap-x-4 gap-y-[var(--spacing-lg)]">
          {items.map((item, i) => (
            <Card
              key={item.id ?? item.title}
              variant="with-image"
              title={item.title}
              description={item.description}
              imageSrc={IMAGE_MAP[i]?.src ?? imgAstro}
              imageAlt={IMAGE_MAP[i]?.alt ?? item.title}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
