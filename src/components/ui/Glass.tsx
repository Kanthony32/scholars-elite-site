import clsx from "clsx";
import { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
};

export function Glass({ children, className, glow, onClick, style }: Props) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "glass p-6 rounded-2xl",
        glow && "glass-glow",
        onClick && "cursor-pointer",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
