/**
 * DecisionMock — single decision in deliberation. Plum-on-plum
 * with a 2px lavender top rule. § 15 components.
 */
export function DecisionMock() {
  return (
    <div
      className="border border-rule-light bg-plum-800"
      style={{ borderTop: "2px solid var(--purple-300)" }}
    >
      <div className="flex items-center justify-between border-b border-rule-light px-6 py-3.5">
        <span className="font-mono uppercase tracking-chrome3 text-[11px] text-purple-300">
          Decision · ERP Consolidation
        </span>
        <span className="inline-flex items-center gap-2 border border-purple-300 px-2.5 py-1 font-mono uppercase tracking-chrome text-[10px] text-purple-300">
          <span aria-hidden className="h-1.5 w-1.5 bg-purple-300" />
          In quorum
        </span>
      </div>

      <div className="space-y-6 px-6 py-7">
        <div>
          <p className="font-mono uppercase tracking-chrome3 text-[10px] text-muted-dark">
            Recommendation
          </p>
          <p className="mt-2.5 font-serif font-normal leading-[1.18] text-cream tracking-[-0.005em] text-[20px]">
            Migrate Acme onto NetSuite. Retire Beta&apos;s SAP B1 over a 90-day
            cutover. Preserve Beta&apos;s revenue-recognition workflow as a
            NetSuite SuiteScript.
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-mono uppercase tracking-chrome3 text-[10px] text-muted-dark">
            Convened
          </p>
          <div className="flex flex-wrap gap-2">
            <AgentPill name="Finance" tone="lead" />
            <AgentPill name="IT" tone="ok" />
            <AgentPill name="Operations" tone="ok" />
            <AgentPill name="Legal" tone="pending" />
          </div>
        </div>

        <div className="border border-rule-light bg-plum-900 p-4">
          <p className="font-mono uppercase tracking-chrome3 text-[10px] text-purple-300">
            Why
          </p>
          <ul className="mt-2 space-y-1.5 text-[13px] leading-snug text-cream">
            <li>· Acme runs 87% of post-close volume; lower migration risk.</li>
            <li>· $1.4M avoided in dual-license overlap, FY27.</li>
            <li>· 11 of 14 Beta vendor integrations already exist on NetSuite.</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-rule-light px-6 py-3.5">
        <span className="font-mono uppercase tracking-chrome2 text-[10px] text-muted-dark">
          Drafted by Finance agent · 2 min ago
        </span>
        <div className="flex items-center gap-2">
          <button className="border border-cream px-3.5 py-1.5 font-mono uppercase tracking-chrome text-[11px] text-cream hover:bg-cream hover:text-plum-900 transition-colors">
            Discuss
          </button>
          <button className="bg-purple px-3.5 py-1.5 font-mono uppercase tracking-chrome text-[11px] text-cream hover:bg-purple-400 transition-colors">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}

function AgentPill({
  name,
  tone,
}: {
  name: string;
  tone: "lead" | "ok" | "pending";
}) {
  const styles = {
    lead: "bg-purple text-cream border border-purple",
    ok: "bg-transparent text-purple-300 border border-purple-300",
    pending: "bg-transparent text-gold border border-gold",
  } as const;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 font-mono uppercase tracking-chrome text-[10px] ${styles[tone]}`}
    >
      {name}
    </span>
  );
}
