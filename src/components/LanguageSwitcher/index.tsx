"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { DropdownMenu } from "radix-ui";
import { cn } from "@/utilities/ui";
import type { SupportedLocale } from "@/utilities/getLocale";

const LOCALES: { value: SupportedLocale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
];

export function LanguageSwitcher({ locale }: { locale: SupportedLocale }) {
  const router = useRouter();

  const handleSelect = (value: SupportedLocale) => {
    document.cookie = `payload-locale=${value}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        aria-label="Select language"
        className={cn(
          "inline-flex items-center gap-1 cursor-pointer outline-none",
          "font-body text-label uppercase tracking-[var(--tracking-wider)]",
          "text-[var(--text-body)] hover:opacity-70 transition-opacity",
        )}
      >
        {locale.toUpperCase()}
        <ChevronDownIcon className="w-3 h-3" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className={cn(
            "z-50 overflow-hidden",
            "rounded-[var(--radius-md)] border border-[var(--border-divider)]",
            "bg-[var(--surface-page)] shadow-[var(--shadow-card)]",
          )}
        >
          {LOCALES.map(({ value, label }) => (
            <DropdownMenu.Item
              key={value}
              onSelect={() => handleSelect(value)}
              className={cn(
                "relative flex items-center px-3 py-2 cursor-pointer select-none outline-none",
                "font-body text-label uppercase tracking-[var(--tracking-wider)]",
                "text-[var(--text-body)] rounded-[var(--radius-sm)]",
                "data-[highlighted]:bg-[var(--surface-subtle)]",
                value === locale && "font-semibold",
              )}
            >
              {label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
