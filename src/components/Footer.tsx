import Link from "next/link";

const links = ["About", "Programs", "Teams", "Events", "Support", "Apply"];

export default function Footer() {
  return (
    <footer className="bg-bg0 border-t border-border py-12 px-6 relative">
      <div className="max-w-[1200px] mx-auto text-center">
        <img
          src="/assets/logo.png"
          alt="SE"
          className="w-10 h-10 mx-auto mb-2.5 object-contain opacity-70"
        />
        <div className="font-display font-bold text-[0.75rem] text-text2 tracking-[0.12em] uppercase mb-4">
          Scholars Elite Girls Basketball
        </div>
        <div className="flex justify-center gap-5 flex-wrap mb-6">
          {links.map((s) => (
            <Link
              key={s}
              href={`/${s.toLowerCase()}`}
              className="text-muted font-body text-[0.65rem] uppercase tracking-wider no-underline hover:text-magenta transition-colors"
            >
              {s}
            </Link>
          ))}
        </div>
        <div className="font-body text-[0.6rem] text-muted">
          © 2026 Scholars Elite — A Westview Group Program • 25+ Years Grassroots
          Experience
        </div>
      </div>
    </footer>
  );
}
