"use client";

export function PriceDisplay({
  price,
  currency = "CAD",
  duration,
}: {
  price: number;
  currency?: string;
  duration?: string;
}) {
  return (
    <div className="flex flex-col gap-[var(--spacing-xs)] items-center w-full">
      <div className="flex gap-1 items-start justify-center w-full">
        <div className="flex flex-col h-7 items-center justify-center w-4">
          <span className="font-header font-normal text-h2 text-[color:var(--primary-500)]">
            $
          </span>
        </div>
        <div className="flex items-end">
          <span className="font-header font-normal text-price leading-none text-[color:var(--primary-600)]">
            {price}
          </span>
          <span className="font-header font-normal text-type-lg leading-none text-[color:var(--primary-500)] mb-1">
            {currency}
          </span>
        </div>
      </div>
      {duration && (
        <p className="font-normal text-[color:var(--primary-500)] text-center">
          {`/ ${duration}`}
        </p>
      )}
    </div>
  );
}
