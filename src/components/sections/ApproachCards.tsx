import Card from "@/components/UI/Card";
import SectionLabel from "@/components/UI/SectionLabel";

interface ApproachCard {
  id?: string | null;
  title: string;
  description: string;
}

interface ApproachSectionData {
  label?: string | null;
  cards?: ApproachCard[] | null;
}

interface ApproachCardsProps {
  data: ApproachSectionData;
}

export default function ApproachCards({ data }: ApproachCardsProps) {
  const label = data.label ?? "My Approach";
  const cards = data.cards ?? [];

  return (
    <section className="w-full bg-[var(--primary-100)] flex flex-col gap-[var(--spacing-xl)] items-center justify-center pb-[var(--gutter-size)] pt-[var(--spacing-xxl)] px-[var(--gutter-size)]">
      <SectionLabel>{label}</SectionLabel>

      <div className="grid grid-cols-3 gap-[var(--spacing-lg)] w-[80%]">
        {cards.map((card) => (
          <Card
            key={card.id ?? card.title}
            variant="default"
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
