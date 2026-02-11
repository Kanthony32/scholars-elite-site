import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  color?: string;
};

export function Pill({ children, color = "#EC407A" }: Props) {
  return (
    <span
      className="font-display font-semibold text-[0.6rem] uppercase tracking-wider rounded-full px-3 py-1 inline-block"
      style={{
        color,
        background: `${color}15`,
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}
