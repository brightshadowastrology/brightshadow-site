"use client";

import { cn } from "@/utilities/ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Select } from "radix-ui";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps = {
  align?: "center" | "end" | "start";
  caretIcon?: ReactNode;
  contentClassName?: string;
  disabled?: boolean;
  iconClassName?: string;
  label?: string;
  maxHeight?: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  position?: "bottom" | "left" | "right" | "top";
  sideOffset?: number;
  triggerClassName?: string;
  triggerPrefix?: ReactNode;
  value: string | null;
  valueClassName?: string;
};

/**
 * Custom dropdown component using Radix UI Select.
 */
const Dropdown: React.FC<DropdownProps> = ({
  align = "center",
  caretIcon,
  contentClassName,
  disabled = false,
  iconClassName,
  label,
  maxHeight = "200px",
  onChange,
  options,
  placeholder,
  position = "bottom",
  sideOffset = 0,
  triggerClassName,
  triggerPrefix,
  value,
  valueClassName,
}) => {
  const resolvedPlaceholder = placeholder ?? "--";
  const [mounted, setMounted] = useState(false);
  const [internalValue, setInternalValue] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setInternalValue(value);
  }, []);

  useEffect(() => {
    if (mounted) setInternalValue(value);
  }, [value, mounted]);

  const handleValueChange = (newValue: string) => {
    const selectedOption = options.find((option) => option.value === newValue);
    if (selectedOption) {
      setInternalValue(selectedOption.value);
      onChange(newValue);
    }
  };

  return (
    <>
      {label && (
        <label className="mb-[var(--spacing-xs)] block font-body text-label uppercase tracking-[var(--tracking-label)] text-[var(--text-label)]">
          {label}
        </label>
      )}
      <Select.Root
        disabled={disabled}
        value={internalValue || placeholder}
        onValueChange={handleValueChange}
      >
        <Select.Trigger
          aria-label={resolvedPlaceholder}
          className={cn(
            "w-full border border-[var(--border-divider)] bg-white inline-flex cursor-pointer items-center justify-between rounded-[var(--radius-lg)] px-[var(--spacing-sm)] py-[var(--spacing-xs)]",
            "font-body text-body text-[var(--text-body)]",
            "focus:border-[var(--border-action)] focus:ring-1 focus:ring-[var(--border-action)] focus:bg-[var(--surface-subtle)] focus:outline-none",
            triggerClassName,
          )}
        >
          {triggerPrefix ? (
            <span className="flex items-center">{triggerPrefix}</span>
          ) : null}
          <Select.Value
            className={cn("flex-1 text-left", valueClassName)}
            placeholder={resolvedPlaceholder}
            suppressHydrationWarning
          />
          <Select.Icon
            className={cn(
              "ml-2 shrink-0 text-[var(--text-muted)]",
              iconClassName,
            )}
          >
            {caretIcon ?? <ChevronDownIcon />}
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            align={align}
            position="popper"
            side={position}
            sideOffset={sideOffset}
            style={{ maxHeight }}
            className={cn(
              "z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-divider)] bg-[var(--surface-page)] shadow-[var(--shadow-card)]",
              contentClassName,
            )}
          >
            <Select.Viewport
              className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-400 [&::-webkit-scrollbar-track]:bg-[var(--surface-subtle)]"
              style={{
                maxHeight,
                scrollbarWidth: "thin",
                scrollbarColor: `var(--neutral-400) var(--surface-subtle)`,
              }}
            >
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  className="data-[highlighted]:bg-[var(--surface-section-alt)] relative flex h-8 cursor-pointer items-center rounded-[var(--radius-sm)] px-[var(--spacing-sm)] leading-none select-none focus-visible:outline-none data-[state=checked]:font-semibold"
                  value={option.value}
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
};

export default Dropdown;
