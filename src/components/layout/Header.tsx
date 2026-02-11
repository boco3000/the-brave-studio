"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const wasOpen = useRef(false);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Basic focus management: move focus into panel; restore to button on close
  useEffect(() => {
    if (open) {
      const first = panelRef.current?.querySelector<HTMLElement>(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    } else if (wasOpen.current) {
      buttonRef.current?.focus();
    }

    wasOpen.current = open;
  }, [open]);

  // Minimal focus trap while open
  function onPanelKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Tab") return;

    const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])',
    );
    if (!focusables || focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <header className="border-b border-white/10">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          The Brave Studio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-muted">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-text transition"
            >
              {l.label}
            </Link>
          ))}
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </nav>

        {/* Mobile button */}
        <button
          ref={buttonRef}
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted transition
                     hover:border-white/20 hover:text-text
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                     focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Simple icon without extra deps */}
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <div className="flex flex-col gap-1">
            <span
              className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </Container>

      {/* Overlay + Drawer */}
      {open ? (
        <div className="md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            id="mobile-nav"
            ref={panelRef}
            onKeyDown={onPanelKeyDown}
            role="dialog"
            aria-modal="true"
            className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm border-l border-white/10 bg-[var(--color-bg)] p-6"
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold tracking-tight">Menu</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-muted transition
                           hover:border-white/20 hover:text-text
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                           focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
              >
                Close
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-text transition
                             hover:border-white/20 hover:bg-white/10
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                             focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                >
                  {l.label}
                </Link>
              ))}

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Start a project
                </Button>
              </div>

              <p className="pt-6 text-xs text-muted">
                Fortune favors{" "}
                <span className="text-[var(--color-accent)]">The Brave</span>.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
