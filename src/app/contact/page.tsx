import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with The Brave Studio. Reach out to discuss modern web experiences.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactForm />;
}