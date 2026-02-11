"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import { Label, H2, BList, Section, PageHero } from "@/components/ui";

export default function ParentsPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <PageHero label="For Parents" title="For Parents" sub="Transparency, standards, and honest communication." />

      <Section>
        <Label>Your Role</Label>
        <H2>What we ask of parents.</H2>
        <BList
          items={[
            "Support the development process — trust the staff and timeline",
            "Respect the 24-hour rule — no post-game playing time conversations",
            "Hold your athlete accountable at home",
            "Communicate through proper channels",
            "Understand: exposure ≠ readiness",
          ]}
        />
      </Section>

      <Section className="py-16">
        <Label color="purple">FAQ</Label>
        <H2>Common Questions</H2>
        <div className="max-w-[700px]">
          {FAQS.map((f, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between items-center w-full py-5 bg-transparent border-none cursor-pointer text-left"
              >
                <span className="font-display font-bold text-[0.9rem] text-text1 uppercase tracking-wide pr-4">
                  {f.q}
                </span>
                <span
                  className={`font-display text-xl text-magenta transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="font-body text-[0.95rem] text-text2 leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
