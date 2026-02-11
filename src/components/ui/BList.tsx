import clsx from "clsx";

type Props = {
  items: string[];
  color?: "magenta" | "purple";
};

const DOT = {
  magenta: "bg-magenta shadow-[0_0_8px_#EC407A]",
  purple: "bg-purple shadow-[0_0_8px_#9C27B0]",
} as const;

export function BList({ items, color = "magenta" }: Props) {
  return (
    <div className="flex flex-col gap-3.5">
      {items.map((t, i) => (
        <div key={i} className="flex gap-3.5 items-start">
          <div
            className={clsx(
              "w-1.5 h-1.5 min-w-[6px] rounded-full mt-2",
              DOT[color],
            )}
          />
          <p className="font-body text-[0.95rem] text-text2 leading-relaxed">
            {t}
          </p>
        </div>
      ))}
    </div>
  );
}
