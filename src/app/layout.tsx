import type { Metadata } from "next";
import { SITE_NAME, SITE_AFFILIATION, siteUrl } from "@/lib/site";
import "./globals.css";

const DESCRIPTION =
  "Adam Duhachek — Bielinski Family Faculty Scholar & Professor of Marketing at the University of Illinois Chicago. Research on consumer behavior, artificial intelligence, emotion and coping, political ideology, and well-being, plus a gallery of interactive data essays.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${SITE_NAME} — ${SITE_AFFILIATION}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  // og:image / twitter:image come from app/opengraph-image.tsx automatically.
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_AFFILIATION}`,
    description: DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
