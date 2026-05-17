import { Container } from "../Container";
import { Reveal } from "../Reveal";

type Pair = {
  others: string;
  ours: string;
};

const PAIRS: Pair[] = [
  {
    others:
      "Workflow tools (Midaxo, DealRoom, Devensoft) track decisions but don't make them. They give you a Gantt chart for an integration. They tell you a decision is open. They don't tell you what the right answer is, what it costs to get wrong, or who needs to sign. That work still happens in Slack and in conference rooms.",
    ours:
      "We don't manage the integration like a project. We run it like a committee. Every decision produces a brief: the recommendation, the analysis behind it, the agents that concurred, the ones that didn't. You read it, you sign it, you override it. The next decision is already drafting.",
  },
  {
    others:
      "The Big Four sends a team. The team needs three months to learn your business — the same two companies their last team learned six months ago for a different client. You are paying $1,200 an hour for them to read 10-Ks.",
    ours:
      "Our agents read both companies in full — 10-Ks, prior earnings, every public filing, both companies' system inventories, active vendor MSAs, org charts, comp ladders. The integration starts with the underlying picture already drawn, not a junior consultant pulling 10-Ks at $1,200 an hour.",
  },
  {
    others:
      "The decision log gets assembled in March. The deal closed in November. The audit trail is reconstructed by junior consultants four months after close, working from email threads and meeting notes. Some decisions are missing. The IC gets a sanitized PDF. The lenders get a different one.",
    ours:
      "The log is the source of truth. It writes itself in real time. Every recommendation, approval, and override is captured the moment it happens, with full provenance. The IC, the lenders, and the SOX team read the same artifact. On the day you close, the integration is already documented.",
  },
];

export function OldWay() {
  return (
    <section className="border-t border-rule-light bg-plum-900 py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="font-serif font-light leading-[1.0] tracking-[-0.018em] text-cream text-[clamp(2.5rem,5.5vw,4.5rem)]">
            The old way vs. Quorum.
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16">
          {PAIRS.map((pair, i) => (
            <Reveal key={i}>
              <div className="grid grid-cols-1 gap-px border-t border-rule-light bg-rule-light md:grid-cols-2">
                <Card kicker="Others" body={pair.others} tone="muted" />
                <Card kicker="Quorum" body={pair.ours} tone="bright" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Card({
  kicker,
  body,
  tone,
}: {
  kicker: string;
  body: string;
  tone: "muted" | "bright";
}) {
  const isBright = tone === "bright";
  return (
    <div className={`p-9 md:p-12 ${isBright ? "bg-plum-800" : "bg-plum-900"}`}>
      <p
        className={`font-mono uppercase tracking-chrome3 text-[11px] ${
          isBright ? "text-purple-300" : "text-muted-dark"
        }`}
      >
        {kicker}
      </p>
      <p
        className={`mt-5 text-[16.5px] leading-[1.6] ${
          isBright ? "text-cream" : "text-muted-dark"
        }`}
      >
        {body}
      </p>
    </div>
  );
}
