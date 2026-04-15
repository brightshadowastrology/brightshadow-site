import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { type ComponentProps } from "react";
import * as Form from "@radix-ui/react-form";

type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "name"
> &
  ComponentProps<(typeof PasswordToggleField)["Input"]> & {
    name: string;
    label?: React.ReactNode;
    error?: React.ReactNode;
  };

const InputHidden: React.FC<InputProps> = ({ label, error, ...props }) => {
  const { required, name } = props;
  return (
    <Form.Field className="mb-[var(--spacing-md)]" name={name}>
      <div className="flex items-center">
        <Form.Label className="mb-[var(--spacing-xs)] block font-body text-label uppercase tracking-[var(--tracking-label)] text-[var(--text-label)]">
          {label}
          {required && <span className="text-[var(--text-error)]">*</span>}
        </Form.Label>
      </div>
      <PasswordToggleField.Root>
        <div className="flex w-full justify-between rounded-[var(--radius-lg)] border border-[var(--border-divider)] px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[var(--text-label)] focus-within:border-[var(--border-action)] focus-within:ring-1 focus-within:ring-[var(--border-action)]">
          <PasswordToggleField.Input
            className="bg-transparent outline-none font-body text-body text-[var(--text-body)]"
            style={{ width: "90%" }}
            {...props}
          />
          <PasswordToggleField.Toggle className="Toggle">
            <PasswordToggleField.Icon
              hidden={<EyeClosedIcon />}
              visible={<EyeOpenIcon />}
            />
          </PasswordToggleField.Toggle>
        </div>
      </PasswordToggleField.Root>
      <div className="flex items-center py-[var(--spacing-2xs)] text-[var(--text-error)] text-sm">
        {error && <Form.Message>{error}</Form.Message>}
      </div>
    </Form.Field>
  );
};

export default InputHidden;
