import { Container } from "../Container";
import { Reveal } from "../Reveal";

type Phase = {
  kicker: string;
  title: string;
  body: string;
};

const PHASES: Phase[] = [
  {
    kicker: "During",
    title: "We run the integration.",
    body: "Functional agents take in your systems, contracts, headcount, and process maps from both sides. They convene on demand, surface the conflicts, propose dispositioning, and route every recommendation to your functional leads for sign-off — each one with the analysis attached, captured in a decision log that writes itself.",
  },
  {
    kicker: "After close",
    title: "We stay on.",
    body: "The committee does not pack up. The agents keep holding the context they built — every decision you made, why you made it, what depended on what. They convene again the next time the business has to think clearly: a reorganisation, a divestiture, the next acquisition. The same room you used to consolidate, used to run.",
  },
];

export function Thesis() {
  return (
    <section className="border-t border-rule-light bg-plum-900 py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-5xl font-serif font-light leading-[1.0] tracking-[-0.018em] text-cream text-[clamp(2.5rem,5.5vw,4.5rem)]">
            When the integration ends,
            <br />
            <span className="text-purple-300">we don&apos;t.</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-prose2 text-[18px] leading-[1.6] text-muted-dark">
            Most integration teams ship a binder and disband. The agents
            we deploy keep working. The committee that ran your
            consolidation becomes the layer your business uses to make
            cross-functional decisions afterwards.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px border-t border-rule-light bg-rule-light md:grid-cols-2">
          {PHASES.map((phase) => (
            <Reveal key={phase.kicker}>
              <Card {...phase} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Card({ kicker, title, body }: Phase) {
  return (
    <div
      className="h-full bg-plum-800 p-9 md:p-12"
      style={{ borderTop: "2px solid var(--purple-300)" }}
    >
      <p className="font-mono uppercase tracking-chrome3 text-[11px] text-purple-300">
        {kicker}
      </p>
      <h3 className="mt-5 font-serif font-light leading-[1.05] tracking-[-0.012em] text-cream text-[clamp(1.875rem,3.6vw,2.875rem)]">
        {title}
      </h3>
      <p className="mt-6 text-[16.5px] leading-[1.6] text-muted-dark">
        {body}
      </p>
    </div>
  );
}
