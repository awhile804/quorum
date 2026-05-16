import { Container } from "../Container";
import { Reveal } from "../Reveal";

/**
 * Closer — fed10 manifesto pattern. A short mission statement and a
 * note on team pedigree at institutional level. No specific deal
 * references, no design-partner pitch, no contact form. The site is
 * a positioning piece, not a lead-capture page.
 */
export function FinalCTA() {
  return (
    <section
      id="contact"
      className="border-t border-rule-light bg-plum-900 py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <div className="max-w-5xl">
            <h2 className="font-serif font-light leading-[1.02] tracking-[-0.018em] text-cream text-[clamp(2.5rem,5.5vw,4.5rem)]">
              We build AI to{" "}
              <span className="text-purple-300">
                run post-merger integration
              </span>
              .
            </h2>

            <div className="mt-10 max-w-prose2 space-y-5 text-[17px] leading-[1.65] text-muted-dark">
              <p>
                Quorum is built by operators and engineers from EY-Parthenon,
                UC Berkeley, and Amazon. We know how integrations move because
                we&apos;ve moved them ourselves — across mid-market deals in
                technology, industrials, and healthcare.
              </p>
              <p>
                The integration is the most expensive room in M&amp;A. We are
                building the room itself, in software, so the next decade of
                deals does not get reconciled in slides.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
