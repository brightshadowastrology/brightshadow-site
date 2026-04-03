import { cn } from "@/shared/lib/css";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  Label,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { type RefObject, useState } from "react";
import { useController, type UseControllerProps } from "react-hook-form";

type Item = {
  id: string | number;
  name: string;
};

type InputAutocompleteProps<
  T extends Item,
  // This any is expected because it's a generic type for form values
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TFormValues extends Record<string, any>,
> = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "name"
> &
  Omit<UseControllerProps<TFormValues>, "control"> & {
    ref?: RefObject<HTMLInputElement | null>;
    // Forces control to be passed down
    control: NonNullable<UseControllerProps<TFormValues>["control"]>;
    label?: string;
    // Force items to be passed as a prop
    items: T[];
    renderItem?: (item: T) => React.ReactNode;
    // This is a default naming for the input read only
    // eslint-disable-next-line react/boolean-prop-naming
    readOnly?: boolean;
  };

const InputAutocomplete = <
  T extends Item,
  // This any is expected because it's a generic type for form values
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TFormValues extends Record<string, any>,
>({
  label,
  className,
  items,
  renderItem,
  ...props
}: InputAutocompleteProps<T, TFormValues>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController(props);

  // Intentionally not using `control` prop here
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { control, disabled, readOnly, required, ...fieldProps } = props;

  // Internal state for the query
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase()),
        );

  return (
    <Field className={className}>
      {/* Label */}
      <div className="flex items-center">
        <Label className="mb-[var(--spacing-2xs)] block font-body text-label uppercase tracking-[var(--tracking-label)] text-[var(--text-label)]">
          {label}
          {required && <span className="text-[var(--text-error)]">*</span>}
        </Label>
      </div>

      <Combobox<T | null>
        disabled={disabled || readOnly}
        value={value || null}
        virtual={{ options: filteredItems }}
        onChange={readOnly ? () => {} : onChange}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <span
            className={cn(
              "absolute top-0 bottom-0 left-2 flex h-full items-center justify-center",
              {
                "text-[var(--text-disabled)]": readOnly || disabled,
                "text-primary-300": !readOnly && !disabled,
              },
            )}
          >
            <MagnifyingGlassIcon className="pointer-none w-6" />
          </span>
          <ComboboxInput<T>
            disabled={disabled || readOnly}
            displayValue={(item) => item?.name}
            className={cn(
              "w-full rounded-[var(--radius-lg)] border px-[var(--spacing-xs)] py-[var(--spacing-xs)] pr-[var(--spacing-xl)] pl-[var(--spacing-xl)] font-body text-body",
              {
                "focus:border-[var(--border-action)] focus:ring-[var(--border-action)] border-[var(--border-divider)] bg-[var(--surface-page)] text-[var(--text-body)]":
                  !readOnly && !disabled,
                "cursor-not-allowed border-[var(--border-divider)] bg-[var(--surface-subtle)] text-[var(--text-muted)]":
                  readOnly || disabled,
              },
            )}
            onChange={
              readOnly ? () => {} : (event) => setQuery(event.target.value)
            }
            {...fieldProps}
          />
        </div>

        {error && (
          <div className="flex items-center py-[var(--spacing-2xs)] text-[var(--text-error)] text-sm">
            {error.message}
          </div>
        )}

        <ComboboxOptions
          anchor="bottom"
          className="z-50 mt-[var(--spacing-2xs)] max-h-48! w-[--input-width] overflow-y-auto rounded-[var(--radius-md)] border border-[var(--border-divider)] bg-[var(--surface-page)] shadow-[var(--shadow-card)] empty:invisible"
        >
          {({ option: item }: { option: T }) => (
            <ComboboxOption
              key={item.id}
              value={item}
              className={cn("group w-full", {
                ["cursor-pointer px-[var(--spacing-sm)] py-[var(--spacing-xs)] data-[focus]:bg-[var(--surface-section-alt)] data-[selected]:font-bold"]:
                  !renderItem,
              })}
            >
              {renderItem ? renderItem(item) : item.name}
            </ComboboxOption>
          )}
        </ComboboxOptions>
      </Combobox>
    </Field>
  );
};

export default InputAutocomplete;
