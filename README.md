<p align="center">
  <img src="./docs/banner.png" alt="The Brave Studio banner" width="100%" />
</p>

<h1 align="center">The Brave Studio</h1>

<p align="center">
  <strong>Modern service-business website</strong> — sleek UI, accessible interactions, and MDX-powered case studies.
  <br />
  <em>Fortune favors The Brave.</em>
</p>

<p align="center">
  <a href="https://the-brave-studio.vercel.app/"><strong>Live Demo</strong></a>
  ·
  <a href="#pages--structure"><strong>Pages</strong></a>
  ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a>
  ·
  <a href="#getting-started"><strong>Run Locally</strong></a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-App%20Router-000000?logo=nextdotjs&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss&logoColor=white" />
  <img alt="MDX" src="https://img.shields.io/badge/Content-MDX-000000?logo=mdx&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Motion-Framer-0055FF?logo=framer&logoColor=white" />
  <img alt="Deployed" src="https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white" />
</p>

<hr />

# The Brave Studio

**Sleek, modern service-business website built with Next.js App Router, TypeScript, and a scalable MDX content system.**

> *Fortune favors The Brave.*

---

## Overview

**The Brave Studio** is a portfolio project designed to simulate a real-world creative studio website — the type of marketing presence freelance clients commonly need.

The goal was to build something that feels **intentional, performant, and production-ready**, not just visually impressive. The project focuses on clean architecture, reusable components, accessibility, and a content system that scales.

Rather than hardcoding pages, case studies are powered by **typed MDX content**, allowing the UI to remain consistent while content evolves independently.

---

## Live Demo

🔗 https://the-brave-studio.vercel.app/

---

## Tech Stack

- **Next.js (App Router)**
- **React + TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (with reduced-motion support)
- **MDX** for case studies
- **CSS Variables** for design tokens
- **Vercel** deployment

---

## Key Features

### Design System Foundations
- Token-based styling using CSS variables
- Reusable UI primitives (`Button`, `Card`, `Container`, `Motion`)
- Consistent spacing, typography rhythm, and layout structure

### MDX Case Study Architecture
- Content lives outside the UI layer
- Typed frontmatter (title, description, tags, role, stack)
- Static generation with scalable routing
- Featured work derived directly from content

### Accessible Interaction Patterns
- Keyboard-friendly navigation
- Mobile nav drawer with focus management
- `focus-visible` states
- Motion respects `prefers-reduced-motion`

### Performance-Minded UI
- Minimal client-side state
- Server-rendered pages
- Intentional animation usage

### Contact Experience
- Accessible contact page
- Mailto-based submission (no backend required)
- Realistic freelance workflow simulation

### SEO & Metadata
- Canonical URLs
- JSON-LD structured data
- Open Graph image
- Sitemap + robots configuration

---

## Pages & Structure

- `/` — Marketing homepage  
- `/work` — Case study index (content-driven)  
- `/work/[slug]` — Individual MDX case studies  
- `/services` — Service overview page  
- `/about` — About the builder  
- `/contact` — Mailto-based contact form  

The structure mirrors how real freelance or agency projects scale over time.

---

## Architecture Highlights

- **Content-driven Featured Work**  
  Homepage projects are sourced directly from MDX frontmatter (`featured: true`) — no duplicated data.

- **Reusable Card System**  
  Services, Work, and Process sections share a unified component for visual consistency.

- **Structured Case Study Layout**  
  Two-column header, meta panel, navigation between projects, and editorial-style content flow.

- **Server + Client Component Separation**  
  Metadata and routing remain server-side while interactive UI lives in client components.

---

## Why This Project Exists

This project demonstrates how I approach building real client websites:

- Clear hierarchy over visual noise
- Systems over one-off components
- Accessibility as a baseline, not an afterthought
- Maintainable code that scales as content grows

It reflects how I design and build freelance projects from the ground up.

---

## Getting Started

```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Deployment

Hosted on Vercel:

git push → automatic deploy

## Portfolio Notes

This is a portfolio demo project built to showcase architecture, UI systems, and modern front-end workflows.

The contact form uses a mailto fallback and does not include a backend service.

## Author

Bo Cochran
Front-End Developer focused on sleek, modern web experiences.
