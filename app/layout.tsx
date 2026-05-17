import type { Metadata } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-plex-serif",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quorumpmi.com"),
  title: {
    default: "Quorum — Stop reconciling in slides. Start integrating in software.",
    template: "%s · Quorum",
  },
  description:
    "AI agents that run post-merger integration. When the deal closes, the agents stay on — the system of record for every cross-functional decision that follows.",
  openGraph: {
    title: "Quorum — Stop reconciling in slides. Start integrating in software.",
    description:
      "AI agents that run post-merger integration. When the deal closes, the agents stay on — the system of record for every cross-functional decision that follows.",
    type: "website",
    siteName: "Quorum",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plexSerif.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="relative min-h-screen bg-plum-900 text-cream antialiased">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
