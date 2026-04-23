"use client";

import Dropdown from "@/components/Dropdown";
import { MONTHS } from "@/lib/constants";
import { useForm, Controller } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import InputTimePicker from "@/components/Form/InputTimePicker";
import { Time } from "@internationalized/date";
import { type TimeValue } from "react-aria";
import { Button } from "@/components/Button";
import PlacesAutocomplete, {
  type PlaceDetails,
} from "@/components/PlacesAutocomplete";

type BirthchartFormData = {
  day: string;
  month: string;
  year: string;
  time: TimeValue | null;
  place: PlaceDetails | null;
};

export type BirthchartDefaultValues = {
  day?: string;
  month?: string;
  year?: string;
  time?: TimeValue;
  place?: PlaceDetails;
};

type BirthchartDataFormProps = {
  onSubmit?: (data: BirthchartFormData) => Promise<void>;
  defaultValues?: BirthchartDefaultValues;
  buttonText?: string;
};

const DAY_OPTIONS = Array.from({ length: 31 }, (_, i) => ({
  label: String(i + 1),
  value: String(i + 1),
}));

const currentYear = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: currentYear - 1899 }, (_, i) => ({
  label: String(currentYear - i),
  value: String(currentYear - i),
}));

export default function BirthchartDataForm({
  onSubmit,
  defaultValues,
  buttonText = "Add to Cart",
}: BirthchartDataFormProps): React.ReactNode {
  const today = new Date();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BirthchartFormData>({
    defaultValues: {
      day: defaultValues?.day ?? today.getDate().toString(),
      month: defaultValues?.month ?? MONTHS[today.getMonth()].value,
      year: defaultValues?.year ?? today.getFullYear().toString(),
      time: defaultValues?.time ?? new Time(12, 0),
      place: defaultValues?.place ?? null,
    },
  });

  return (
    <Form.Root
      className="flex w-full flex-col pt-[var(--spacing-lg)]"
      onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
    >
      <div className="flex flex-wrap w-full items-start gap-[var(--spacing-md)]">
        {/* Day */}
        <div className="w-[100px] flex-none">
          <Controller
            name="day"
            control={control}
            rules={{ required: "Day is required" }}
            render={({ field }) => (
              <Dropdown
                label="Day"
                options={DAY_OPTIONS}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.day && (
            <p className="mt-[var(--spacing-2xs)] text-[var(--text-error)] text-sm">
              {errors.day.message}
            </p>
          )}
        </div>

        {/* Month */}
        <div className="flex-1">
          <Controller
            name="month"
            control={control}
            rules={{ required: "Month is required" }}
            render={({ field }) => (
              <Dropdown
                label="Month"
                options={MONTHS.map((m) => ({
                  label: m.label,
                  value: m.value,
                }))}
                placeholder="Select month"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors.month && (
            <p className="mt-[var(--spacing-2xs)] text-[var(--text-error)] text-sm">
              {errors.month.message}
            </p>
          )}
        </div>

        {/* Year */}
        <div className="w-full sm:w-[130px] sm:flex-none">
          <Controller
            name="year"
            control={control}
            rules={{ required: "Year is required" }}
            render={({ field }) => (
              <Dropdown
                label="Year"
                options={YEAR_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                maxHeight="220px"
              />
            )}
          />
          {errors.year && (
            <p className="mt-[var(--spacing-2xs)] text-[var(--text-error)] text-sm">
              {errors.year.message}
            </p>
          )}
        </div>

        {/* Time */}
        <div className="w-full sm:flex-1">
          <Controller
            name="time"
            control={control}
            rules={{ required: "Birth time is required" }}
            render={({ field }) => (
              <InputTimePicker
                name="birthTime"
                label="Birth Time"
                value={field.value}
                onChange={field.onChange}
                isRequired
                error={errors.time?.message}
                hourCycle={12}
              />
            )}
          />
        </div>
      </div>

      {/* Birthplace */}
      <div className="mt-[var(--spacing-xl)]">
        <Controller
          name="place"
          control={control}
          rules={{ required: "Place is required" }}
          render={({ field }) => (
            <PlacesAutocomplete
              name="place"
              label="Birthplace"
              initialValue={defaultValues?.place?.displayName}
              onSelect={(place) => field.onChange(place)}
              error={errors.place?.message}
            />
          )}
        />
      </div>

      {errors.place && (
        <p className="mt-[var(--spacing-2xs)] text-[var(--text-error)] text-sm">
          {errors.place.message}
        </p>
      )}

      {/* Submit Button */}
      {onSubmit && (
        <div className="w-full flex justify-start">
          <Button
            type="submit"
            className="mt-[var(--spacing-xl)] w-full md:w-[300px]"
          >
            {buttonText}
          </Button>
        </div>
      )}
    </Form.Root>
  );
}
