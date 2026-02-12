import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services from The Brave Studio: modern marketing sites, UI systems, performance, SEO, and accessibility.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <Container className="py-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="mt-4 text-muted">
          Focused offerings for teams who care about performance, clarity, and execution.
        </p>
      </header>

      <div className="mt-12">
        <Services />
      </div>
    </Container>
  );
}