"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import type { WorkItem } from "@/lib/work";

function normalize(s: string) {
  return s.trim().toLowerCase();
}

export function WorkFiltersClient({ items }: { items: WorkItem[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedTag = searchParams.get("tag") ?? "";
  const qParam = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(qParam);

  // Keep input in sync if user hits back/forward
  useEffect(() => {
    setQuery(qParam);
  }, [qParam]);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const item of items) item.tags.forEach((t) => set.add(t));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = useMemo(() => {
    const q = normalize(qParam);

    return items.filter((item) => {
      const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true;

      const haystack = normalize(
        [item.title, item.description, item.tags.join(" ")].join(" ")
      );
      const matchesQuery = q ? haystack.includes(q) : true;

      return matchesTag && matchesQuery;
    });
  }, [items, selectedTag, qParam]);

  function setParam(key: "tag" | "q", value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set(key, value);
    else params.delete(key);

    // If you change tag, keep q; if you change q, keep tag
    const next = params.toString();
    router.push(next ? `/work?${next}` : "/work");
  }

  function clearFilters() {
    router.push("/work");
  }

  return (
    <div className="mt-12">
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="w-full sm:max-w-md">
          <label className="block text-sm text-muted" htmlFor="work-search">
            Search
          </label>
          <input
            id="work-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setParam("q", query.trim());
              if (e.key === "Escape") {
                setQuery("");
                setParam("q", "");
              }
            }}
            placeholder="Search case studies…"
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                       focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          />
          <p className="mt-2 text-xs text-muted">
            Press <span className="text-text">Enter</span> to apply,{" "}
            <span className="text-text">Esc</span> to clear.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {(selectedTag || qParam) && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted transition
                         hover:border-white/20 hover:text-text
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                         focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              Clear
            </button>
          )}
          <div className="text-sm text-muted">
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </div>
        </div>
      </div>

      {/* Tag pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        <TagPill
          label="All"
          active={!selectedTag}
          onClick={() => setParam("tag", "")}
        />
        {allTags.map((tag) => (
          <TagPill
            key={tag}
            label={tag}
            active={selectedTag === tag}
            onClick={() => setParam("tag", tag)}
          />
        ))}
      </div>

      {/* Results */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {filtered.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                       focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            <Card className="p-7 hover:-translate-y-0.5" interactive>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {item.description}
              </CardDescription>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

function TagPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-xs transition whitespace-nowrap",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
        active
          ? "border-white/20 bg-white/10 text-text"
          : "border-white/10 bg-white/5 text-muted hover:border-white/20 hover:text-text",
      ].join(" ")}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}