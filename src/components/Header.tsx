"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, TEAMS } from "@/lib/data";
import { Btn } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [teamsOpen, setTeamsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setTeamsOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setTeamsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isTeamPage = pathname.startsWith("/teams");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[999] backdrop-blur-2xl transition-all duration-400 ${
          scrolled
            ? "bg-bg0/95 border-b border-border"
            : "bg-bg1/70 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <img
              src="/assets/logo.png"
              alt="Scholars Elite"
              className="w-[38px] h-[38px] object-contain"
            />
            <div>
              <div className="font-display font-extrabold text-[0.85rem] text-text1 tracking-wider uppercase leading-none">
                Scholars Elite
              </div>
              <div className="font-body text-[0.55rem] text-magenta tracking-[0.15em] uppercase mt-0.5">
                Girls Basketball
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`relative text-[0.7rem] font-display font-semibold uppercase tracking-wider px-3 py-2 transition-colors no-underline ${
                  isActive(n.href) ? "text-magenta" : "text-muted hover:text-text1"
                }`}
              >
                {n.label}
                {isActive(n.href) && (
                  <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3/5 h-0.5 bg-gradient-to-r from-magenta to-purple rounded-full" />
                )}
              </Link>
            ))}

            {/* Teams dropdown */}
            <div ref={ref} className="relative">
              <button
                onClick={() => setTeamsOpen(!teamsOpen)}
                className={`text-[0.7rem] font-display font-semibold uppercase tracking-wider px-3 py-2 bg-transparent border-none cursor-pointer ${
                  isTeamPage ? "text-magenta" : "text-muted hover:text-text1"
                }`}
              >
                Teams ▾
              </button>
              {teamsOpen && (
                <div className="absolute top-full right-0 mt-2 bg-bg1/97 backdrop-blur-xl border border-border rounded-xl p-3 min-w-[200px] z-[1000] shadow-[0_16px_48px_rgba(0,0,0,0.6)]">
                  <Link
                    href="/teams"
                    className="block text-[0.7rem] font-display font-bold uppercase tracking-wider text-magenta px-3 py-2 no-underline"
                  >
                    All Teams
                  </Link>
                  <div className="h-px bg-border mx-2 my-1" />
                  {TEAMS.map((t) => (
                    <Link
                      key={t.id}
                      href={`/teams/${t.id}`}
                      className="block text-[0.68rem] font-body text-text2 px-3 py-1.5 rounded-md no-underline hover:bg-surface hover:text-magenta transition-all"
                    >
                      {t.name}{" "}
                      <span className="text-muted text-[0.6rem]">• {t.track}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/apply">
              <Btn>Register</Btn>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden bg-transparent border-none cursor-pointer p-2"
          >
            <div className="w-[22px] flex flex-col gap-[5px]">
              <span
                className={`h-0.5 bg-magenta block transition-all ${
                  mobileOpen ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`h-0.5 bg-magenta block transition-all ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 bg-magenta block transition-all ${
                  mobileOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-bg0 z-[998] pt-20 flex flex-col items-center gap-1 overflow-y-auto">
          <img
            src="/assets/logo.png"
            alt="SE"
            className="w-14 h-14 mb-5 object-contain"
          />
          {[...NAV_LINKS, { label: "Teams", href: "/teams" }, { label: "Register", href: "/apply" }].map(
            (n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`font-display font-bold text-xl uppercase tracking-wider py-2.5 px-6 no-underline ${
                  isActive(n.href) ? "text-magenta" : "text-text1"
                }`}
              >
                {n.label}
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
}
