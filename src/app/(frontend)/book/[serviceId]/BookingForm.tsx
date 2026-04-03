"use client";

import { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { useForm } from "react-hook-form";
import { Button } from "@/components/UI/Button";
import Input from "@/components/UI/Form/Input";
import BirthchartDataForm from "@/components/UI/BirthchartDataForm";
import CalendarTimePicker from "@/components/UI/CalendarTimePicker";
import { today, getLocalTimeZone } from "@internationalized/date";
import type { CalendarDate } from "@internationalized/date";
import type { TimeValue } from "react-aria";
import type { PlaceDetails } from "@/components/UI/PlacesAutocomplete";

interface ContactFields {
  name: string;
  email: string;
  notes: string;
}

interface BirthchartFields {
  day: string;
  month: string;
  year: string;
  time: TimeValue | null;
  place: PlaceDetails | null;
}

export type BookingFormData = ContactFields & BirthchartFields;

interface BookingFormProps {
  serviceId: string;
  serviceName: string;
}

export default function BookingForm({
  serviceId,
  serviceName,
}: BookingFormProps) {
  const [bookingDate, setBookingDate] = useState<CalendarDate>(
    today(getLocalTimeZone()),
  );
  const [bookingTime, setBookingTime] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFields>();

  async function onContactSubmit(data: ContactFields) {
    // TODO: wire up to booking/payment provider
    console.log("booking:", {
      serviceId,
      serviceName,
      bookingDate,
      bookingTime,
      ...data,
    });
  }

  return (
    <div className="flex flex-col gap-[var(--spacing-2xl)]">
      {/* Contact details */}
      <section>
        <h3 className="mb-[var(--spacing-lg)]">Your Details</h3>
        <Form.Root onSubmit={handleSubmit(onContactSubmit)}>
          <div className="flex flex-col gap-[var(--spacing-xs)]">
            <Input
              label="Full Name"
              placeholder="Your name"
              required
              error={errors.name?.message}
              {...register("name", { required: "Name is required" })}
            />
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            <Input
              label="Notes (optional)"
              placeholder="Anything you'd like me to know beforehand"
              {...register("notes")}
            />
          </div>
        </Form.Root>
      </section>

      <div className="border-t border-[color:var(--border-divider)]" />

      {/* Birth chart data */}
      <section>
        <h3 className="mb-[var(--spacing-xs)]">Birth Chart Information</h3>
        <p className="text-[color:var(--text-muted)]">
          Required for your reading. All information is kept strictly
          confidential.
        </p>
        <BirthchartDataForm />
      </section>

      <div className="border-t border-[color:var(--border-divider)]" />

      {/* Date & time selection */}
      <section>
        <h3 className="mb-[var(--spacing-lg)]">Select a Date & Time</h3>
        <CalendarTimePicker
          value={bookingDate}
          onChange={setBookingDate}
          selectedTime={bookingTime}
          onTimeChange={setBookingTime}
        />
      </section>

      <Button
        type="submit"
        size="large"
        className="w-full mt-[var(--spacing-xl)]"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting…" : "Continue to Payment"}
      </Button>
    </div>
  );
}
