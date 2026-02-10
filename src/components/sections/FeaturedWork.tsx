import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type WorkItem = {
  title: string;
  description: string;
  tags: string[];
  slug: string;
};

const FEATURED_WORK: WorkItem[] = [
  {
    title: "Astra — Product Marketing Site",
    description:
      "A sleek, conversion-first site for a SaaS launch with accessible forms and performance polish.",
    tags: ["Next.js", "Design System", "SEO"],
    slug: "astra-product-site",
  },
  {
    title: "Kite Labs — Studio Rebrand",
    description:
      "A modern studio presence with reusable case study templates, motion, and cohesive typography.",
    tags: ["Brand", "UI", "Motion"],
    slug: "kite-labs-rebrand",
  },
  {
    title: "Neon Freight — Startup Launch",
    description:
      "Launch-ready marketing site built fast with a clean content model and strong lead capture UX.",
    tags: ["Landing", "Accessibility", "Performance"],
    slug: "neon-freight-launch",
  },
];

export function FeaturedWork() {
  return (
    <section className="border-t border-white/10">
      <Container className="py-24">
        <div className="flex items-end justify-between gap-6">
          <header className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Featured work
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              A selection of recent builds—designed to be fast, accessible, and
              outcome-driven.
            </p>
          </header>

          <div className="hidden sm:block">
            <Button href="/work" variant="ghost">
              View all
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {FEATURED_WORK.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/work" variant="ghost">
            View all
          </Button>
        </div>
      </Container>
    </section>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group block rounded-lg border border-white/10 bg-white/5 p-6 transition
             hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/7 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_0_40px_rgba(34,211,238,0.08)]
             focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
             focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium transition group-hover:text-white">
          {item.title}
        </h3>
        <span className="text-sm text-[var(--color-accent)] opacity-0 transition group-hover:opacity-100">
          →
        </span>
      </div>

      <p className="mt-3 text-sm text-muted leading-relaxed">
        {item.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted transition
             group-hover:border-white/15 group-hover:text-text"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
