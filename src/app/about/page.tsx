import Link from "next/link";
import { Glass, Label, H2, Btn, Section, PageHero } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      <PageHero label="About" title="Who We Are" sub="A development-first girls basketball program built on structure, honest evaluation, and long-term growth." />

      <Section>
        <Label>Why We Exist</Label>
        <H2>The problem is structural.</H2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="font-body text-[1.05rem] text-text2 leading-relaxed">
              Grassroots girls basketball runs on noise — rankings over development, hype over preparation. Families are sold on exposure before athletes are ready.
            </p>
            <p className="font-display font-bold text-lg text-magenta mt-4">NJ Scholars Elite exists to fix that.</p>
          </div>
          <Glass className="!p-8">
            <h3 className="font-display font-bold text-[0.8rem] uppercase tracking-wider text-magenta mb-4">The NJ Scholars Standard</h3>
            {["Accountability over entitlement", "Coachability is non-negotiable", "Academic responsibility", "Family communication and trust", "No guaranteed minutes — earned", "Process over promises"].map((s, i) => (
              <div key={i} className="flex gap-2.5 mb-2.5">
                <div className="w-[5px] h-[5px] min-w-[5px] rounded-full bg-magenta mt-[7px] shadow-[0_0_6px_#EC407A]" />
                <span className="font-body text-[0.9rem] text-text2">{s}</span>
              </div>
            ))}
          </Glass>
        </div>
      </Section>

      <Section className="py-16">
        <Label color="purple">Recruiting Stance</Label>
        <H2>Earned, not sold.</H2>
        <p className="font-body text-[1.05rem] text-text2 leading-relaxed max-w-[600px]">
          We do not guarantee scholarships, inflate evaluations, or promise exposure. Fit matters more than prestige. Readiness over rush.
        </p>
      </Section>

      <section className="py-16 px-6 text-center bg-gradient-to-br from-bg0 to-bg1 border-t border-border">
        <div className="max-w-[700px] mx-auto">
          <Label>Join Us</Label>
          <H2>A program for families who want real development.</H2>
          <div className="flex gap-3.5 justify-center flex-wrap mt-5">
            <Link href="/apply"><Btn>Apply Now</Btn></Link>
          </div>
        </div>
      </section>
    </>
  );
}
