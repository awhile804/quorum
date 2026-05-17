import { Container } from "../Container";
import { Reveal } from "../Reveal";

/**
 * Closer — Coda from the deck. The mission, in one breath. Team
 * pedigree at institutional level only. No specific deal references,
 * no design-partner pitch, no contact form. The site is a positioning
 * piece, not a lead-capture page.
 */
export function FinalCTA() {
  return (
    <section
      id="contact"
      className="border-t border-rule-light bg-plum-900 py-28 md:py-36"
    >
      <Container>
        <Reveal>
          <div className="max-w-5xl">
            <h2 className="font-serif font-light leading-[1.02] tracking-[-0.018em] text-cream text-[clamp(2.5rem,6vw,5rem)]">
              Integration is the moment companies are forced to think
              clearly about themselves.
            </h2>

            <p className="mt-8 max-w-prose2 font-serif font-light leading-[1.2] text-purple-300 text-[clamp(1.5rem,2.6vw,2.125rem)]">
              Quorum uses that moment to build the corporate brain.
            </p>

            <div className="mt-14 max-w-prose2 text-[16px] leading-[1.65] text-muted-dark">
              <p>
                Built by operators and engineers from EY-Parthenon, UC
                Berkeley, and Amazon. San Francisco, 2026.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
