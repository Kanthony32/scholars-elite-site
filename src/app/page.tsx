"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TEAMS, STATS } from "@/lib/data";
import {
  Scanlines, Streak, Glass, Chip, Label, H2, Sub, Pill, Btn, Section, BList, Noise,
} from "@/components/ui";

const TICKER = [
  "Tryouts Opening Soon — Spring 2026",
  "Turnpike Classic — Memorial Day Weekend",
  "Position Camp Registration — Coming This Spring",
];

export default function HomePage() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setTick((p) => (p + 1) % TICKER.length), 4000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-16">
        <Scanlines />
        <Noise opacity={0.15} />
        <Streak top="15%" rot="-22deg" />
        <Streak top="65%" rot="-18deg" color="purple" />

        {/* Background mascot */}
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[45%] max-h-[80vh] z-[1] opacity-[0.12] hidden md:block">
          <img src="/assets/mascot-wide.png" alt="" className="w-full object-contain" />
        </div>

        {/* Glow orb */}
        <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(236,64,122,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-[3] w-full">
          <div className="max-w-[680px]">
            {/* Live badge */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-magenta shadow-[0_0_12px_#EC407A] pulse-dot" />
              <span className="font-display font-bold text-[0.65rem] text-magenta uppercase tracking-[0.15em]">
                NJ Scholars Elite Academy
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-[clamp(2.2rem,5.5vw,3.8rem)] text-text1 leading-[1.08] tracking-tight mb-2">
              DEVELOPMENT IS THE STANDARD.
              <br />
              <span className="gradient-text bg-gradient-to-br from-magenta to-purple">
                OPPORTUNITY IS EARNED.
              </span>
            </h1>

            {/* Sub */}
            <p className="font-body text-[clamp(1rem,2vw,1.15rem)] text-text2 leading-relaxed max-w-[540px] mb-6">
              Development isn't a pitch — it's the work. We evaluate honestly,
              train with structure, and provide recruiting clarity. No promises.
              Just proof.
            </p>

            {/* Gold badge */}
            <div className="inline-flex items-center gap-2.5 bg-surface border border-border rounded-full px-5 py-2.5 mb-7">
              <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_#D4AF37]" />
              <span className="font-display font-bold text-[0.75rem] text-gold uppercase tracking-wider">
                25+ Years in Grassroots Basketball
              </span>
            </div>

            {/* CTAs */}
            <div className="flex gap-3.5 flex-wrap mb-9">
              <Link href="/apply"><Btn>Register / Tryouts</Btn></Link>
              <Link href="/programs"><Btn primary={false}>Explore Programs</Btn></Link>
            </div>

            {/* Stat chips */}
            <div className="flex gap-3 flex-wrap">
              {STATS.map((s, i) => (
                <Chip key={i} v={s.v} l={s.l} color={i % 2 === 0 ? "magenta" : "purple"} />
              ))}
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-bg0/85 border-t border-border px-6 py-2.5 z-10">
          <div className="max-w-[1200px] mx-auto flex items-center gap-3">
            <span className="font-display font-bold text-[0.6rem] text-bg0 bg-magenta px-2.5 py-0.5 rounded-[3px] uppercase tracking-wider whitespace-nowrap">
              LIVE
            </span>
            <span className="font-body text-[0.8rem] text-text2 transition-opacity duration-500" key={tick}>
              {TICKER[tick]}
            </span>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS ═══ */}
      <Section>
        <Label>What We Build</Label>
        <H2>Four pillars. One standard.</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            { i: "⚡", t: "Player Development", d: "Skill work, decision-making, game-speed translation. Every session has purpose." },
            { i: "🎯", t: "Recruiting Guidance", d: "Honest timelines, real evaluation, process built on preparation." },
            { i: "📋", t: "Standards & Accountability", d: "We hold players to a standard because development requires it." },
            { i: "💡", t: "NIL Education", d: "Brand literacy and financial awareness that serves beyond the court." },
          ].map((b, i) => (
            <Glass key={i} glow>
              <div className="text-2xl mb-3">{b.i}</div>
              <h3 className="font-display font-bold text-[0.9rem] uppercase tracking-wider text-text1 mb-2.5">
                {b.t}
              </h3>
              <p className="font-body text-[0.9rem] text-text2 leading-relaxed">{b.d}</p>
            </Glass>
          ))}
        </div>
      </Section>

      {/* ═══ TEAMS PREVIEW ═══ */}
      <Section className="py-20">
        <Label color="purple">Teams</Label>
        <H2>Academy. Select. National.</H2>
        <Sub>
          Every team has a role in the pipeline. Academy builds foundation. Select
          accelerates. National prepares.
        </Sub>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {TEAMS.map((t, i) => (
            <Link key={i} href={`/teams/${t.id}`} className="no-underline">
              <Glass glow className="h-full">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="font-display font-extrabold text-text1 uppercase tracking-wide">
                    {t.name}
                  </span>
                  <Pill
                    color={
                      t.track === "National"
                        ? "#EC407A"
                        : t.track === "Select"
                          ? "#9C27B0"
                          : "rgba(255,255,255,0.55)"
                    }
                  >
                    {t.track}
                  </Pill>
                </div>
                <p className="font-body text-[0.85rem] text-text2 leading-normal mb-3">
                  {t.purpose}
                </p>
                <span className="font-display font-bold text-[0.65rem] text-magenta uppercase tracking-wider">
                  View Team →
                </span>
              </Glass>
            </Link>
          ))}
        </div>
      </Section>

      {/* ═══ WHY ═══ */}
      <Section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Label>Why Scholars Elite</Label>
            <H2>We don't sell exposure. We build players.</H2>
            <p className="font-body text-text2 leading-relaxed mb-6">
              Grassroots basketball has a credibility problem. Too many programs
              prioritize flash over fundamentals. Scholars Elite exists to be
              different — not louder.
            </p>
            <BList
              items={[
                "Teaching-first: every session is a learning environment",
                "Honest evaluation: where you are, not where you want to be",
                "Preparation before exposure: earn the stage",
                "Player + family accountability: standards apply to everyone",
              ]}
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img src="/assets/team-group.png" alt="Team" className="w-full block" />
          </div>
        </div>
      </Section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-[72px] px-6 text-center bg-gradient-to-br from-bg0 to-bg1 border-t border-border overflow-hidden">
        <Streak top="40%" rot="-15deg" />
        <div className="max-w-[700px] mx-auto relative z-[2]">
          <Label>Standards Over Hype</Label>
          <H2>We develop players who are prepared — not just promoted.</H2>
          <div className="flex gap-3.5 justify-center flex-wrap mt-6">
            <Link href="/apply"><Btn>Apply Now</Btn></Link>
            <Link href="/programs"><Btn primary={false}>Explore Programs</Btn></Link>
          </div>
        </div>
      </section>
    </>
  );
}
