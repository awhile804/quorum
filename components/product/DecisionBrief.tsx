/**
 * DecisionBrief — the deliverable. A signed brief produced by the
 * Finance agent, with quorum positions, exposure stats, and the
 * recommended next action.
 *
 * Replates from the previous "soft cream + green/red" treatment to
 * the Quorum Standard's plum-on-plum elevation with lavender accents.
 * Hard geometry, no rounded corners, 2px lavender top rule. § 15.
 */

const QUORUM = [
  {
    fn: "Finance",
    position: "Concur",
    tone: "ok" as const,
    note: "$1.4M avoided in dual-license overlap, FY27.",
  },
  {
    fn: "IT",
    position: "Concur",
    tone: "ok" as const,
    note: "11 of 14 Beta vendor integrations exist on NetSuite.",
  },
  {
    fn: "Operations",
    position: "Concur",
    tone: "ok" as const,
    note: "Cycle counts and 3PL tie-out covered.",
  },
  {
    fn: "Legal",
    position: "Conditional",
    tone: "warn" as const,
    note: "Two Beta MSAs have ERP-named clauses; needs 30-day cure.",
  },
];

export function DecisionBrief() {
  return (
    <div className="relative">
      <div className="border border-rule-light bg-plum-800">
        {/* Top header strip */}
        <div className="flex items-center justify-between border-b border-rule-light bg-plum-900/60 px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-purple-300" aria-hidden />
            <span className="font-mono uppercase tracking-chrome3 text-[10px] text-purple-300">
              Decision · D-117
            </span>
            <span className="text-muted-dark" aria-hidden>·</span>
            <span className="font-mono uppercase tracking-chrome2 text-[10px] text-cream">
              Acme × Beta
            </span>
          </div>
          <span className="font-mono uppercase tracking-chrome2 text-[10px] text-muted-dark">
            Drafted by Finance agent · 47m ago
          </span>
        </div>

        {/* Title row — 2px lavender top rule */}
        <div className="border-b border-rule-light px-6 py-7 md:px-8">
          <p className="font-mono uppercase tracking-chrome3 text-[11px] text-purple-300">
            Recommendation
          </p>
          <h3 className="mt-3 font-serif font-normal leading-[1.08] tracking-[-0.008em] text-cream text-[clamp(1.5rem,2.6vw,2rem)]">
            Migrate Acme onto NetSuite. Retire Beta&apos;s SAP B1 over a 90-day
            cutover.
          </h3>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Chip tone="solid">In quorum · 3 of 4</Chip>
            <Chip tone="hollow">Routed to Sarah Chen, CFO</Chip>
            <Chip tone="gold">Escalates Friday EOD</Chip>
          </div>
        </div>

        {/* Body grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-rule-light">
          <div className="space-y-7 px-6 py-7 md:px-8">
            <Section label="The Call">
              <p>
                Acme runs 87% of post-close volume. Lower migration risk and
                lower run-rate cost. Preserve Beta&apos;s revenue-recognition
                workflow as a NetSuite SuiteScript so finance close holds.
              </p>
            </Section>

            <Section label="Precedent">
              <p>
                Three of the last five mid-market integrations ($200M–$800M EV)
                consolidated to NetSuite when the larger entity already ran it.
                Average cutover: 76 days. Closest analog: Hartwell × Cordura,
                FY24.
              </p>
            </Section>

            <Section label="Exposure">
              <div className="grid grid-cols-3 gap-4 pt-1">
                <Stat figure="$1.4" unit="M" caption="annual run-rate" />
                <Stat figure="$310" unit="K" caption="cutover spend" />
                <Stat figure="90" unit="d" caption="timeline" />
              </div>
            </Section>
          </div>

          <div className="space-y-4 px-6 py-7 md:px-8">
            <p className="font-mono uppercase tracking-chrome3 text-[11px] text-purple-300">
              Quorum
            </p>
            <ul className="space-y-4">
              {QUORUM.map((q) => (
                <li
                  key={q.fn}
                  className="border-l-2 pl-4"
                  style={{
                    borderLeftColor:
                      q.tone === "warn" ? "var(--gold)" : "var(--purple-300)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-medium text-cream">
                      {q.fn} agent
                    </span>
                    <span
                      className={`font-mono uppercase tracking-chrome3 text-[10px] ${
                        q.tone === "warn" ? "text-gold" : "text-purple-300"
                      }`}
                    >
                      {q.position}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-snug text-muted-dark">
                    {q.note}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-3 border border-rule-light bg-plum-900 p-4">
              <p className="font-mono uppercase tracking-chrome3 text-[11px] text-gold">
                Action
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-cream">
                Awaiting CFO sign-off. If silent at Friday EOD, brief
                auto-escalates to CEO with Legal&apos;s 30-day cure attached as
                a precondition.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule-light px-6 py-3.5">
          <span className="font-mono uppercase tracking-chrome2 text-[10px] text-muted-dark">
            23 supporting analyses · 4 contracts re-read · 1.2k vendor lines diffed
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono uppercase tracking-chrome2 text-[11px] text-purple-300 border-b border-purple-300">
              View analysis →
            </span>
            <span className="bg-purple px-3 py-1.5 font-mono uppercase tracking-chrome text-[11px] text-cream">
              Approve
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="font-mono uppercase tracking-chrome3 text-[10px] text-purple-300">
        {label}
      </p>
      <div className="mt-2.5 text-[14px] leading-[1.55] text-cream">
        {children}
      </div>
    </div>
  );
}

function Stat({
  figure,
  unit,
  caption,
}: {
  figure: string;
  unit?: string;
  caption: string;
}) {
  return (
    <div>
      <p className="font-serif text-[28px] leading-none text-cream tracking-[-0.02em]">
        {figure}
        {unit ? (
          <span className="italic text-purple-300" style={{ fontSize: "0.55em" }}>
            {unit}
          </span>
        ) : null}
      </p>
      <p className="mt-2 font-mono uppercase tracking-chrome2 text-[10px] text-muted-dark">
        {caption}
      </p>
    </div>
  );
}

function Chip({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone: "solid" | "hollow" | "gold";
}) {
  const styles = {
    solid: "bg-purple text-cream border border-purple",
    hollow: "bg-transparent text-purple-300 border border-purple-300",
    gold: "bg-transparent text-gold border border-gold",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 font-mono uppercase tracking-chrome text-[11px] ${styles[tone]}`}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5"
        style={{ background: "currentColor" }}
      />
      {children}
    </span>
  );
}
