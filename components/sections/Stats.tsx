import { Container } from "../Container";

/**
 * Tight stats strip beneath the deliverable, fed10 pattern.
 * Big serif numerals with italic lavender units. No section header.
 */
const STATS = [
  { value: "$2–5", unit: "M", label: "Consulting spend per deal" },
  { value: "3", unit: "wks", label: "Kickoff to first decisions logged" },
  { value: "Day 1", unit: "", label: "Integration audit-ready" },
];

export function Stats() {
  return (
    <section className="border-y border-rule-light bg-plum-900">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-rule-light md:grid-cols-3 md:divide-y-0 md:divide-x">
          {STATS.map((s) => (
            <div key={s.label} className="px-2 py-10 md:px-6 md:py-12">
              <p className="font-serif font-light leading-none text-cream tracking-[-0.03em] text-[clamp(3rem,5.5vw,5rem)]">
                {s.value}
                {s.unit ? (
                  <span
                    className="italic text-purple-300"
                    style={{ fontSize: "0.45em" }}
                  >
                    {s.unit}
                  </span>
                ) : null}
              </p>
              <p className="mt-4 font-mono uppercase tracking-chrome2 text-[11px] text-muted-dark">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
