import type { SVGProps } from "react";

/**
 * The Quorum mark — two columns, an entablature, a stylobate.
 * Built from nine axis-aligned rectangles on an 80×100 grid.
 * (Per § 03 of the Quorum Standard.)
 *
 * Uses currentColor so the host can theme via CSS.
 */
export function Logo({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 100"
      role="img"
      aria-label="Quorum"
      fill="currentColor"
      className={className}
      {...rest}
    >
      {/* Entablature */}
      <rect x="0" y="6" width="80" height="10" />
      <rect x="2" y="0" width="76" height="4" />
      {/* Left column */}
      <rect x="11" y="18" width="20" height="6" />
      <rect x="14" y="26" width="14" height="58" />
      <rect x="9" y="86" width="24" height="6" />
      {/* Right column */}
      <rect x="49" y="18" width="20" height="6" />
      <rect x="52" y="26" width="14" height="58" />
      <rect x="47" y="86" width="24" height="6" />
      {/* Stylobate */}
      <rect x="0" y="94" width="80" height="6" />
    </svg>
  );
}

/** Wordmark: columns mark + serif "Quorum" lockup. */
export function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims = {
    sm: { mark: "h-5 w-4", text: "text-[18px]" },
    md: { mark: "h-7 w-[22px]", text: "text-[24px]" },
    lg: { mark: "h-10 w-8", text: "text-[34px]" },
  }[size];

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Logo className={dims.mark} />
      <span
        className={`font-serif tracking-[-0.005em] leading-none ${dims.text}`}
      >
        Quorum
      </span>
    </span>
  );
}
