import { Container } from "../Container";
import { DecisionBrief } from "../product/DecisionBrief";

/**
 * Hero — fed10 pattern. Bold imperative claim, supporting sub, the
 * deliverable card immediately below as the visual proof. No editorial
 * chrome. No § notation. The product carries the page.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-plum-900">
      <div className="hero-aura" aria-hidden />
      <Container>
        <div className="relative pt-20 pb-16 md:pt-28 md:pb-20">
          <h1 className="font-serif font-light leading-[0.98] tracking-[-0.02em] text-cream text-[clamp(2.75rem,8.2vw,7.5rem)]">
            Stop reconciling in slides.
            <br />
            <span className="text-purple-300">
              Start integrating in software.
            </span>
          </h1>

          <p className="mt-8 max-w-prose2 text-[19px] leading-[1.55] text-muted-dark">
            AI agents that run post-merger integration. When the deal
            closes, the agents stay on &mdash; the system of record for
            every cross-functional decision that follows.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#how"
              className="inline-flex items-center gap-2 border border-cream/30 px-7 py-3.5 font-medium text-cream transition-colors hover:bg-cream hover:text-plum-900 hover:border-cream"
            >
              <span>See how it works</span>
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* The deliverable — straight below the hero, fed10 style */}
          <div className="relative mt-16 md:mt-20">
            <DecisionBrief />
          </div>
        </div>
      </Container>
    </section>
  );
}
