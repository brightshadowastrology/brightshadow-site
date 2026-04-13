import { cn } from "@/utilities/ui";

type DividerProps = {
  className?: string;
};

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div
      className={cn("w-full border-t border-[var(--border-subtle)]", className)}
    />
  );
};
