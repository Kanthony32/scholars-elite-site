import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: Props) {
  return (
    <section
      id={id}
      className={clsx("relative py-24 px-6 overflow-hidden", className)}
    >
      <div className="max-w-[1200px] mx-auto relative z-[2]">{children}</div>
    </section>
  );
}
