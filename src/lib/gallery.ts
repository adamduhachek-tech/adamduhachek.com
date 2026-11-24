import "server-only";
import {
  listWellbeingEssays,
  listEssaysInCollection,
  type Essay,
} from "@/lib/essays";
import type { Subtopic, Scope, Source } from "@/lib/taxonomy";

export interface GalleryItem {
  slug: string;
  /** 1-based position in the curated sequence. */
  number: number;
  title: string;
  snippet: string | null;
  dataset: string | null;
  date: string | null;
  readMinutes: number | null;
  primaryViz: string | null;
  subtopics: Subtopic[];
  scope: Scope[];
  sources: Source[];
}

function toItem(e: Essay, i: number): GalleryItem {
  return {
    slug: e.slug,
    number: i + 1,
    title: e.title,
    snippet: e.description,
    dataset: e.dataset,
    date: e.date,
    readMinutes: e.readingMinutes,
    primaryViz: e.primaryViz,
    subtopics: e.subtopics,
    scope: e.scope,
    sources: e.sources,
  };
}

/**
 * The home gallery's data source: the committed manifest, in curated order,
 * limited to the main well-being essays. Unlike the bucket-backed sibling
 * project, every essay ships with the code, so the list is fully known at
 * build time — no runtime listing, no network.
 */
export function getGalleryItems(): GalleryItem[] {
  return listWellbeingEssays().map(toItem);
}

/** Articles in a named collection (e.g. the College Football section). */
export function getCollectionItems(collection: string): GalleryItem[] {
  return listEssaysInCollection(collection).map(toItem);
}

export type { Essay };
