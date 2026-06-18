import type { Metadata } from "next";
import Link from "next/link";

const ABOUT_DESC =
  "Adam Duhachek is the Bielinski Family Faculty Scholar and Professor of Marketing at the University of Illinois Chicago. Research on consumer behavior, artificial intelligence, emotion and coping, political ideology, and well-being.";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT_DESC,
};

const INTERESTS = [
  "Artificial intelligence & consumers",
  "Emotion & coping",
  "Political ideology",
  "Persuasion",
  "Well-being",
  "Marketing analytics",
];

export default function AboutPage() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="grid">
            <div className="avatar" aria-hidden="true">
              AD
            </div>
            <div>
              <h1>Adam Duhachek</h1>
              <p className="title">
                Bielinski Family Faculty Scholar &middot; Professor of Marketing
              </p>
              <p className="affil">
                Department of Marketing, University of Illinois Chicago &middot;
                Honorary Professor, University of Sydney
              </p>
              <p className="contact">
                <span>
                  <b>Email</b> <a href="mailto:adamd@uic.edu">adamd@uic.edu</a>
                </span>
                <span>
                  <b>Office</b> 601 S. Morgan St., Chicago, IL 60607
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        <div className="wrap">
          <section>
            <p className="lede">
              I study how consumers think, feel, and decide — with a current
              focus on how people respond to artificial intelligence, how emotion
              and coping shape judgment, and how political ideology and well-being
              show up in the marketplace.
            </p>
            <p>
              I am the Bielinski Family Faculty Scholar and Professor of Marketing
              at the University of Illinois Chicago. I earned my Ph.D. at the
              Kellogg School of Management at Northwestern University, and before
              joining UIC I was the Nestlé-Hustad Professor of Marketing at
              Indiana University. My work appears in the{" "}
              <em>Journal of Consumer Research</em>,{" "}
              <em>Journal of Marketing</em>, <em>Journal of Marketing Research</em>
              , <em>Journal of Consumer Psychology</em>, and{" "}
              <em>Psychological Science</em>, among others, and I have served on
              the editorial boards of the <em>Journal of Consumer Research</em>{" "}
              and the <em>Journal of Consumer Psychology</em>.
            </p>
            <div
              className="chips"
              role="list"
              aria-label="Research interests"
            >
              {INTERESTS.map((i) => (
                <span className="chip" role="listitem" key={i}>
                  {i}
                </span>
              ))}
            </div>
            <p style={{ marginTop: 18 }}>
              <Link href="/research">Research &amp; curriculum vitae</Link>
              {"  ·  "}
              <Link href="/teaching">Teaching</Link>
              {"  ·  "}
              <Link href="/">Data essays</Link>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
