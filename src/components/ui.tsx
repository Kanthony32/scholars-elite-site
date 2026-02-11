"use client";

import { ReactNode, useState } from "react";

/* ─── Scanline Overlay ─── */
export function Scanlines() {
  return <div className="scanlines" />;
}

/* ─── Energy Streak ─── */
export function Streak({
  top = "20%",
  rot = "-25deg",
  color = "magenta",
}: {
  top?: string;
  rot?: string;
  color?: "magenta" | "purple";
}) {
  const c = color === "purple" ? "#9C27B0" : "#EC407A";
  return (
    <div
      className="energy-streak"
      style={{ top, transform: `rotate(${rot})`, ["--streak-color" as string]: c }}
    />
  );
}

/* ─── Glass Card ─── */
export function Glass({
  children,
  className = "",
  glow = false,
  onClick,
  style,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <div
      onClick={onClick}
      className={`glass ${glow ? "glass-glow" : ""} p-6 ${onClick ? "cursor-pointer" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ─── Stat Chip (scoreboard strip) ─── */
export function Chip({
  v,
  l,
  color = "magenta",
}: {
  v: string;
  l: string;
  color?: "magenta" | "purple";
}) {
  const c = color === "purple" ? "bg-purple shadow-[0_0_8px_#9C27B0]" : "bg-magenta shadow-[0_0_8px_#EC407A]";
  return (
    <div className="inline-flex items-center gap-2.5 bg-surface border border-border rounded-full px-4 py-2">
      <div className={`w-1.5 h-1.5 rounded-full ${c}`} />
      <span className="font-display font-bold text-[0.95rem] text-text1">{v}</span>
      <span className="font-body text-[0.7rem] text-muted uppercase tracking-wider">{l}</span>
    </div>
  );
}

/* ─── Section Label (lower-third) ─── */
export function Label({
  children,
  color = "magenta",
}: {
  children: ReactNode;
  color?: "magenta" | "purple" | "muted";
}) {
  const cls =
    color === "purple"
      ? "text-purple"
      : color === "muted"
        ? "text-muted"
        : "text-magenta";
  const bg =
    color === "purple"
      ? "bg-purple shadow-[0_0_6px_#9C27B0]"
      : color === "muted"
        ? "bg-muted"
        : "bg-magenta shadow-[0_0_6px_#EC407A]";
  const line =
    color === "purple" ? "#9C27B0" : color === "muted" ? "rgba(255,255,255,0.3)" : "#EC407A";
  return (
    <div className="flex items-center gap-3 mb-3.5">
      <div className={`w-5 h-0.5 ${color === "purple" ? "bg-purple" : color === "muted" ? "bg-muted" : "bg-magenta"}`} />
      <span className={`font-display font-bold text-[0.7rem] uppercase tracking-[0.12em] ${cls}`}>
        {children}
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: `linear-gradient(90deg, rgba(255,255,255,0.1), transparent)` }}
      />
      <div className={`w-1 h-1 rotate-45 ${bg}`} />
    </div>
  );
}

/* ─── Section Heading ─── */
export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] text-text1 leading-[1.1] tracking-tight mb-3.5">
      {children}
    </h2>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return (
    <p className="font-body text-[1.05rem] text-text2 leading-relaxed max-w-[580px] mb-7">
      {children}
    </p>
  );
}

/* ─── Pill Tag ─── */
export function Pill({
  children,
  color = "magenta",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span
      className="font-display font-semibold text-[0.6rem] uppercase tracking-wider rounded-full px-3 py-1 inline-block"
      style={{
        color,
        background: `${color}15`,
        border: `1px solid ${color}30`,
      }}
    >
      {children}
    </span>
  );
}

/* ─── Button ─── */
export function Btn({
  children,
  onClick,
  primary = true,
  gold = false,
  href,
}: {
  children: ReactNode;
  onClick?: () => void;
  primary?: boolean;
  gold?: boolean;
  href?: string;
}) {
  const cls = primary
    ? `btn-sheen text-white ${gold ? "bg-gradient-to-br from-gold to-[#B8962E]" : "bg-gradient-to-br from-magenta to-hotpink"}`
    : "bg-transparent text-text1 border border-border hover:border-border2";

  const inner = (
    <button
      onClick={onClick}
      className={`font-display font-bold text-[0.75rem] uppercase tracking-wider px-8 py-3.5 rounded-lg cursor-pointer transition-all ${cls}`}
    >
      {children}
    </button>
  );

  if (href) {
    return <a href={href}>{inner}</a>;
  }
  return inner;
}

/* ─── Bullet List ─── */
export function BList({
  items,
  color = "magenta",
}: {
  items: string[];
  color?: "magenta" | "purple";
}) {
  const dot = color === "purple" ? "bg-purple shadow-[0_0_8px_#9C27B0]" : "bg-magenta shadow-[0_0_8px_#EC407A]";
  return (
    <div className="flex flex-col gap-3.5">
      {items.map((t, i) => (
        <div key={i} className="flex gap-3.5 items-start">
          <div className={`w-1.5 h-1.5 min-w-[6px] rounded-full mt-2 ${dot}`} />
          <p className="font-body text-[0.95rem] text-text2 leading-relaxed">{t}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── Section Wrapper ─── */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-24 px-6 overflow-hidden ${className}`}>
      <div className="max-w-[1200px] mx-auto relative z-[2]">{children}</div>
    </section>
  );
}

/* ─── Page Hero ─── */
export function PageHero({
  label,
  title,
  sub,
  labelColor = "magenta",
}: {
  label: string;
  title: string;
  sub: string;
  labelColor?: "magenta" | "purple";
}) {
  return (
    <section className="relative pt-36 pb-20 px-6 bg-gradient-to-br from-bg0 to-bg1 overflow-hidden">
      <Scanlines />
      <Streak top="30%" />
      <div className="max-w-[1200px] mx-auto relative z-[2]">
        <Label color={labelColor}>{label}</Label>
        <h1 className="font-display font-extrabold text-[clamp(2.4rem,5.5vw,3.8rem)] text-text1 leading-[1.08] tracking-tight mb-4">
          {title}
        </h1>
        <p className="font-body text-lg text-text2 leading-relaxed max-w-[550px]">{sub}</p>
      </div>
    </section>
  );
}
