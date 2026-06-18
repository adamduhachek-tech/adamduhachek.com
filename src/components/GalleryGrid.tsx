"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { GalleryItem } from "@/lib/gallery";
import {
  SUBTOPICS,
  SCOPES,
  SOURCES,
  SUBTOPIC_LABEL,
  SUBTOPIC_COLOR,
  type Subtopic,
} from "@/lib/taxonomy";
import { Sparkmark } from "@/lib/sparkmark";

type FacetKey = string; // `subtopic:gender`, `scope:US`, `source:GSS`

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<Set<FacetKey>>(new Set());
  const [query, setQuery] = useState("");

  // Only surface filter chips for tags that actually occur in the data.
  const present = useMemo(() => {
    const sub = new Set<string>();
    const scope = new Set<string>();
    const source = new Set<string>();
    for (const it of items) {
      it.subtopics.forEach((s) => sub.add(s));
      it.scope.forEach((s) => scope.add(s));
      it.sources.forEach((s) => source.add(s));
    }
    return { sub, scope, source };
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const subSel = [...active].filter((k) => k.startsWith("subtopic:")).map((k) => k.slice(9));
    const scopeSel = [...active].filter((k) => k.startsWith("scope:")).map((k) => k.slice(6));
    const sourceSel = [...active].filter((k) => k.startsWith("source:")).map((k) => k.slice(7));

    return items.filter((it) => {
      if (subSel.length && !subSel.some((s) => it.subtopics.includes(s as Subtopic))) return false;
      if (scopeSel.length && !scopeSel.some((s) => it.scope.includes(s as never))) return false;
      if (sourceSel.length && !sourceSel.some((s) => it.sources.includes(s as never))) return false;
      if (q) {
        const hay = [it.title, it.snippet, it.dataset].filter(Boolean).join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [items, active, query]);

  const toggle = (key: FacetKey) =>
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const clearAll = () => {
    setActive(new Set());
    setQuery("");
  };

  const hasFilters = active.size > 0 || query.trim().length > 0;

  return (
    <>
      <section className="filters" aria-label="Filter essays">
        <div className="filter-group">
          <span className="filter-legend">Topic</span>
          <div className="chip-row">
            {SUBTOPICS.filter((s) => present.sub.has(s.key)).map((s) => (
              <FilterChip
                key={s.key}
                label={s.label}
                active={active.has(`subtopic:${s.key}`)}
                color={SUBTOPIC_COLOR[s.key]}
                onClick={() => toggle(`subtopic:${s.key}`)}
              />
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-legend">Scope &amp; source</span>
          <div className="chip-row">
            {SCOPES.filter((s) => present.scope.has(s)).map((s) => (
              <FilterChip
                key={s}
                label={s}
                active={active.has(`scope:${s}`)}
                onClick={() => toggle(`scope:${s}`)}
              />
            ))}
            {SOURCES.filter((s) => present.source.has(s)).map((s) => (
              <FilterChip
                key={s}
                label={s}
                active={active.has(`source:${s}`)}
                onClick={() => toggle(`source:${s}`)}
              />
            ))}
          </div>
        </div>

        <div className="filter-foot">
          <input
            className="search-input"
            type="search"
            placeholder="Search titles & deks…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search essays"
            autoComplete="off"
          />
          <span className="result-count" aria-live="polite">
            {filtered.length} of {items.length}
          </span>
          {hasFilters && (
            <button type="button" className="clear-all" onClick={clearAll}>
              Clear all
            </button>
          )}
        </div>
      </section>

      {filtered.length === 0 ? (
        <p className="no-results">Nothing matches those filters.</p>
      ) : (
        <ul className="essay-grid" aria-label="Data essays">
          {filtered.map((it, i) => (
            <li
              className="essay-cell"
              key={it.slug}
              style={{ "--stagger": Math.min(i, 11) } as React.CSSProperties}
            >
              <Card item={it} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function FilterChip({
  label,
  active,
  color,
  onClick,
}: {
  label: string;
  active: boolean;
  color?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={active ? "filter-chip filter-chip--active" : "filter-chip"}
      aria-pressed={active}
      onClick={onClick}
      style={color ? ({ "--chip-color": color } as React.CSSProperties) : undefined}
    >
      {color && <span className="filter-dot" aria-hidden="true" />}
      {label}
    </button>
  );
}

function Card({ item }: { item: GalleryItem }) {
  const accent = item.subtopics[0]
    ? SUBTOPIC_COLOR[item.subtopics[0]]
    : "#7b8398";
  return (
    <Link className="essay-card" href={`/essays/${item.slug}`}>
      <div className="essay-thumb">
        <div
          className="essay-thumb-fallback"
          style={{ "--accent": accent } as React.CSSProperties}
        >
          <Sparkmark seed={item.slug} primaryViz={item.primaryViz} useCssVars />
        </div>
        <span className="essay-no" aria-hidden="true">
          №{String(item.number).padStart(2, "0")}
        </span>
      </div>
      <div className="essay-body">
        <h3 className="essay-title">{item.title}</h3>
        {item.snippet && <p className="essay-snippet">{item.snippet}</p>}
        <div className="essay-foot">
          <span className="essay-meta">
            {item.readMinutes ? <span>{item.readMinutes} min read</span> : null}
            {item.dataset ? (
              <span className="essay-dataset">
                {item.readMinutes ? " · " : ""}
                {item.dataset}
              </span>
            ) : null}
          </span>
          {item.subtopics.length > 0 && (
            <span className="essay-chips">
              {item.subtopics.slice(0, 3).map((s) => (
                <span
                  className="essay-tag"
                  key={s}
                  style={{ "--chip-color": SUBTOPIC_COLOR[s] } as React.CSSProperties}
                >
                  {SUBTOPIC_LABEL[s]}
                </span>
              ))}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
