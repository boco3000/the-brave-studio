import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="border-b border-white/10">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          The Brave Studio
        </Link>

        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link href="/work" className="hover:text-text transition">
            Work
          </Link>
          <Link href="/services" className="hover:text-text transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-text transition">
            About
          </Link>
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </nav>
      </Container>
    </header>
  );
}
