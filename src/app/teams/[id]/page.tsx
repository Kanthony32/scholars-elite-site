import { notFound } from "next/navigation";
import Link from "next/link";
import { TEAMS } from "@/lib/data";
import { Scanlines, Streak, Glass, Label, H2, Pill, Btn, Section, Noise } from "@/components/ui";

export function generateStaticParams() {
  return TEAMS.map((t) => ({ id: t.id }));
}

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  const t = TEAMS.find((x) => x.id === params.id);
  if (!t) notFound();

  const tc = t.track === "National" ? "#EC407A" : t.track === "Select" ? "#9C27B0" : "rgba(255,255,255,0.55)";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-gradient-to-br from-bg0 to-bg1 overflow-hidden">
        <Scanlines />
        <Noise opacity={0.15} />
        <Streak top="30%" color={t.track === "National" ? "magenta" : "purple"} />
        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <div className="flex items-center gap-3 mb-3.5">
            <Pill color={tc}>{t.track} Track</Pill>
            <Pill color="rgba(255,255,255,0.12)">{t.age}</Pill>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(2.4rem,5.5vw,3.8rem)] text-text1 leading-[1.08] tracking-tight mb-4">
            {t.name}
          </h1>
          <p className="font-body text-lg text-text2 leading-relaxed max-w-[550px]">{t.purpose}</p>
        </div>
      </section>

      {/* Dev Focus */}
      <Section>
        <Label color={t.track === "National" ? "magenta" : t.track === "Select" ? "purple" : "muted"}>
          Development Focus
        </Label>
        <H2>What we work on.</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
          {t.devFocus.map((s, i) => (
            <Glass key={i} style={{ borderLeft: `2px solid ${tc}` }}>
              <p className="font-body text-[0.95rem] text-text1 leading-normal">{s}</p>
            </Glass>
          ))}
        </div>
      </Section>

      {/* Competition + Recruiting */}
      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <Label>Competition</Label>
            <H2>How this team competes.</H2>
            <p className="font-body text-text2 leading-relaxed">{t.competition}</p>
          </div>
          <div>
            <Label color="purple">Recruiting</Label>
            <H2>Where this fits.</H2>
            <p className="font-body text-text2 leading-relaxed">{t.recruiting}</p>
          </div>
        </div>
      </Section>

      {/* Roster placeholder */}
      <Section className="py-16">
        <Label>Roster</Label>
        <H2>{t.name} Roster</H2>
        <p className="font-body text-[0.85rem] text-muted mb-5">Updated following evaluations.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <Glass key={i} className="!p-3.5 opacity-40">
              <div className="font-display font-bold text-[0.85rem] text-text1">Player Name</div>
              <div className="font-body text-[0.65rem] text-muted uppercase tracking-wider mt-1">POS • 20XX</div>
            </Glass>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-12 px-6 text-center">
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link href="/apply"><Btn>Apply for This Team</Btn></Link>
          <Link href="/teams"><Btn primary={false}>All Teams</Btn></Link>
        </div>
      </section>
    </>
  );
}
