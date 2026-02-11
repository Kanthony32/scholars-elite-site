type Props = {
  top?: string;
  rot?: string;
  color?: "magenta" | "purple";
};

const COLORS = {
  magenta: "#EC407A",
  purple: "#9C27B0",
} as const;

export function Streak({ top = "20%", rot = "-25deg", color = "magenta" }: Props) {
  return (
    <div
      className="energy-streak"
      style={{
        top,
        transform: `rotate(${rot})`,
        ["--streak-color" as string]: COLORS[color],
      }}
    />
  );
}
