"use client";

import React, { useState } from "react";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Button,
  Heading,
} from "react-aria-components";
import { today, getLocalTimeZone } from "@internationalized/date";
import type { CalendarDate } from "@internationalized/date";
import { cn } from "@/shared/lib/css";

const DEFAULT_TIMES = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const ALL_TIMEZONES = Intl.supportedValuesOf("timeZone");

export interface CalendarTimePickerProps {
  value?: CalendarDate;
  onChange?: (date: CalendarDate) => void;
  selectedTime?: string;
  onTimeChange?: (time: string) => void;
  availableTimes?: string[];
  timezone?: string;
  onTimezoneChange?: (timezone: string) => void;
  className?: string;
}

export function CalendarTimePicker({
  value,
  onChange,
  selectedTime,
  onTimeChange,
  availableTimes = DEFAULT_TIMES,
  timezone,
  onTimezoneChange,
  className,
}: CalendarTimePickerProps) {
  const localTimezone = getLocalTimeZone();
  const [internalDate, setInternalDate] = useState<CalendarDate>(
    value ?? today(localTimezone),
  );
  const [internalTime, setInternalTime] = useState<string | undefined>(
    selectedTime,
  );
  const [internalTimezone, setInternalTimezone] = useState<string>(
    timezone ?? localTimezone,
  );

  const selectedTimezone = timezone ?? internalTimezone;

  function handleTimezoneChange(tz: string) {
    setInternalTimezone(tz);
    onTimezoneChange?.(tz);
  }

  const selectedDate = value ?? internalDate;
  const selectedTimeValue = selectedTime ?? internalTime;

  function handleDateChange(date: CalendarDate) {
    setInternalDate(date);
    onChange?.(date);
  }

  function handleTimeChange(time: string) {
    setInternalTime(time);
    onTimeChange?.(time);
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: selectedTimezone,
  }).format(selectedDate.toDate(selectedTimezone));

  return (
    <div className={cn("flex flex-col gap-[var(--spacing-lg)]", className)}>
      {/* Calendar Card */}
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        aria-label="Select booking date"
        className="w-full bg-white rounded-[var(--radius-lg)] border border-[var(--border-divider)] shadow-[var(--shadow-card)] p-[var(--spacing-xl)]"
      >
        {/* Navigation header */}
        <header className="flex items-center justify-between mb-[var(--spacing-lg)]">
          <Button
            slot="previous"
            className="w-8 h-8 flex items-center justify-center text-[color:var(--text-muted)] hover:text-[color:var(--text-heading)] transition-colors cursor-pointer rounded-[var(--radius-sm)] focus-visible:outline-2 focus-visible:outline-[var(--border-action)]"
            aria-label="Previous month"
          >
            ‹
          </Button>
          <Heading className="font-[var(--font-header)] text-[color:var(--text-heading)] text-base" />
          <Button
            slot="next"
            className="w-8 h-8 flex items-center justify-center text-[color:var(--text-muted)] hover:text-[color:var(--text-heading)] transition-colors cursor-pointer rounded-[var(--radius-sm)] focus-visible:outline-2 focus-visible:outline-[var(--border-action)]"
            aria-label="Next month"
          >
            ›
          </Button>
        </header>

        <CalendarGrid className="w-full border-collapse">
          <CalendarGridHeader>
            {(day) => (
              <CalendarHeaderCell className="text-[var(--type-label)] font-medium text-center pb-[var(--spacing-xs)] w-9">
                {day}
              </CalendarHeaderCell>
            )}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => (
              <CalendarCell
                date={date}
                className={({ isSelected, isOutsideMonth, isDisabled }) =>
                  cn(
                    "w-9 h-9 flex items-center justify-center rounded-[var(--radius-md)]",
                    "text-sm transition-colors mx-auto",
                    "focus-visible:outline-2 focus-visible:outline-[var(--border-action)] focus-visible:outline-offset-1",
                    isOutsideMonth && "text-[color:var(--text-disabled)]",
                    isDisabled &&
                      "text-[color:var(--text-disabled)] cursor-not-allowed",
                    isSelected &&
                      "bg-[var(--primary-500)] text-white font-medium cursor-default",
                    !isSelected &&
                      !isDisabled &&
                      "text-[color:var(--text-body)] hover:bg-[var(--surface-subtle)] cursor-pointer",
                    !isSelected &&
                      isDisabled &&
                      "text-[color:var(--text-disabled)]",
                  )
                }
              />
            )}
          </CalendarGridBody>
        </CalendarGrid>
      </Calendar>

      {/* Timezone selector */}
      <div className="flex flex-col gap-[var(--spacing-xs)]">
        <label
          htmlFor="timezone-select"
          className="text-xs font-medium text-[color:var(--text-muted)]"
        >
          Time zone
        </label>
        <select
          id="timezone-select"
          value={selectedTimezone}
          onChange={(e) => handleTimezoneChange(e.target.value)}
          className="w-full py-[var(--spacing-sm)] px-[var(--spacing-md)] border border-[var(--border-divider)] rounded-[var(--radius-md)] text-sm text-[color:var(--text-body)] bg-white cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--border-action)] focus-visible:outline-offset-2"
        >
          {ALL_TIMEZONES.map((tz) => (
            <option key={tz} value={tz}>
              {tz.replace(/_/g, " ")}
              {tz === localTimezone ? " (local)" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Time slots */}
      <div className="flex flex-col gap-[var(--spacing-md)]">
        <p className="text-[color:var(--text-body)] text-sm">
          Available times for{" "}
          <strong className="font-semibold text-[color:var(--text-heading)]">
            {formattedDate}
          </strong>
        </p>
        <div className="grid grid-cols-2 gap-[var(--spacing-sm)]">
          {availableTimes.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => handleTimeChange(time)}
              className={cn(
                "py-[var(--spacing-sm)] px-[var(--spacing-md)]",
                "border rounded-[var(--radius-md)]",
                "text-sm text-[color:var(--text-body)] bg-white",
                "transition-colors cursor-pointer",
                "focus-visible:outline-2 focus-visible:outline-[var(--border-action)] focus-visible:outline-offset-2",
                selectedTimeValue === time
                  ? "border-[var(--border-action)] bg-[var(--surface-subtle)] font-medium"
                  : "border-[var(--border-divider)] hover:border-[var(--border-hover)] hover:bg-[var(--surface-subtle)]",
              )}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarTimePicker;
