import { cn } from "@/shared/lib/css";

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn("w-full border-t border-[var(--border-subtle)]", className)}
    />
  );
}
