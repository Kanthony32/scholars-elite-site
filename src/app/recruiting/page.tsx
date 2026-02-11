import Link from "next/link";
import { Glass, Label, H2, Btn, Section, PageHero } from "@/components/ui";

export default function RecruitingPage() {
  return (
    <>
      <PageHero label="Recruiting" title="Recruiting Guidance" sub="A process, not a promise." />

      <Section>
        <Label>The Process</Label>
        <H2>How recruiting actually works.</H2>
        <div className="max-w-[700px] mt-5">
          {[
            ["01", "Evaluation", "Honest assessment of current skill and readiness level."],
            ["02", "Skill Development", "Targeted improvement areas for next-level preparation."],
            ["03", "Film", "Verified body of work college coaches can evaluate."],
            ["04", "Events", "Strategic exposure where the right coaches are watching."],
            ["05", "Communication", "Professional engagement with programs that fit."],
          ].map(([n, t, d], i) => (
            <div key={i} className={`flex gap-6 py-7 ${i < 4 ? "border-b border-border" : ""}`}>
              <div className="font-display font-extrabold text-3xl min-w-[48px] gradient-text bg-gradient-to-br from-magenta to-purple leading-none">
                {n}
              </div>
              <div>
                <div className="font-display font-bold text-text1 uppercase tracking-wide">{t}</div>
                <p className="font-body text-[0.95rem] text-text2 leading-relaxed mt-1">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <div className="text-center mb-10">
          <Label color="purple">Clarity</Label>
          <H2>What we do. What we don't.</H2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Glass glow style={{ borderTop: "2px solid #EC407A" }}>
            <h3 className="font-display font-bold text-[0.85rem] text-magenta uppercase tracking-wider mb-4">What We Do</h3>
            {["Honest skill evaluation", "Development plans", "Verified film", "Family education", "Appropriate connections", "Performance preparation"].map((s, i) => (
              <div key={i} className="flex gap-2.5 mb-2.5"><span className="text-magenta">✓</span><span className="font-body text-[0.9rem] text-text1">{s}</span></div>
            ))}
          </Glass>
          <Glass style={{ borderTop: "2px solid rgba(255,255,255,0.12)" }}>
            <h3 className="font-display font-bold text-[0.85rem] text-muted uppercase tracking-wider mb-4">What We Don't</h3>
            {["Guarantee scholarships", "Inflate evaluations", "Promise exposure without prep", "Act as agents", "Pressure families"].map((s, i) => (
              <div key={i} className="flex gap-2.5 mb-2.5"><span className="text-muted">✗</span><span className="font-body text-[0.9rem] text-muted">{s}</span></div>
            ))}
          </Glass>
        </div>
      </Section>

      <section className="py-12 px-6 text-center">
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link href="/apply"><Btn>Book a Call</Btn></Link>
          <Link href="/apply"><Btn primary={false}>Request Guidance</Btn></Link>
        </div>
      </section>
    </>
  );
}
