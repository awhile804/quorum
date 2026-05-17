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
    default: "Quorum — AI agents that run post-merger integration.",
    template: "%s · Quorum",
  },
  description:
    "One agent per function. They take in your systems, contracts, and headcount, convene on demand, propose dispositioning, and route every decision to your leads for sign-off. After close, they stay on as the system of record.",
  openGraph: {
    title: "Quorum — AI agents that run post-merger integration.",
    description:
      "One agent per function. They take in your systems, contracts, and headcount, convene on demand, propose dispositioning, and route every decision to your leads for sign-off. After close, they stay on as the system of record.",
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
