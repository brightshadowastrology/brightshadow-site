import Divider from "@/components/Divider";
import { CMSLink } from "@/components/Link";
import { Media } from "@/components/Media";
import RichText from "@/components/RichText";
import type { ServiceCardBlock as ServiceCardBlockProps } from "@/payload-types";
import { cn } from "@/utilities/ui";
import { cva, type VariantProps } from "cva";

const serviceCardVariants = cva({
  base: "flex flex-col items-center h-full [box-shadow:var(--shadow-card)]",
  variants: {
    variant: {
      default:
        "bg-[var(--primary-50)] rounded-tl-[50px] rounded-tr-[50px] rounded-br-[100px] p-[10px]",
      image:
        "bg-[var(--primary-100)] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ServiceCardProps
  extends VariantProps<typeof serviceCardVariants>, ServiceCardBlockProps {}

function PriceDisplay({
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

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  currency,
  duration,
  description,
  link,
  media,
  className,
}) => {
  const isImage = !!media;
  const variant = isImage ? "image" : "default";

  return (
    <div className={cn(serviceCardVariants({ variant }), className)}>
      {isImage && media && (
        <div className="relative w-full h-[200px] overflow-hidden rounded-tr-[100px] rounded-br-[100px] shrink-0">
          <Media
            resource={media}
            fill
            imgClassName="object-cover"
            htmlElement={null}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col items-center justify-between w-full overflow-clip pb-[var(--spacing-xxl)] pt-[var(--spacing-xl)] px-[var(--spacing-xl)]">
        <div className="flex flex-col items-center w-full overflow-clip gap-[var(--spacing-xl)]">
          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="font-normal leading-snug text-[color:var(--primary-600)] text-center whitespace-nowrap">
              {title}
            </h3>
            <Divider />
          </div>

          <PriceDisplay
            price={price}
            currency={currency || "CAD"}
            duration={duration || "month"}
          />

          <div className="flex flex-col gap-[var(--spacing-lg)] items-center w-full">
            <Divider />
            <RichText data={description} enableGutter={false} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-[var(--spacing-lg)] items-center mt-[var(--spacing-lg)]">
          <Divider />
          {link && <CMSLink className="w-full" size="large" {...link} />}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
