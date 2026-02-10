import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = false }: CardProps) {
  const base =
    "rounded-lg border border-white/10 bg-white/5 transition";

  const interactiveStyles =
    "hover:border-white/20 hover:bg-white/7";

  const classes = [base, interactive ? interactiveStyles : "", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};

export function CardTitle({ children, className }: CardTitleProps) {
  const classes = ["text-lg font-medium", className].filter(Boolean).join(" ");
  return <h3 className={classes}>{children}</h3>;
}

type CardDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export function CardDescription({ children, className }: CardDescriptionProps) {
  const classes = ["mt-3 text-sm text-muted", className]
    .filter(Boolean)
    .join(" ");
  return <p className={classes}>{children}</p>;
}