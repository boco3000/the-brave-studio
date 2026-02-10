import { Container } from "@/components/ui/Container";

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
        <header className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            What we do
          </h2>
          <p className="mt-4 text-muted">
            Focused services for teams who care about performance, clarity,
            and execution.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
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
    <div className="rounded-lg border border-white/10 bg-white/5 p-6 transition hover:border-white/20">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-3 text-sm text-muted">{description}</p>
    </div>
  );
}