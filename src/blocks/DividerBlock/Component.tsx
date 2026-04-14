import { cn } from "@/utilities/ui";

type DividerProps = {
  className?: string;
};

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div
      className={cn("w-full border-t border-[var(--border-subtle)]", className)}
    />
  );
};

export default Divider;
