import { Container } from "@/components/ui/Container";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <Container className="py-24">
      <p className="text-sm text-muted">Case study</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{slug}</h1>
      <p className="mt-4 text-muted max-w-2xl">
        This is a placeholder. Next, we’ll replace this with real case study
        content powered by a typed content system (MDX).
      </p>
    </Container>
  );
}