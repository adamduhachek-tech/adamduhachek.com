import "server-only";
import manifestData from "@/data/manifest.json";
import type { Subtopic, Scope, Source } from "@/lib/taxonomy";

/** One entry in the committed, generated manifest (src/data/manifest.json),
 *  produced by `npm run manifest` from src/data/essays.json + the essay HTML. */
export interface ManifestEntry {
  slug: string;
  title: string;
  snippet: string | null;
  dataset: string | null;
  construct: string | null;
  primaryViz: string | null;
  readMinutes: number | null;
  subtopics: Subtopic[];
  scope: Scope[];
  sources: Source[];
}

interface Manifest {
  generatedAt: string | null;
  essays: ManifestEntry[];
}

const manifest = manifestData as Manifest;

export interface Essay {
  slug: string;
  /** The self-contained essay, served untouched from /public. */
  url: string;
  title: string;
  description: string | null;
  dataset: string | null;
  construct: string | null;
  primaryViz: string | null;
  readingMinutes: number | null;
  subtopics: Subtopic[];
  scope: Scope[];
  sources: Source[];
}

function toEssay(e: ManifestEntry): Essay {
  return {
    slug: e.slug,
    url: `/essays/${e.slug}/index.html`,
    title: e.title,
    description: e.snippet ?? null,
    dataset: e.dataset ?? null,
    construct: e.construct ?? null,
    primaryViz: e.primaryViz ?? null,
    readingMinutes: e.readMinutes ?? null,
    subtopics: e.subtopics ?? [],
    scope: e.scope ?? [],
    sources: e.sources ?? [],
  };
}

/** Every essay, in the curated narrative order of the manifest. */
export function listEssays(): Essay[] {
  return manifest.essays.map(toEssay);
}

export function getEssay(slug: string): Essay | null {
  const entry = manifest.essays.find((e) => e.slug === slug);
  return entry ? toEssay(entry) : null;
}
