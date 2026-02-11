import Link from "next/link";
import { Glass, Label, H2, Pill, Btn, Section, PageHero } from "@/components/ui";

export default function ProgramsPage() {
  return (
    <>
      <PageHero label="Programs" title="Our Development Model" sub="Teaching-first framework — not random reps at random tournaments." />

      <Section>
        <Label>The Framework</Label>
        <H2>Teaching First. Always.</H2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="font-body text-[1.05rem] text-text2 leading-relaxed">
              Players improve when taught, not just when they play. Every session has structure.
            </p>
            <p className="font-display font-bold text-[1.05rem] text-text1 mt-4">
              We don't run pickup with uniforms. We run a program.
            </p>
          </div>
          <Glass className="!p-8">
            <h3 className="font-display font-bold text-[0.8rem] uppercase tracking-wider text-magenta mb-4">Development Pillars</h3>
            {[
              ["⚡", "Skill Work", "Position-specific technique with deliberate repetition"],
              ["🧠", "Decision-Making", "Reading the game, not just reacting"],
              ["📹", "Film + Feedback", "Visual accountability and coaching points"],
              ["🏀", "Game Translation", "Applying practiced skills competitively"],
            ].map(([ic, t, d], i) => (
              <div key={i} className={`mb-4 pb-4 ${i < 3 ? "border-b border-border" : ""}`}>
                <div className="flex gap-2 items-center">
                  <span>{ic}</span>
                  <span className="font-display font-bold text-[0.9rem] text-text1">{t}</span>
                </div>
                <p className="font-body text-[0.85rem] text-muted mt-1">{d}</p>
              </div>
            ))}
          </Glass>
        </div>
      </Section>

      <Section className="py-20">
        <div className="text-center mb-10">
          <Label color="purple">Tracks</Label>
          <H2>Academy. Select. National.</H2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { t: "Academy", c: "rgba(255,255,255,0.55)", items: ["Foundation-building", "Controlled competition", "IQ & discipline"] },
            { t: "Select", c: "#9C27B0", items: ["Performance execution", "Strategic events", "Recruiting prep"] },
            { t: "National", c: "#EC407A", items: ["Elite competition", "Highest standards", "Active recruiting"] },
          ].map((tr, i) => (
            <Glass key={i} glow style={{ borderTop: `2px solid ${tr.c}` }}>
              <h3 className="font-display font-extrabold text-xl uppercase tracking-wider text-text1 mb-5">{tr.t}</h3>
              {tr.items.map((s, j) => (
                <div key={j} className="flex gap-2.5 mb-3.5">
                  <div className="w-[5px] h-[5px] min-w-[5px] rounded-full mt-[7px]" style={{ background: tr.c, boxShadow: `0 0 6px ${tr.c}` }} />
                  <span className="font-body text-[0.95rem] text-text2">{s}</span>
                </div>
              ))}
              <div className="flex gap-2 mt-4 flex-wrap">
                {tr.items.map((s, j) => <Pill key={j} color={tr.c}>{s.split(" ")[0]}</Pill>)}
              </div>
            </Glass>
          ))}
        </div>
      </Section>

      <section className="py-12 px-6 text-center">
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link href="/apply"><Btn>Apply Now</Btn></Link>
          <Link href="/teams"><Btn primary={false}>View Teams</Btn></Link>
        </div>
      </section>
    </>
  );
}
