import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getWorkNav,
  getWorkSlugs,
  getWorkSourceBySlug,
  getWorkList,
} from "@/lib/work";

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { fm } = getWorkSourceBySlug(slug);

  return {
    title: `${fm.title} — The Brave Studio`,
    description: fm.description,
  };
}

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr; // fall back if invalid
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(d);
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { fm, content } = getWorkSourceBySlug(slug);

  const { content: mdx } = await compileMDX({
    source: content,
    components: mdxComponents,
  });

  const prettyDate = formatDate(fm.date);
  const { prev, next } = getWorkNav(slug);
  const workList = getWorkList();
  const currentIndex = workList.findIndex((w) => w.slug === slug);
  const total = workList.length;

  return (
    <Container className="py-24">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-text
               focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
               focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]
               rounded-md px-2 py-1 -ml-2"
        >
          <span className="text-[var(--color-accent)]">←</span>
          Back to Work
        </Link>

        <div className="text-xs text-muted">
          {currentIndex + 1} of {total}
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <p className="text-sm text-muted">Case study</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            {fm.title}
          </h1>

          <p className="mt-4 max-w-2xl text-muted leading-relaxed">
            {fm.description}
          </p>

          {fm.tags?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {fm.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* Meta */}
        <Card className="p-7">
          <div className="text-sm font-medium">Project details</div>

          <dl className="mt-5 space-y-4 text-sm">
            {prettyDate ? (
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">Date</dt>
                <dd className="text-text">{prettyDate}</dd>
              </div>
            ) : null}

            {fm.role ? (
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">Role</dt>
                <dd className="text-text text-right">{fm.role}</dd>
              </div>
            ) : null}

            {fm.stack?.length ? (
              <div className="flex items-start justify-between gap-6">
                <dt className="text-muted">Stack</dt>
                <dd className="text-text text-right">{fm.stack.join(", ")}</dd>
              </div>
            ) : null}
          </dl>
        </Card>
      </div>

      {/* Content */}
      <div className="mt-16 h-px w-24 bg-[var(--color-accent)] opacity-60" />

      <article className="mt-10 max-w-3xl">{mdx}</article>
      {prev || next ? (
        <div className="mt-16 border-t border-white/10 pt-10">
          <div
            className={[
              "grid gap-6",
              prev && next ? "sm:grid-cols-2" : "sm:grid-cols-2",
            ].join(" ")}
          >
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                   focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                <div className="text-xs text-muted">Previous</div>
                <div className="mt-2 font-medium">{prev.title}</div>
                <div className="mt-2 text-sm text-muted">
                  {prev.description}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                   focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] sm:text-right"
              >
                <div className="text-xs text-muted">Next</div>
                <div className="mt-2 font-medium">{next.title}</div>
                <div className="mt-2 text-sm text-muted">
                  {next.description}
                </div>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </div>
      ) : null}
    </Container>
  );
}
