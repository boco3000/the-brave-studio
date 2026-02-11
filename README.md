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

🔗 *Add your Vercel deployment link here*

---

## Tech Stack

- **Next.js (App Router)**
- **React + TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (with reduced-motion support)
- **MDX** for case studies
- **CSS Variables** for design tokens

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
- `focus-visible` states
- Motion respects `prefers-reduced-motion`

### Performance-Minded UI
- Minimal client-side state
- Server-rendered pages
- Intentional animation usage

---

## Pages & Structure

- `/` — Marketing homepage  
- `/work` — Case study index (content-driven)  
- `/work/[slug]` — Individual MDX case studies

The structure mirrors how real freelance or agency projects scale over time.

---

## Architecture Highlights

- **Content-driven Featured Work**  
  Homepage projects are sourced directly from MDX frontmatter (`featured: true`) — no duplicated data.

- **Reusable Card System**  
  Services, Work, and Process sections share a unified component for visual consistency.

- **Structured Case Study Layout**  
  Two-column header, meta panel, navigation between projects, and editorial-style content flow.

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