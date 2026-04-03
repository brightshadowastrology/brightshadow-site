import React from "react";
import ServiceCardHorizontal from "@/components/UI/ServiceCardHorizontal";
import SectionLabel from "../UI/SectionLabel";

const productImg = "/images/studio.jpg";

interface ProductItem {
  id: string;
  name: string;
  kicker?: string | null;
  price: number;
  stripeProductId: string;
  stripePriceId: string;
  description: React.ReactNode;
}

interface StoreOfferingsProps {
  products: ProductItem[];
  introLine1?: string | null;
  introLine2?: string | null;
}

export default function StoreOfferings({
  products,
  introLine1 = "Want to explore your chart on your own terms?",
  introLine2,
}: StoreOfferingsProps) {
  return (
    <section className="w-full bg-[var(--primary-50)] flex flex-col gap-[var(--spacing-xxl)] items-center pb-[var(--gutter-size)] pt-[var(--spacing-xl)] px-[var(--gutter-size)]">
      <SectionLabel>Shop</SectionLabel>

      {/* Intro text */}
      <div className="flex flex-col gap-[var(--spacing-xl)] items-center text-center w-3/4">
        <h2 className="italic leading-normal text-[color:var(--primary-600)]">
          {introLine1}
        </h2>
        {introLine2 && (
          <p className="font-normal leading-normal text-center text-[color:var(--primary-600)]">
            {introLine2}
          </p>
        )}
      </div>

      {/* Horizontal service cards stacked */}
      <div className="flex flex-col gap-4 w-[90%] max-w-[90vw]">
        {products.map((item) => (
          <ServiceCardHorizontal
            key={item.id}
            id={item.id}
            title={item.name}
            kicker={item.kicker ?? undefined}
            price={item.price}
            stripeProductId={item.stripeProductId}
            stripePriceId={item.stripePriceId}
            imageSrc={productImg}
            imageAlt={item.name}
            description={item.description}
            ctaLabel="ADD TO CART"
          />
        ))}
      </div>
    </section>
  );
}
