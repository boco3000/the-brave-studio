import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { getWorkList } from "@/lib/work";
import { WorkFiltersClient } from "@/components/work/WorkFiltersClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies—structured as MDX so content scales without losing consistency.",
  alternates: { canonical: "/work" },
};

function WorkFiltersSkeleton() {
  return (
    <div className="mt-12">
      <div className="h-12 w-full max-w-md rounded-lg border border-white/10 bg-white/5" />
      <div className="mt-8 flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-20 rounded-full border border-white/10 bg-white/5"
          />
        ))}
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-44 rounded-lg border border-white/10 bg-white/5"
          />
        ))}
      </div>
    </div>
  );
}

export default function WorkPage() {
  const work = getWorkList();

  return (
    <Container className="py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Work</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Selected case studies—structured as MDX so content scales without losing
        consistency.
      </p>

      <Suspense fallback={<WorkFiltersSkeleton />}>
        <WorkFiltersClient items={work} />
      </Suspense>
    </Container>
  );
}
