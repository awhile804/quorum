/**
 * FunctionsMock — function-agent profile cards on plum-800.
 * Hard rectangles, 2px lavender top rule, lavender numerals.
 */

const AGENTS = [
  {
    fn: "Finance",
    holds: "Cap structure · ERPs · revenue rec · vendor spend",
    ready: 24,
  },
  {
    fn: "IT",
    holds: "App inventory · contracts · IAM · endpoints",
    ready: 31,
  },
  {
    fn: "HR",
    holds: "Headcount · comp · titles · benefits",
    ready: 18,
  },
  {
    fn: "R&D",
    holds: "IP portfolio · roadmaps · patents · research",
    ready: 17,
  },
  {
    fn: "Operations",
    holds: "Suppliers · 3PL · cycle counts · BOMs",
    ready: 21,
  },
  {
    fn: "Legal & Compliance",
    holds: "MSAs · NDAs · policy · regulatory",
    ready: 12,
  },
  {
    fn: "Sales & GTM",
    holds: "Pipeline · pricing · territories · CRM",
    ready: 15,
  },
];

export function FunctionsMock() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {AGENTS.map((a) => (
        <div
          key={a.fn}
          className="border border-rule-light bg-plum-800 p-5"
          style={{ borderTop: "2px solid var(--purple-300)" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-[20px] leading-none text-cream tracking-[-0.005em]">
              {a.fn}
            </span>
            <span className="font-mono uppercase tracking-chrome2 text-[10px] text-purple-300">
              Online
            </span>
          </div>
          <p className="mt-4 font-mono uppercase tracking-chrome3 text-[10px] text-muted-dark">
            Holds
          </p>
          <p className="mt-1.5 text-[13px] leading-snug text-cream">{a.holds}</p>
          <div className="mt-5 flex items-end justify-between border-t border-rule-light pt-3">
            <span className="font-mono uppercase tracking-chrome2 text-[10px] text-muted-dark">
              Decisions ready
            </span>
            <span className="font-serif text-[24px] leading-none text-cream tracking-[-0.02em]">
              {a.ready}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
