/**
 * build-manifest.ts — regenerates src/data/manifest.json from the curated
 * source (src/data/essays.json) and the essay HTML in public/essays/.
 *
 * For each curated entry it:
 *   - carries over title / dek / dataset / construct / primaryViz,
 *   - computes a reading time from the essay's body text, and
 *   - infers topic / scope / source tags from the shared taxonomy.
 *
 * Run:  npm run manifest
 *
 * The output is committed and imported directly by the gallery, so the app
 * needs no network or filesystem access at build or request time. Re-run this
 * whenever an essay is added to public/essays/ or src/data/essays.json changes.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { inferTags } from "../src/lib/taxonomy.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

interface SourceArticle {
  slug: string;
  title: string;
  dek?: string;
  dataset?: string;
  construct?: string;
  primaryViz?: string;
  path?: string;
}

/** Strip scripts/styles/SVG and tags, then estimate reading minutes at the
 *  conventional ~220 words/minute. */
function readMinutesFor(slug: string): number | null {
  try {
    const html = readFileSync(resolve(ROOT, `public/essays/${slug}/index.html`), "utf8");
    const text = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&[a-z]+;/gi, " ");
    const words = text.split(/\s+/).filter(Boolean).length;
    return words > 0 ? Math.max(1, Math.round(words / 220)) : null;
  } catch (err) {
    console.warn(`  ! could not read public/essays/${slug}/index.html: ${(err as Error).message}`);
    return null;
  }
}

function main() {
  const source = JSON.parse(
    readFileSync(resolve(ROOT, "src/data/essays.json"), "utf8")
  ) as { articles: SourceArticle[] };

  const essays = source.articles.map((a) => {
    const tags = inferTags({
      title: a.title,
      description: a.dek ?? null,
      dataset: a.dataset ?? null,
    });
    return {
      slug: a.slug,
      title: a.title,
      snippet: a.dek ?? null,
      dataset: a.dataset ?? null,
      construct: a.construct ?? null,
      primaryViz: a.primaryViz ?? null,
      readMinutes: readMinutesFor(a.slug),
      subtopics: tags.subtopics,
      scope: tags.scope,
      sources: tags.sources,
    };
  });

  const outPath = resolve(ROOT, "src/data/manifest.json");
  writeFileSync(
    outPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), essays }, null, 2) + "\n"
  );
  console.log(`Wrote ${outPath} — ${essays.length} essays`);
}

main();
