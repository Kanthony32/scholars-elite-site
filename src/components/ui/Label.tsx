import clsx from "clsx";
import { ReactNode } from "react";

type Color = "magenta" | "purple" | "muted";

type Props = {
  children: ReactNode;
  color?: Color;
};

const TEXT: Record<Color, string> = {
  magenta: "text-magenta",
  purple: "text-purple",
  muted: "text-muted",
};

const BAR: Record<Color, string> = {
  magenta: "bg-magenta",
  purple: "bg-purple",
  muted: "bg-muted",
};

const SPARK: Record<Color, string> = {
  magenta: "bg-magenta shadow-[0_0_6px_#EC407A]",
  purple: "bg-purple shadow-[0_0_6px_#9C27B0]",
  muted: "bg-muted",
};

export function Label({ children, color = "magenta" }: Props) {
  return (
    <div className="flex items-center gap-3 mb-3.5">
      <div className={clsx("w-5 h-0.5", BAR[color])} />
      <span
        className={clsx(
          "font-display font-bold text-[0.7rem] uppercase tracking-[0.12em]",
          TEXT[color],
        )}
      >
        {children}
      </span>
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)",
        }}
      />
      <div className={clsx("w-1 h-1 rotate-45", SPARK[color])} />
    </div>
  );
}
