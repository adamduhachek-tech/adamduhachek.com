import type { Metadata } from "next";
import Link from "next/link";
import { getCollectionItems } from "@/lib/gallery";

const INTRO = {
  title: "College Football Analysis",
  description:
    "A statistical model that predicts the College Football Playoff committee's rankings — and a study of how the committee has behaved over twelve seasons. Each prediction is published before the committee's release, with a hashed file anyone can check afterward.",
};

export const metadata: Metadata = {
  title: INTRO.title,
  description: INTRO.description,
};

export default function FootballPage() {
  const items = getCollectionItems("football");
  return (
    <main id="content">
      <div className="wrap" style={{ paddingTop: 36 }}>
        <section style={{ marginBottom: 8 }}>
          <h1>{INTRO.title}</h1>
          <div className="rule" />
          <p className="lede">{INTRO.description}</p>
        </section>

        {items.length === 0 ? (
          <p className="no-results">Nothing here yet — the first prediction posts soon.</p>
        ) : (
          <ul className="post-list" aria-label="College football articles">
            {items.map((it) => {
              const meta = [it.date, it.readMinutes ? `${it.readMinutes} min read` : null]
                .filter(Boolean)
                .join("  ·  ");
              return (
                <li key={it.slug}>
                  <Link className="post-row" href={`/essays/${it.slug}`}>
                    <h2 className="post-title">{it.title}</h2>
                    {it.snippet && <p className="post-dek">{it.snippet}</p>}
                    {meta && <span className="post-meta">{meta}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
