# Quorum

Marketing site for **Quorum** — AI agents that run post-merger integration for mid-market acquirers.

> *Quaestio · Disputatio · Decisio.*

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Deployable to Vercel in one click.

---

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload. |
| `npm run build` | Production build (static, prerendered). |
| `npm run start` | Serve the production build locally. |
| `npm run lint` | Run Next.js / ESLint checks. |

## Project structure

```
app/
  layout.tsx           Root layout — fonts, metadata, body shell
  page.tsx             Landing page (composes the section components)
  about/page.tsx       /about — team, thesis, contact
  globals.css          Design tokens + base styles + paper-grain noise
components/
  Logo.tsx             Q monogram (SVG, currentColor) + Wordmark lockup
  Nav.tsx              Top nav with "Request access" CTA
  Footer.tsx           Site footer
  Container.tsx        Centered max-width content wrapper
  SectionLabel.tsx     Editorial "I · PROBLEM" labels
  Reveal.tsx           IntersectionObserver fade-in (respects reduced motion)
  sections/
    Hero.tsx
    Problem.tsx
    Solution.tsx       Includes the two-layer architecture diagram
    Thesis.tsx         Wedge → platform
    WhyNow.tsx         Three-forces section (dark)
    Landscape.tsx      Competitive matrix
    Coda.tsx           Closing pull-quote + contact CTA
public/
  favicon.svg          Q monogram favicon
tailwind.config.ts     Design tokens (colors, type scale, fonts)
```

## Design system

The visual identity is intentionally editorial — closer to Stripe Press, Bloomberg, or a top-tier law firm than to a typical AI startup. All values are tokens, easy to swap as the brand matures.

### Type
- **Display** — [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) (`font-serif` / `serif-display`)
- **Body** — [Inter](https://fonts.google.com/specimen/Inter) (`font-sans`)
- **Accents / labels** — [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (`font-mono`, used in the Roman-numeral section labels)

### Color
| Token | Hex | Use |
| --- | --- | --- |
| `paper` | `#F6F2E9` | page background |
| `paper-2` | `#EFEADD` | tonal section backgrounds |
| `ink` | `#0E0E0C` | primary text, dark sections |
| `ink-2` | `#2A2824` | body copy |
| `ink-3` | `#5A564E` | secondary copy, labels |
| `ink-4` | `#8A8478` | tertiary, footer |
| `rule` | `#D9D2C2` | hairline borders |
| `oxblood` | `#7A1F1F` | accent (stats, highlights, CTA hover) |

These live in `tailwind.config.ts`. To rebrand, change them there and everything updates.

### Spacing & layout
- 8 px base spacing scale (Tailwind default).
- Editorial max-width: `max-w-edit` = 1240 px, with generous side padding.
- Reading measure: `max-w-prose2` = 68ch.

## Content source

All copy is pulled directly from `Quorum_Pitch_Deck.pdf`. To edit:
- **Hero copy** → `components/sections/Hero.tsx`
- **Stats** → `components/sections/Problem.tsx`
- **Architecture diagram (functions/tools)** → `FUNCTIONS` and `TOOLS` arrays in `components/sections/Solution.tsx`
- **Why now (three forces)** → `FORCES` array in `components/sections/WhyNow.tsx`
- **Competitive matrix** → `ROWS` array in `components/sections/Landscape.tsx`
- **Team** → `TEAM` array in `app/about/page.tsx`
- **Contact email / phone** → `Footer.tsx`, `Coda.tsx`, `app/about/page.tsx`

## Deploying

### Vercel (recommended)
1. Push this repo to GitHub.
2. Import it at <https://vercel.com/new>.
3. Accept defaults — no env vars needed. The site is fully static.
4. Add your custom domain in Vercel → Project → Settings → Domains.

### Anywhere else (static export)
```bash
npm run build
```
The `.next` output is a standard Next.js build. For pure static hosting, add `output: "export"` to `next.config.mjs` and `npm run build` will emit an `out/` directory.

## What to do next

In rough priority order, things you'll likely want to refine:

1. **Logo** — current Q is a clean serif placeholder rendered in SVG (`components/Logo.tsx`). Drop in the final mark when ready.
2. **Open Graph image** — add `app/opengraph-image.png` (1200×630). Next.js auto-wires it.
3. **Analytics** — drop a Vercel Analytics or Plausible snippet into `app/layout.tsx`.
4. **Form** — the "Request access" CTAs currently `mailto:`. Swap for a Tally/Typeform embed or a Resend-backed POST handler when you're ready to capture inbound.
5. **Press / customers** — once you have a design partner logo or an article, add a slim "Press" strip below the hero.

## Notes
- Strict TypeScript, no `any` in the codebase.
- All sections are statically prerendered. First-load JS is ~106 KB (mostly React).
- Motion is restrained — only a single `IntersectionObserver`-driven fade in `components/Reveal.tsx`. Respects `prefers-reduced-motion`.
- The faint paper-grain texture is a tiny inline SVG turbulence in `globals.css`; remove `body::before` if you want a perfectly flat background.
