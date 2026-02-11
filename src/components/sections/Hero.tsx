import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accents */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container className="relative py-24">
        <FadeUp>
          <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 shrink-0 rounded-full ring-4 ring-[var(--color-accent-soft)]"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span className="text-text">The Brave Studio</span>

            <span aria-hidden="true" className="text-muted px-1 leading-none">
              •
            </span>

            <span className="text-muted">Sleek web experiences</span>
          </p>
        </FadeUp>

        <FadeUp delay={0.06}>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight">
            Fortune favors{" "}
            <span className="text-[var(--color-accent)]">The Brave</span>.
          </h1>
        </FadeUp>

        <FadeUp delay={0.12}>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            We design and build modern marketing sites and product experiences —
            fast, accessible, and engineered to convert.
          </p>
        </FadeUp>

        <FadeUp delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary">
              Start a project
            </Button>
            <Button href="/work" variant="ghost">
              View work
            </Button>
          </div>
        </FadeUp>

        <FadeUp delay={0.24}>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Stat label="Performance-first" value="Fast" />
            <Stat label="Accessible UI" value="AA-minded" />
            <Stat label="Modern stack" value="Next.js" />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-5">
      <div className="text-sm text-muted">{label}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
    </div>
  );
}
