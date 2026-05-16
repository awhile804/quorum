/**
 * LogMock — audit-grade timeline. Hard rectangles, mono caps headers,
 * 2px lavender top rule. § 15.
 */
const ENTRIES = [
  {
    time: "Day 14 · 14:22",
    actor: "Finance agent",
    title: "Recommended: NetSuite as system of record",
    detail: "3 of 4 functions concur · pending Legal sign-off",
    state: "open" as const,
  },
  {
    time: "Day 14 · 11:08",
    actor: "Operations agent",
    title: "Concurred: Memphis as primary distribution hub",
    detail: "Reno retained for West-coast SLA cohort",
    state: "open" as const,
  },
  {
    time: "Day 13 · 17:41",
    actor: "Morgan W. · CFO",
    title: "Approved: Datadog as observability standard",
    detail: "Effective Day 30 · CFO-signed",
    state: "signed" as const,
  },
  {
    time: "Day 13 · 09:15",
    actor: "HR agent",
    title: "Drafted: Sales-engineering comp band v2",
    detail: "Quorum convened with Finance, GTM",
    state: "open" as const,
  },
];

export function LogMock() {
  return (
    <div
      className="border border-rule-light bg-plum-800"
      style={{ borderTop: "2px solid var(--purple-300)" }}
    >
      <div className="flex items-center justify-between border-b border-rule-light px-6 py-3.5">
        <span className="font-mono uppercase tracking-chrome3 text-[11px] text-purple-300">
          Decision Log · Acme × Beta
        </span>
        <span className="font-mono uppercase tracking-chrome2 text-[10px] text-gold">
          Audit-ready · CSV export
        </span>
      </div>

      <ol>
        {ENTRIES.map((e, i) => (
          <li
            key={i}
            className="grid grid-cols-12 gap-4 border-b border-rule-light px-6 py-4 last:border-b-0"
          >
            <span className="col-span-12 md:col-span-3 font-mono uppercase tracking-chrome2 text-[10px] text-muted-dark">
              {e.time}
            </span>
            <div className="col-span-12 md:col-span-9">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono uppercase tracking-chrome2 text-[10px] text-purple-300">
                  {e.actor}
                </span>
                {e.state === "signed" ? (
                  <span className="font-mono uppercase tracking-chrome text-[10px] text-gold border border-gold px-1.5 py-0.5">
                    Signed
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-[14px] text-cream">{e.title}</p>
              <p className="mt-1 text-[12px] text-muted-dark">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
