"use client";

import { useState } from "react";
import { TEAMS } from "@/lib/data";
import { Scanlines, Streak, Glass, Label, H2, Btn, Section, Noise } from "@/components/ui";

export default function ApplyPage() {
  const [fm, setFm] = useState({ n: "", g: "", p: "", e: "", t: "", m: "" });
  const u = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFm((prev) => ({ ...prev, [k]: e.target.value }));

  const inputCls =
    "w-full px-4 py-3.5 border border-border rounded-lg font-body text-[0.95rem] text-text1 bg-surface backdrop-blur-sm outline-none focus:border-magenta focus:shadow-[0_0_0_2px_rgba(236,64,122,0.15)] transition-all";
  const labelCls =
    "block font-display font-bold text-[0.65rem] text-muted uppercase tracking-[0.1em] mb-1.5";
  const selectBg = { background: "#0B1020" };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 bg-gradient-to-br from-bg0 to-bg1 overflow-hidden">
        <Scanlines />
        <Noise opacity={0.15} />
        <Streak top="30%" />
        <div className="max-w-[1200px] mx-auto relative z-[2]">
          <Label>Join Us</Label>
          <h1 className="font-display font-extrabold text-[clamp(2.4rem,5.5vw,3.8rem)] text-text1 leading-[1.08] tracking-tight mb-4">
            Apply to Scholars Elite
          </h1>
          <p className="font-body text-lg text-text2 leading-relaxed max-w-[550px]">
            Fill out the form and our staff will follow up within 48 hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <Section>
        <div className="max-w-[600px]">
          <Label>Application</Label>
          <H2>Player Information</H2>
          <div className="flex flex-col gap-5 mt-6">
            <div>
              <label className={labelCls}>Athlete Name</label>
              <input type="text" placeholder="Full name" value={fm.n} onChange={u("n")} className={inputCls} />
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className={labelCls}>Grad Year</label>
                <select value={fm.g} onChange={u("g")} className={`${inputCls} cursor-pointer`}>
                  <option value="">Select</option>
                  {["2026", "2027", "2028", "2029", "2030", "2031"].map((y) => (
                    <option key={y} style={selectBg}>{y}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>Position</label>
                <select value={fm.p} onChange={u("p")} className={`${inputCls} cursor-pointer`}>
                  <option value="">Select</option>
                  {["PG", "SG", "SF", "PF", "C", "G/F"].map((p) => (
                    <option key={p} style={selectBg}>{p}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>Parent Email</label>
              <input type="email" placeholder="email@example.com" value={fm.e} onChange={u("e")} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Team Interest</label>
              <select value={fm.t} onChange={u("t")} className={`${inputCls} cursor-pointer`}>
                <option value="">Select</option>
                {TEAMS.map((t) => (
                  <option key={t.id} value={t.id} style={selectBg}>{t.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls}>Additional Info</label>
              <textarea
                rows={4}
                placeholder="School, experience, goals..."
                value={fm.m}
                onChange={u("m")}
                className={`${inputCls} resize-y`}
              />
            </div>
            <Btn onClick={() => alert("Application submitted! (Demo)")}>Submit Application</Btn>
          </div>
        </div>
      </Section>

      {/* Next Steps */}
      <Section>
        <Label color="purple">Next Steps</Label>
        <H2>After you apply.</H2>
        <div className="max-w-[600px]">
          {[
            ["01", "Staff reviews within 48 hours."],
            ["02", "Email with evaluation/tryout details."],
            ["03", "In-person evaluation before placement."],
            ["04", "Program overview and commitment expectations."],
          ].map(([n, t], i) => (
            <div
              key={i}
              className={`flex gap-5 py-[18px] ${i < 3 ? "border-b border-border" : ""}`}
            >
              <div className="font-display font-extrabold text-[1.4rem] gradient-text bg-gradient-to-br from-magenta to-purple min-w-[36px]">
                {n}
              </div>
              <p className="font-body text-[0.95rem] text-text2 leading-relaxed m-0">{t}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
