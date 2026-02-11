import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

  const styles: Record<ButtonVariant, string> = {
    primary: "bg-[var(--color-accent)] text-black hover:opacity-90",
    ghost:
      "border border-white/15 text-text hover:border-white/30 hover:bg-white/5",
  };

  const classes = [base, styles[variant], className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
