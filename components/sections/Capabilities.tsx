import { Container } from "../Container";
import { Reveal } from "../Reveal";
import { FunctionsMock } from "../product/FunctionsMock";
import { DecisionMock } from "../product/DecisionMock";
import { LogMock } from "../product/LogMock";

/**
 * Capabilities — fed10 pattern. Each row leads with a direct, sentence-
 * length claim and a paired product visual. No § indices, no eyebrows.
 */
const ROWS = [
  {
    headline: (
      <>
        Reads every system. Knows what each function actually{" "}
        <span className="text-purple-300">owns</span>.
      </>
    ),
    body:
      "Finance, IT, HR, Legal, Operations, R&D, GTM — each function gets a dedicated agent. Each agent connects to its own systems (ERPs, CLM, HRIS, ITSM, ticketing, code repos), runs analytical tooling built for the work, and keeps a current picture of both companies: contracts, comp bands, app inventory, operating cadence.",
    visual: <FunctionsMock />,
    flip: false,
  },
  {
    headline: (
      <>
        What a $5M consulting team would tell you.{" "}
        <span className="text-purple-300">On every decision.</span>
      </>
    ),
    body:
      "When a decision touches more than one function, the relevant agents convene. They surface where the two companies disagree, model the trade-offs against your synergy plan, and produce a single brief with the analytical work attached. A CFO can read it in five minutes and either approve or push back.",
    visual: <DecisionMock />,
    flip: true,
  },
  {
    headline: (
      <>
        Audit-grade.{" "}
        <span className="text-purple-300">
          By construction, not reconstruction.
        </span>
      </>
    ),
    body:
      "Every recommendation, approval, and override is logged automatically with full provenance — which data the agents pulled, which contracts they referenced, who signed, when, and what they overrode. On close, the integration exports as a single audit-ready record. PE investment committees, lender covenants, and SOX teams read the same artifact.",
    visual: <LogMock />,
    flip: false,
  },
];

export function Capabilities() {
  return (
    <section
      id="how"
      className="relative border-t border-rule-light bg-plum-900 py-24 md:py-32"
    >
      <Container>
        <div className="space-y-24 md:space-y-32">
          {ROWS.map((row, i) => (
            <Reveal key={i}>
              <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-14">
                <div
                  className={`md:col-span-5 ${
                    row.flip ? "md:order-2" : ""
                  }`}
                >
                  <h3 className="font-serif font-light leading-[1.05] tracking-[-0.012em] text-cream text-[clamp(1.875rem,3.6vw,2.875rem)]">
                    {row.headline}
                  </h3>
                  <p className="mt-6 max-w-prose2 text-[16.5px] leading-[1.6] text-muted-dark">
                    {row.body}
                  </p>
                </div>
                <div
                  className={`md:col-span-7 ${
                    row.flip ? "md:order-1" : ""
                  }`}
                >
                  {row.visual}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
