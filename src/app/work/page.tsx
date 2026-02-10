import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { getWorkList } from "@/lib/work";

export default function WorkPage() {
  const work = getWorkList();

  return (
    <Container className="py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
      <p className="mt-4 text-muted max-w-2xl">
        Selected case studies—structured as MDX so content scales without losing consistency.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {work.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
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
    </Container>
  );
}