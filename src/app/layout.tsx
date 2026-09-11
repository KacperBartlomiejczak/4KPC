import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

/** 03 Typography — Headings / Display / Brand. */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** 03 Typography — Body / UI / Readability. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "4KPC — komputer dobrany pod Ciebie",
    template: "%s — 4KPC",
  },
  description:
    "Opisz, do czego potrzebujesz komputera, a asystent AI dobierze podzespoły do Twojego budżetu i zastosowania.",
  openGraph: {
    title: "4KPC — komputer dobrany pod Ciebie",
    description:
      "Opisz, do czego potrzebujesz komputera, a asystent AI dobierze podzespoły do Twojego budżetu i zastosowania.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
