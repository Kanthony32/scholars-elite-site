import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
  gold?: boolean;
};

export function Btn({ children, href, onClick, primary = true, gold = false }: Props) {
  const base =
    "relative inline-flex items-center justify-center font-display font-bold text-[0.75rem] uppercase tracking-wider px-8 py-3.5 rounded-lg cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-magenta/40";

  const cls = clsx(
    base,
    primary && !gold && "btn-sheen bg-gradient-to-br from-magenta to-hotpink text-white shadow-glowMagenta",
    primary && gold && "btn-sheen bg-gradient-to-br from-gold to-[#B8962E] text-white",
    !primary && "bg-transparent text-text1 border border-border hover:border-border2",
  );

  const inner = (
    <button onClick={onClick} className={cls}>
      <span className="relative z-10">{children}</span>
    </button>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return inner;
}
