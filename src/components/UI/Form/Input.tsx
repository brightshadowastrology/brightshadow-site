import { cn } from "@/utilities/ui";
import * as Form from "@radix-ui/react-form";
import { type PropsWithChildren } from "react";

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "name"
> & {
  containerClassName?: string;
  name: string;
  label?: React.ReactNode;
  error?: React.ReactNode;
};

const Input: React.FC<PropsWithChildren<InputProps>> = ({
  label,
  error,
  className,
  children,
  containerClassName,
  ...props
}) => {
  const { required, name } = props;

  return (
    <Form.Field
      className={cn("mb-[var(--spacing-xs)]", containerClassName)}
      name={name}
    >
      <div className="flex items-center">
        <Form.Label className="mb-[var(--spacing-xs)] block font-body text-label uppercase tracking-[var(--tracking-label)] text-[var(--text-label)]">
          {label}
          {required && <span className="text-[var(--text-error)]">*</span>}
        </Form.Label>
      </div>
      <div className="relative">
        {children}
        <Form.Control asChild>
          <input
            className={cn(
              "w-full rounded-[var(--radius-lg)] border border-[var(--border-divider)] font-body text-body text-[var(--text-body)] px-[var(--spacing-sm)] py-[var(--spacing-xs)]",
              "focus:border-[var(--border-action)] focus:ring-1 focus:ring-[var(--border-action)] focus:bg-[var(--surface-subtle)] focus:outline-none",
              className,
            )}
            {...props}
          />
        </Form.Control>
      </div>
      <div className="flex items-center py-[var(--spacing-2xs)] text-[var(--text-error)] text-sm">
        {error && <Form.Message>{error}</Form.Message>}
      </div>
    </Form.Field>
  );
};

export default Input;
