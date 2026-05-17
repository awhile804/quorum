import { Container } from "../Container";
import { Reveal } from "../Reveal";

type Phase = {
  kicker: string;
  title: string;
  body: string;
};

const PHASES: Phase[] = [
  {
    kicker: "Year One · The Wedge",
    title: "Post-Merger Integration",
    body: "Sold to mid-market acquirers and PE platforms running serial M&A. We replace the post-close consulting workstream — the same decision log, faster, with the analysis attached. The committee runs months of cross-functional alignment in days.",
  },
  {
    kicker: "Year Three+ · The Platform",
    title: "The Corporate Brain",
    body: "Post-close, the agents do not leave. The same committee that ran the integration continues weighing in on what comes next: reorganisations, divestitures, the strategic calls the combined company has to make. The system of record for every cross-functional decision that follows.",
  },
];

export function Thesis() {
  return (
    <section className="border-t border-rule-light bg-plum-900 py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-5xl font-serif font-light leading-[1.0] tracking-[-0.018em] text-cream text-[clamp(2.5rem,5.5vw,4.5rem)]">
            Integration is the wedge.
            <br />
            <span className="text-purple-300">
              The brain is what we&apos;re building.
            </span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-prose2 text-[18px] leading-[1.6] text-muted-dark">
            Integration is the rare moment a business is forced to
            collaborate cross-functionally and assert its priorities
            clearly. We use that moment to install the layer that runs
            every cross-functional decision afterwards.
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
