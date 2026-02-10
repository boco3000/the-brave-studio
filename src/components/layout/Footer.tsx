import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-8 text-sm text-muted flex justify-between">
        <span>© {new Date().getFullYear()} The Brave Studio</span>
        <span>Fortune favors The Brave.</span>
      </Container>
    </footer>
  );
}