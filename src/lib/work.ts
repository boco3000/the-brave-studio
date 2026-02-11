import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type WorkFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  featured?: boolean;
  role?: string;
  stack?: string[];
};

export type WorkItem = WorkFrontmatter & {
  slug: string;
};

const WORK_DIR = path.join(process.cwd(), "content", "work");

export function getWorkSlugs(): string[] {
  return fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getWorkList(): WorkItem[] {
  const slugs = getWorkSlugs();

  const items = slugs.map((slug) => {
    const filePath = path.join(WORK_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);

    const fm = data as WorkFrontmatter;

    return {
      slug,
      title: fm.title,
      description: fm.description,
      date: fm.date,
      tags: fm.tags ?? [],
      role: fm.role,
      stack: fm.stack,
      featured: fm.featured ?? false,
    };
  });

  // newest first
  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getWorkSourceBySlug(slug: string): {
  fm: WorkItem;
  content: string;
} {
  const filePath = path.join(WORK_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const fm = data as WorkFrontmatter;

  return {
    fm: {
      slug,
      title: fm.title,
      description: fm.description,
      date: fm.date,
      tags: fm.tags ?? [],
      role: fm.role,
      stack: fm.stack,
      featured: fm.featured ?? false,
    },
    content,
  };
}

export function getWorkNav(slug: string): { prev: WorkItem | null; next: WorkItem | null } {
  const list = getWorkList();
  const index = list.findIndex((i) => i.slug === slug);

  if (index === -1) return { prev: null, next: null };

  // list is newest-first; "prev" should go to newer, "next" to older (common blog pattern)
  const prev = index > 0 ? list[index - 1] : null;
  const next = index < list.length - 1 ? list[index + 1] : null;

  return { prev, next };
}
