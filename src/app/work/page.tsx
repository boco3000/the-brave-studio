import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { getWorkList } from "@/lib/work";
import { WorkFiltersClient } from "@/components/work/WorkFiltersClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies—structured as MDX so content scales without losing consistency.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const work = getWorkList();

  return (
    <Container className="py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Selected case studies—structured as MDX so content scales without losing consistency.
      </p>

      <WorkFiltersClient items={work} />
    </Container>
  );
}