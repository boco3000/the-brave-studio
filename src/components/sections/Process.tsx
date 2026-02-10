import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, Item } from "@/components/ui/Motion";

type Step = {
  title: string;
  description: string;
};

const PROCESS: Step[] = [
  {
    title: "Align",
    description:
      "We start by understanding your goals, constraints, and audience—so every decision has intent.",
  },
  {
    title: "Design",
    description:
      "We create clean, scalable interfaces that prioritize clarity, usability, and brand alignment.",
  },
  {
    title: "Build",
    description:
      "We implement with modern tooling, accessibility standards, and performance in mind.",
  },
  {
    title: "Refine",
    description:
      "We test, polish, and iterate—ensuring the final product feels intentional and complete.",
  },
];

export function Process() {
  return (
    <section className="border-t border-white/10">
      <Container className="py-24">
        <FadeUp>
          <header className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              How we work
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              A focused process designed to move quickly without sacrificing
              quality.
            </p>
          </header>
        </FadeUp>

        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <Item key={step.title}>
              <ProcessStep
                index={index + 1}
                title={step.title}
                description={step.description}
              />
            </Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function ProcessStep({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
  <div className="relative rounded-lg border border-white/10 bg-white/5 p-7">
      <span className="absolute -top-3 left-6 rounded-full bg-[var(--color-bg)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
        {index}
      </span>

      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
