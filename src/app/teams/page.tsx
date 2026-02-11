import Link from "next/link";
import { TEAMS } from "@/lib/data";
import { Glass, Label, H2, Pill, Section, PageHero } from "@/components/ui";

export default function TeamsPage() {
  return (
    <>
      <PageHero label="Teams" title="Our Team Structure" sub="Two-track model: Academy builds foundation, Select accelerates. Placement based on readiness." />

      <Section>
        <Label>All Teams</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TEAMS.map((t, i) => (
            <Link key={i} href={`/teams/${t.id}`} className="no-underline">
              <Glass glow className="h-full">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-display font-extrabold text-lg text-text1 uppercase tracking-wide">{t.name}</div>
                  <Pill color={t.track === "National" ? "#EC407A" : t.track === "Select" ? "#9C27B0" : "rgba(255,255,255,0.55)"}>{t.track}</Pill>
                </div>
                <p className="font-body text-[0.9rem] text-text2 leading-normal mb-3.5">{t.purpose}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {t.devFocus.slice(0, 2).map((d, j) => <Pill key={j} color="rgba(255,255,255,0.12)">{d.split(" ").slice(0, 2).join(" ")}</Pill>)}
                </div>
                <span className="font-display font-bold text-[0.65rem] text-magenta uppercase tracking-wider">View Team →</span>
              </Glass>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="py-16">
        <Label color="purple">Fit Check</Label>
        <H2>Is Scholars Elite right?</H2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Glass glow style={{ borderTop: "2px solid #EC407A" }}>
            <h3 className="font-display font-bold text-[0.85rem] text-magenta uppercase tracking-wider mb-3.5">A fit if</h3>
            {["Real development over exposure", "Honest feedback valued", "Recruiting as process", "Willing to be coached"].map((s, i) => (
              <div key={i} className="flex gap-2.5 mb-2"><span className="text-magenta">✓</span><span className="font-body text-[0.9rem] text-text1">{s}</span></div>
            ))}
          </Glass>
          <Glass style={{ borderTop: "2px solid rgba(255,255,255,0.12)" }}>
            <h3 className="font-display font-bold text-[0.85rem] text-muted uppercase tracking-wider mb-3.5">Not a fit if</h3>
            {["Guaranteed minutes expected", "Rankings over readiness", "Promises over preparation"].map((s, i) => (
              <div key={i} className="flex gap-2.5 mb-2"><span className="text-muted">✗</span><span className="font-body text-[0.9rem] text-muted">{s}</span></div>
            ))}
          </Glass>
        </div>
      </Section>
    </>
  );
}
