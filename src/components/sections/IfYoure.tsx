interface ConditionItem {
  id?: string | null;
  text: string;
}

interface IfYoureData {
  topLabel?: string | null;
  conditions?: ConditionItem[] | null;
  bottomLabel?: string | null;
}

interface IfYoureProps {
  data: IfYoureData;
}

export default function IfYoure({ data }: IfYoureProps) {
  const topLabel = data.topLabel ?? "IF YOU'RE...";
  const conditions = data.conditions ?? [];
  const bottomLabel = data.bottomLabel ?? "...YOU'VE COME TO THE RIGHT PLACE";

  return (
    <section className="w-full bg-[var(--primary-200)] flex flex-col items-start px-[var(--gutter-size)] py-[var(--spacing-xxl)]">
      <div className="flex flex-col gap-[var(--spacing-xl)] items-start w-full">
        {/* Top label */}
        <p className="font-normal leading-normal text-[color:var(--primary-900)] tracking-[var(--tracking-label)] whitespace-nowrap">
          {topLabel}
        </p>

        {/* Main flowing text */}
        <h3 className="font-normal text-4xl leading-normal text-[color:var(--accent-600)]">
          {conditions.map((condition, i) => (
            <span key={condition.id ?? condition.text}>
              {condition.text}
              {i < conditions.length - 1 && (
                <span className="text-[color:var(--primary-400)]"> / </span>
              )}
            </span>
          ))}
        </h3>

        {/* Bottom right label */}
        <p className="w-full font-normal leading-normal text-[color:var(--primary-900)] tracking-[var(--tracking-label)] text-right">
          {bottomLabel}
        </p>
      </div>
    </section>
  );
}
