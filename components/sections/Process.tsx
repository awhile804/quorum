import { Container } from "../Container";
import { Reveal } from "../Reveal";

const STEPS = [
  {
    number: "01",
    title: "We onboard the deal",
    body:
      "We pull everything public — 10-Ks, prior earnings, every filing, every press release — and connect to both companies' systems: ERPs, CLM, HRIS, ITSM, ticketing, code repos, the warehouse. Every agent builds a working model of its function across both companies: system inventory, active contracts, comp ladder, operating cadence, technical debt. Within a week the integration has a baseline that takes a Big Four team three months to assemble. Day 1 produces decisions, not onboarding.",
  },
  {
    number: "02",
    title: "We map every decision",
    body:
      "Decision discovery. The agents enumerate every cross-functional decision the integration will require — the ERP, the CLM, the comp bands, the warehouse footprint, the territory redesign, the IP roll-up, the entity structure. Several hundred for a mid-market deal. Each is sized by exposure, sequenced by interdependency, and triaged by reversibility. Leadership sees the whole tree before anyone argues about the first branch.",
  },
  {
    number: "03",
    title: "We run quorums",
    body:
      "Each decision routes to the relevant agents. They draft, work through the conflicts, model trade-offs against the synergy plan, and produce a brief — the recommendation, the analytical work, who concurred, who didn't. Leadership signs or pushes back. Approvals roll into the next set of decisions automatically. By Day 90 the decision log is complete and audit-ready.",
  },
];

export function Process() {
  return (
    <section className="border-t border-rule-light bg-plum-900 py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="font-serif font-light leading-[1.0] tracking-[-0.018em] text-cream text-[clamp(2.5rem,5.5vw,4.5rem)]">
            Our Process
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 60}>
              <div className="grid grid-cols-1 gap-8 border-t border-rule-light py-12 md:grid-cols-12 md:gap-14 md:py-16">
                <div className="md:col-span-4">
                  <p className="font-mono uppercase tracking-chrome2 text-[12px] text-purple-300">
                    {step.number} —
                  </p>
                  <h3 className="mt-4 font-serif font-light leading-[1.08] tracking-[-0.01em] text-cream text-[clamp(1.625rem,2.8vw,2.25rem)]">
                    {step.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="max-w-prose2 text-[16.5px] leading-[1.6] text-muted-dark">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
