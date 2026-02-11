"use client";

import { useState } from "react";
import { EVENTS } from "@/lib/data";
import { Glass, Label, H2, Sub, Pill, Chip, BList, Section, PageHero } from "@/components/ui";

export default function EventsPage() {
  const [tab, setTab] = useState<"scholars" | "club">("scholars");

  return (
    <>
      <PageHero label="Events" title="Events" sub="We participate in and operate events with different purposes." />

      {/* Tab bar */}
      <div className="bg-bg0/90 border-b border-border sticky top-16 z-50 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-6 flex">
          {([["scholars", "Our Events"], ["club", "Club Events"]] as const).map(([k, l]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`font-display font-bold text-[0.72rem] uppercase tracking-wider py-3.5 px-5 border-b-2 transition-all bg-transparent cursor-pointer ${
                tab === k ? "text-text1 border-magenta" : "text-muted border-transparent"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {tab === "scholars" && (
        <Section>
          <Label>Our Events</Label>
          <H2>Events we design, staff, and operate.</H2>

          {/* Featured */}
          <Glass glow className="mb-5" style={{ borderLeft: "3px solid #EC407A" }}>
            <div className="flex justify-between items-start flex-wrap gap-3">
              <div>
                <Pill color="#EC407A">FLAGSHIP</Pill>
                <h3 className="font-display font-extrabold text-xl text-text1 mt-2.5">🛣️ Turnpike Classic</h3>
                <p className="font-body text-[0.9rem] text-muted mt-1">Memorial Day Weekend • South Jersey</p>
                <p className="font-body text-text2 leading-relaxed mt-3">Premier girls basketball tournament operated by NJ Scholars Elite.</p>
              </div>
              <Chip v="ANNUAL" l="Status" />
            </div>
          </Glass>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {EVENTS.slice(1).map((ev, i) => (
              <Glass key={i}>
                <div className="flex justify-between items-start mb-2.5">
                  <h3 className="font-display font-bold text-text1">{ev.icon} {ev.name}</h3>
                  <Pill color={ev.status === "CONFIRMED" ? "#EC407A" : "rgba(255,255,255,0.55)"}>{ev.status}</Pill>
                </div>
                <p className="font-body text-[0.8rem] text-muted mb-2">{ev.date} • {ev.loc}</p>
                <p className="font-body text-[0.9rem] text-text2 leading-normal mb-2.5">{ev.purpose}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ev.tags.map((t, j) => <Pill key={j} color="rgba(255,255,255,0.12)">{t}</Pill>)}
                </div>
              </Glass>
            ))}
          </div>
        </Section>
      )}

      {tab === "club" && (
        <Section>
          <Label color="purple">Club Events</Label>
          <H2>Where our teams compete.</H2>
          <Sub>Selected for competition quality and development value — not hype.</Sub>
          <Glass>
            <BList
              items={[
                "Spring & Summer Tournaments (Northeast / Mid-Atlantic)",
                "Select National Exposure Events (HS)",
                "Invitational-only competitions",
              ]}
              color="purple"
            />
            <p className="font-body text-[0.85rem] text-muted italic mt-5">
              Schedules shared directly with families. We don't chase every showcase.
            </p>
          </Glass>
        </Section>
      )}
    </>
  );
}
