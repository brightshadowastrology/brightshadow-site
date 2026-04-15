import { cn } from "@/utilities/ui";
import React from "react";

interface BannerBlockProps {
  introLine1?: string | null;
  introLine2?: string | null;
  introLineVariant?: "default" | "large" | "small";
  introLineClassName?: string | null;
  introLine2ClassName?: string | null;
}

const BannerBlock: React.FC<BannerBlockProps> = ({
  introLine1,
  introLine2,
  introLineClassName,
  introLine2ClassName,
  introLineVariant = "default",
}) => {
  return (
    <div className="flex flex-col gap-[var(--spacing-md)] pb-[var(--spacing-xl)] items-center text-center w-3/4 mx-auto">
      <h3
        className={cn(
          "italic leading-normal text-[color:var(--primary-600)]",
          introLineClassName,
        )}
      >
        {introLine1}
      </h3>

      {introLineVariant === "large" ? (
        <h2
          className={cn(
            "leading-normal text-[color:var(--primary-600)]",
            introLineClassName,
          )}
        >
          {introLine2}
        </h2>
      ) : introLineVariant === "small" ? (
        <h2
          className={cn(
            "leading-normal text-2xl text-[color:var(--primary-600)]",
            introLineClassName,
          )}
        >
          {introLine2}
        </h2>
      ) : (
        <p
          className={cn(
            "leading-normal text-center text-[color:var(--primary-600)]",
            introLine2ClassName,
          )}
        >
          {introLine2}
        </p>
      )}
    </div>
  );
};

export default BannerBlock;
