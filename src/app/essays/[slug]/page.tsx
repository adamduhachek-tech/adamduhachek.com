import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { listEssays, getEssay } from "@/lib/essays";
import { ShareBar } from "@/components/ShareBar";
import { SITE_NAME, siteUrl } from "@/lib/site";

// Every essay is known at build time, so all slugs are pre-rendered and any
// other slug is a hard 404 (no on-demand rendering of unknown essays).
export const dynamicParams = false;

export function generateStaticParams() {
  return listEssays().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) return { title: "Not found" };

  const canonical = `${siteUrl()}/essays/${essay.slug}`;
  return {
    title: essay.title,
    description: essay.description ?? undefined,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: SITE_NAME,
      title: essay.title,
      description: essay.description ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: essay.title,
      description: essay.description ?? undefined,
    },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) notFound();

  return (
    <main id="content">
      <header className="article-chrome">
        <Link href="/" className="back-link">
          <span aria-hidden="true">←</span> Essays
        </Link>
        <span className="article-chrome-title">{essay.title}</span>
        <ShareBar title={essay.title} description={essay.description} />
      </header>
      {/* The original essay, served untouched from /public/essays. These are
          interactive D3 documents (they import D3 from a CDN), so they need
          their own scripting context. */}
      <iframe
        className="article-frame"
        src={essay.url}
        title={essay.title}
        sandbox="allow-scripts allow-same-origin allow-popups"
        loading="eager"
      />
    </main>
  );
}
