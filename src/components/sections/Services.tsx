import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, Item } from "@/components/ui/Motion";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

type Service = {
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    title: "Web Design + Build",
    description:
      "Sleek, high-performance marketing sites built with modern front-end architecture.",
  },
  {
    title: "Product Landing Systems",
    description:
      "Conversion-focused landing pages and feature flows designed to scale.",
  },
  {
    title: "Brand Refresh for Digital",
    description:
      "Clean visual systems—type, color, layout—that elevate your product experience.",
  },
  {
    title: "Performance + SEO Hardening",
    description:
      "Speed, metadata, and structural improvements that directly impact acquisition.",
  },
  {
    title: "Accessibility & UX QA",
    description:
      "Keyboard-first interactions, focus states, and real-world usability checks.",
  },
];

export function Services() {
  return (
    <section className="border-t border-white/10">
      <Container className="py-24">
        <FadeUp>
          <header className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              What we do
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Focused services for teams who care about performance, clarity,
              and execution.
            </p>
          </header>
        </FadeUp>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Item key={service.title}>
              <ServiceCard
                title={service.title}
                description={service.description}
              />
            </Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="p-7" interactive>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
}
