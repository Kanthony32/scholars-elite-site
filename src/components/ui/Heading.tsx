import { ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] text-text1 leading-[1.1] tracking-tight mb-3.5">
      {children}
    </h2>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return (
    <p className="font-body text-[1.05rem] text-text2 leading-relaxed max-w-[580px] mb-7">
      {children}
    </p>
  );
}
