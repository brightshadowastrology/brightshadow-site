import { cn } from "@/shared/lib/css";
import { useEffect, useState } from "react";
import { type TimeValue } from "react-aria";
import {
  TimeField as AriaTimeField,
  DateInput,
  DateSegment,
  FieldError,
  TimeFieldProps as AriaTimeFieldProps,
} from "react-aria-components";
import { type TimeFieldStateOptions } from "react-stately";

type InputTimePickerProps<T extends TimeValue = TimeValue> =
  AriaTimeFieldProps<T> &
    Omit<TimeFieldStateOptions, "locale"> & {
      name: string;
      containerClassName?: string;
      className?: string;
      required?: boolean;
      label?: React.ReactNode;
      error?: React.ReactNode;
      locale?: string;
      date?: Date;
    };

export default function InputTimePicker({
  label,
  error,
  containerClassName,
  className,
  ...props
}: InputTimePickerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col gap-[var(--spacing-xs)]",
        containerClassName,
      )}
    >
      {label && (
        <label className="block font-body text-label uppercase tracking-[var(--tracking-label)] text-[var(--text-label)]">
          {label}
          {props.isRequired && (
            <span className="text-[var(--text-error)]">*</span>
          )}
        </label>
      )}

      {mounted ? (
        <AriaTimeField {...props}>
          <DateInput
            className={cn(
              "flex w-full rounded-[var(--radius-lg)] border border-[var(--border-divider)] font-body text-body text-[var(--text-body)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] bg-white",
              "focus-within:border-[var(--border-action)] focus-within:ring-1 focus-within:ring-[var(--border-action)]",
              "hover:border-[var(--border-hover)]",
              className,
            )}
          >
            {(segment) => (
              <DateSegment
                segment={segment}
                className={cn(
                  "rounded px-[var(--spacing-2xs)] tabular-nums outline-none",
                  "focus:bg-[var(--surface-subtle)] focus:text-[var(--text-heading)]",
                  segment.isPlaceholder && "text-[var(--text-disabled)]",
                )}
              />
            )}
          </DateInput>
        </AriaTimeField>
      ) : (
        <div
          className={cn(
            "flex w-full rounded-[var(--radius-lg)] border border-[var(--border-divider)]",
            "hover:border-[var(--border-hover)]",
            className,
          )}
        >
          <span className="rounded px-[var(--spacing-2xs)] py-[var(--spacing-2xs)] tabular-nums text-[var(--text-disabled)]">
            --:--
          </span>
        </div>
      )}

      {error && (
        <FieldError className="text-[var(--text-error)] text-sm">
          {error}
        </FieldError>
      )}
    </div>
  );
}
