import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the builder behind The Brave Studio—sleek, modern web experiences with a performance-first mindset.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <About asPage />;
}