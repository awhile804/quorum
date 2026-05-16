import Link from "next/link";
import { Wordmark } from "./Logo";

/**
 * Top bar — sticky on plum-900 with a hairline below.
 * Brand mark only; no CTA while the site is positioning, not selling.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-rule-light bg-plum-900/90 backdrop-blur supports-[backdrop-filter]:bg-plum-900/75">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-5 md:px-12 lg:px-20 xl:px-28 2xl:px-40">
        <Link
          href="/"
          aria-label="Quorum home"
          className="text-cream transition-opacity hover:opacity-80"
        >
          <Wordmark />
        </Link>
      </div>
    </header>
  );
}
