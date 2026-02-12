import { Container } from "@/components/ui/Container";

export function About({ asPage = false }: { asPage?: boolean }) {
  const HeadingTag = asPage ? "h1" : "h2";
  const headingClass = asPage
    ? "text-4xl font-semibold tracking-tight"
    : "text-3xl font-semibold tracking-tight";

  return (
    <section className="border-t border-white/10">
      <Container className="py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <HeadingTag className={headingClass}>About The Builder</HeadingTag>

            <p className="mt-6 max-w-2xl text-muted leading-relaxed">
              I’m focused on building sleek, modern web experiences that feel
              fast and intentional. My work leans toward structured UI systems,
              accessibility-first design, and clean component architecture that
              scales beyond a single launch.
            </p>

            <p className="mt-4 max-w-2xl text-muted leading-relaxed">
              This project exists as a portfolio demo — showcasing how a small
              studio website can be built using modern React patterns, MDX
              content workflows, and production-ready SEO practices.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind",
                "MDX",
                "Accessibility",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Side meta card */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-7">
            <div className="text-sm font-medium">Focus Areas</div>

            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>Performance-first UI</li>
              <li>Content-driven architecture</li>
              <li>Accessible interaction patterns</li>
              <li>Sleek, minimal interfaces</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
