import { Scanlines } from "./Scanlines";
import { Streak } from "./Streak";
import { Noise } from "./Noise";
import { Label } from "./Label";

type Props = {
  label: string;
  title: string;
  sub: string;
  labelColor?: "magenta" | "purple";
};

export function PageHero({ label, title, sub, labelColor = "magenta" }: Props) {
  return (
    <section className="relative pt-36 pb-20 px-6 bg-gradient-to-br from-bg0 to-bg1 overflow-hidden">
      <Scanlines />
      <Noise opacity={0.15} />
      <Streak top="30%" />
      <div className="max-w-[1200px] mx-auto relative z-[2]">
        <Label color={labelColor}>{label}</Label>
        <h1 className="font-display font-extrabold text-[clamp(2.4rem,5.5vw,3.8rem)] text-text1 leading-[1.08] tracking-tight mb-4">
          {title}
        </h1>
        <p className="font-body text-lg text-text2 leading-relaxed max-w-[550px]">
          {sub}
        </p>
      </div>
    </section>
  );
}
