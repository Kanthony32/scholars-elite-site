import clsx from "clsx";

type Props = {
  value: string;
  label: string;
  color?: "magenta" | "purple";
};

const DOT = {
  magenta: "bg-magenta shadow-[0_0_8px_#EC407A]",
  purple: "bg-purple shadow-[0_0_8px_#9C27B0]",
} as const;

export function StatChip({ value, label, color = "magenta" }: Props) {
  return (
    <div className="inline-flex items-center gap-2.5 bg-surface border border-border rounded-full px-4 py-2">
      <div className={clsx("w-1.5 h-1.5 rounded-full", DOT[color])} />
      <span className="font-display font-bold text-[0.95rem] text-text1">
        {value}
      </span>
      <span className="font-body text-[0.7rem] text-muted uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
