"use client";

import { useState } from "react";
import Link from "next/link";
import { TIERS } from "@/lib/data";
import { Glass, Label, H2, Chip, Btn, BList, Section, PageHero } from "@/components/ui";

export default function SupportPage() {
  const [da, setDa] = useState("50");

  return (
    <>
      <PageHero
        label="Support"
        title="Sponsors. Donors. Partners."
        sub="Build the infrastructure women's basketball deserves."
      />

      <Section>
        <Label>What Support Funds</Label>
        <H2>Systems, not vibes.</H2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { n: "01", t: "Development Infrastructure", items: ["Facilities & court time", "Position-specific instruction", "Coaching & performance resources"] },
            { n: "02", t: "Access & Opportunity", items: ["Need-based family support", "Reduced participation barriers", "Travel for meaningful events"] },
            { n: "03", t: "Program Standards", items: ["Equipment & operations", "Communication systems", "Staffing & development"] },
          ].map((b, i) => (
            <Glass key={i} glow style={{ borderTop: "2px solid #EC407A" }}>
              <div className="font-display font-extrabold text-3xl gradient-text bg-gradient-to-br from-magenta to-purple mb-2">
                {b.n}
              </div>
              <h3 className="font-display font-bold text-[0.95rem] text-text1 uppercase tracking-wide mb-3.5">{b.t}</h3>
              {b.items.map((s, j) => (
                <div key={j} className="flex gap-2.5 mb-2">
                  <div className="w-[5px] h-[5px] min-w-[5px] rounded-full bg-magenta mt-[7px] shadow-[0_0_6px_#EC407A]" />
                  <span className="font-body text-[0.9rem] text-text2">{s}</span>
                </div>
              ))}
            </Glass>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <Label color="purple">Sponsorship Tiers</Label>
        <H2>Program Sponsorship</H2>
        <div className="flex flex-col gap-2 mt-6">
          {TIERS.map((t, i) => (
            <Glass key={i} className="!py-4 !px-6 flex justify-between items-center flex-wrap gap-3" style={{ borderLeft: `3px solid ${t.color}` }}>
              <span className="font-display font-bold text-text1">{t.level}</span>
              <Chip v={t.amt} l="" />
            </Glass>
          ))}
        </div>
        <div className="mt-6 flex gap-3.5 flex-wrap">
          <Link href="/apply"><Btn>Become a Sponsor</Btn></Link>
          <Btn primary={false}>Request Packet</Btn>
        </div>
      </Section>

      <Section className="py-16">
        <Label>Donations</Label>
        <H2>Monthly Support</H2>
        <div className="flex gap-2.5 flex-wrap mb-5 mt-4">
          {["25", "50", "100", "250"].map((a) => (
            <button
              key={a}
              onClick={() => setDa(a)}
              className={`font-display font-bold text-[0.9rem] px-6 py-3 rounded-lg cursor-pointer transition-all ${
                da === a
                  ? "bg-gradient-to-br from-magenta to-hotpink text-white border-magenta"
                  : "bg-transparent text-text1 border border-border"
              }`}
            >
              ${a}/mo
            </button>
          ))}
        </div>
        <Btn>Donate Now</Btn>
      </Section>

      <Section className="py-16">
        <Label>Compliance</Label>
        <H2>Compliance isn't optional.</H2>
        <BList
          items={[
            "All donations tax-deductible as allowed by law",
            "Sponsorships include defined deliverables",
            "No recruiting promises or NIL guarantees",
            "NCAA, state, and institutional compliance",
          ]}
        />
      </Section>
    </>
  );
}
