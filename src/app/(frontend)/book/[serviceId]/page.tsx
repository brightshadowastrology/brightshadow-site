import Divider from "@/components/ui/Divider";
import { getSiteSettings } from "@/lib/payload-queries";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import BookingForm from "./BookingForm";
import { cn } from "@/shared/lib/css";

interface BookingPageProps {
  params: Promise<{ serviceId: string }>;
}

export async function generateMetadata({
  params,
}: BookingPageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "services",
    where: { id: { equals: serviceId } },
    limit: 1,
  });

  const service = result.docs[0];
  if (!service) return { title: "Book — Bright Shadow Studio" };

  return {
    title: `Book ${service.name} — Bright Shadow Studio`,
    description: `Book a ${service.name} session with Singithi at Bright Shadow Studio.`,
  };
}

export default async function BookingPage({ params }: BookingPageProps) {
  const { serviceId } = await params;
  const payload = await getPayload({ config });

  const [result, siteSettings] = await Promise.all([
    payload.find({
      collection: "services",
      where: { id: { equals: serviceId } },
      limit: 1,
    }),
    getSiteSettings(),
  ]);

  const service = result.docs[0];
  if (!service) notFound();

  return (
    <div className="flex flex-col items-center justify-center pb-[var(--gutter-size)] pt-[var(--spacing-xl)] px-[var(--gutter-size)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--spacing-3xl)] items-start">
        {/* Left — service summary */}
        <aside className="flex flex-col gap-[var(--spacing-xl)] sticky top-[var(--spacing-3xl)]">
          <div>
            <p className="text-[color:var(--text-muted)] uppercase tracking-[var(--tracking-label)] text-[length:var(--type-label)] mb-[var(--spacing-xs)]">
              You&rsquo;re booking
            </p>
            <h1>{service.name}</h1>
          </div>

          <Divider />

          <div className="flex gap-[var(--spacing-xl)]">
            {service.price != null && (
              <div>
                <p className="text-[color:var(--text-muted)] uppercase tracking-[var(--tracking-label)] text-[length:var(--type-label)] mb-[var(--spacing-2xs)]">
                  Price
                </p>
                <p className="font-semibold text-[color:var(--text-heading)]">
                  ${service.price} CAD
                </p>
              </div>
            )}
            {service.duration && (
              <div>
                <p className="text-[color:var(--text-muted)] uppercase tracking-[var(--tracking-label)] text-[length:var(--type-label)] mb-[var(--spacing-2xs)]">
                  Duration
                </p>
                <p className="font-semibold text-[color:var(--text-heading)]">
                  {service.duration}
                </p>
              </div>
            )}
          </div>

          {service.description && (
            <div className="prose text-[color:var(--text-body)]">
              <RichText data={service.description} />
            </div>
          )}
        </aside>

        {/* Right — booking form */}
        <section
          className={cn(
            "flex flex-col gap-[var(--spacing-xl)]",
            " sticky top-[var(--spacing-3xl)] mt-[var(--spacing-lg)]",
            "bg-[var(--surface-subtle)]",
            "rounded-[var(--radius-lg)]",
            "[box-shadow:var(--shadow-card)]",
            "p-[var(--spacing-xl)]",
            "overflow-hidden",
          )}
        >
          <h2>Book Your Session</h2>
          <Divider />
          <BookingForm
            serviceId={String(service.id)}
            serviceName={service.name}
          />
        </section>
      </div>
    </div>
  );
}
