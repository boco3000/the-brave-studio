import Link from "next/link";

export function DemoNotice() {
  return (
    <div className="border-b border-white/10 bg-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs text-muted">
        <p>
          This site is a <span className="text-text">portfolio demo</span> — no
          real services are being sold here.
        </p>

        <Link
          href="/work/brave-studio-demo"
          className="text-text underline decoration-white/20 underline-offset-4 hover:decoration-white/40 transition"
        >
          Read the case study
        </Link>
      </div>
    </div>
  );
}