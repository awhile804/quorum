import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule-light bg-plum-900 text-cream">
      <div className="mx-auto flex w-full flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-12 lg:px-20 xl:px-28 2xl:px-40">
        <div className="flex items-center gap-3">
          <Logo className="h-6 w-[19px] text-cream" />
          <span className="font-serif text-[20px] tracking-[-0.005em] text-cream">
            Quorum
          </span>
        </div>
        <span className="font-mono uppercase tracking-chrome2 text-[11px] text-muted-dark">
          San Francisco · {year}
        </span>
      </div>
    </footer>
  );
}
