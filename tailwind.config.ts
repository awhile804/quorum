import type { Config } from "tailwindcss";

/**
 * The Quorum Standard — design tokens (Edition I · 2026)
 * Sourced from the brand & style guide. Keep this file in sync with
 * the CSS custom properties in app/globals.css.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Plum surfaces
        plum: {
          900: "#14062E",
          800: "#1E0B45",
          700: "#2A1259",
          600: "#3F1A95",
        },
        // Brand purple + lavender
        purple: {
          DEFAULT: "#6F3EE3",
          600: "#5A2BC9",
          400: "#8E5BFF",
          300: "#B894FF",
          200: "#D2BAFF",
          100: "#E6D9FF",
          50: "#EFE7FF",
        },
        // Cream & ink
        cream: "#F2EAD9",
        "cream-2": "#E8DEC8",
        paper: "#F4F1EC",
        ink: {
          DEFAULT: "#0F0820",
          2: "#2A2438",
        },
        muted: {
          DEFAULT: "#6E6479",
          dark: "#9B91AC",
        },
        // Gold — Latin chrome and warnings only
        gold: {
          DEFAULT: "#E2B658",
          2: "#C29642",
        },
        // Hairlines
        rule: {
          light: "rgba(242,234,217,0.18)",
          "light-strong": "rgba(242,234,217,0.40)",
          dark: "rgba(15,8,32,0.14)",
          "dark-strong": "rgba(15,8,32,0.32)",
        },
      },
      fontFamily: {
        // The fixed IBM Plex pairing. No second serif. No second sans.
        serif: ['var(--font-plex-serif)', "Georgia", "serif"],
        sans: ['var(--font-plex-sans)', "system-ui", "-apple-system", "sans-serif"],
        mono: ['var(--font-plex-mono)', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        // Mono chrome tracking conventions from the guide
        chrome: "0.06em",
        chrome2: "0.18em",
        chrome3: "0.22em",
        chrome4: "0.32em",
      },
      maxWidth: {
        prose2: "64ch",
        edit: "1440px",
      },
      fontSize: {
        // Plex Serif headlines — Plex needs slightly looser tracking than Instrument
        display: ["clamp(3.5rem, 7.5vw, 7rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        h1:      ["clamp(2.75rem, 5.5vw, 5rem)",  { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        h2:      ["clamp(2rem, 3.8vw, 3.5rem)",   { lineHeight: "1.06", letterSpacing: "-0.012em" }],
        h3:      ["clamp(1.5rem, 2.2vw, 2rem)",   { lineHeight: "1.12", letterSpacing: "-0.006em" }],
        lede:    ["1.375rem", { lineHeight: "1.5" }],
        body:    ["1.0625rem", { lineHeight: "1.6" }],
        caption: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
      },
      borderRadius: {
        // Hard geometry — max 2px per § 06
        none: "0",
        sm: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
