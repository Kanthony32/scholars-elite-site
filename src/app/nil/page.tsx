import Link from "next/link";
import { Scanlines, Streak, Glass, Label, H2, Pill, Btn, Section } from "@/components/ui";

export default function NILPage() {
  return (
    <>
      {/* Custom purple hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #070A12 0%, #0D0820 50%, #0B1020 100%)" }}>
        <Scanlines />
        <Streak top="20%" color="purple" />
        <Streak top="60%" />
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] border border-[rgba(156,39,176,0.12)] rounded-full opacity-30" />
        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <Label color="purple">NIL Education Hub</Label>
          <h1 className="font-display font-extrabold text-[clamp(2.4rem,5.5vw,3.8rem)] text-text1 leading-[1.08] tracking-tight mb-4">
            NIL Education
          </h1>
          <p className="font-body text-lg text-text2 leading-relaxed max-w-[550px]">
            Long-term value creation starts before the first NIL dollar.
          </p>
        </div>
      </section>

      <Section>
        <Label color="purple">Modules</Label>
        <H2>Building NIL literacy.</H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { tag: "Foundation", t: "Branding Basics", d: "Personal brand, content fundamentals, authentic digital presence.", c: "#EC407A" },
            { tag: "Rules", t: "Compliance Overview", d: "What's allowed, what's not, and protecting eligibility.", c: "#9C27B0" },
            { tag: "Business", t: "Market Reality", d: "Valuations, deal structures, sustainable income.", c: "#6A1B9A" },
          ].map((m, i) => (
            <Glass key={i} glow style={{ borderTop: `2px solid ${m.c}` }}>
              <Pill color={m.c}>{m.tag}</Pill>
              <h3 className="font-display font-bold text-lg text-text1 uppercase tracking-wide mt-3 mb-2.5">{m.t}</h3>
              <p className="font-body text-[0.9rem] text-text2 leading-relaxed">{m.d}</p>
            </Glass>
          ))}
        </div>
      </Section>

      <section className="py-16 px-6 text-center border-t border-border">
        <div className="max-w-[700px] mx-auto">
          <Label>Standards Over Hype</Label>
          <H2>Prepared, not just promoted.</H2>
          <div className="flex gap-3.5 justify-center flex-wrap mt-5">
            <Link href="/apply"><Btn>Apply Now</Btn></Link>
          </div>
        </div>
      </section>
    </>
  );
}
