"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Project Inquiry — ${name.trim() || "The Brave Studio"}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    // TODO: replace with your real email address
    window.location.href = `mailto:bocochran8@gmail.com?subject=${subject}&body=${body}`;
  }

  const canSend = Boolean(name.trim() && email.trim() && message.trim());

  return (
    <section className="border-t border-white/10">
      <Container className="py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Start a Project
          </h1>

          <p className="mt-4 text-muted">
            This is a portfolio demo — but feel free to reach out if you'd like
            to discuss a real build or collaboration.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 max-w-xl space-y-6">
          <Field label="Name" htmlFor="contact-name">
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                         focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            />
          </Field>

          <Field label="Email" htmlFor="contact-email">
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                         focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            />
          </Field>

          <Field label="Project Details" htmlFor="contact-message">
            <textarea
              id="contact-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are you building? Timeline, pages, goals, etc."
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-text placeholder:text-muted
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                         focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            />
          </Field>

          <button
            type="submit"
            disabled={!canSend}
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)]
                       px-5 py-3 text-sm font-medium text-black transition hover:opacity-90
                       disabled:opacity-40 disabled:cursor-not-allowed
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]
                       focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            Send Message
          </button>

          <p className="text-xs text-muted">
            Uses your email client via <span className="text-text">mailto:</span>{" "}
            (no backend).
          </p>
        </form>
      </Container>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm text-muted">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}