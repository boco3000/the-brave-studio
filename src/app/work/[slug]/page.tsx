import { Container } from "@/components/ui/Container";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { getWorkSlugs, getWorkSourceBySlug } from "@/lib/work";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

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

  return (
    <Container className="py-24">
      <p className="text-sm text-muted">Case study</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{fm.title}</h1>
      <p className="mt-4 max-w-2xl text-muted">{fm.description}</p>

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

      <article className="mt-12 max-w-3xl">{mdx}</article>
    </Container>
  );
}