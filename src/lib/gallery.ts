import "server-only";
import { listEssays, type Essay } from "@/lib/essays";
import type { Subtopic, Scope, Source } from "@/lib/taxonomy";

export interface GalleryItem {
  slug: string;
  /** 1-based position in the curated sequence. */
  number: number;
  title: string;
  snippet: string | null;
  dataset: string | null;
  readMinutes: number | null;
  primaryViz: string | null;
  subtopics: Subtopic[];
  scope: Scope[];
  sources: Source[];
}

/**
 * The gallery's data source: the committed manifest, in curated order. Unlike
 * the bucket-backed sibling project, every essay ships with the code, so the
 * list is fully known at build time — no runtime listing, no network.
 */
export function getGalleryItems(): GalleryItem[] {
  return listEssays().map((e, i) => ({
    slug: e.slug,
    number: i + 1,
    title: e.title,
    snippet: e.description,
    dataset: e.dataset,
    readMinutes: e.readingMinutes,
    primaryViz: e.primaryViz,
    subtopics: e.subtopics,
    scope: e.scope,
    sources: e.sources,
  }));
}

export type { Essay };
