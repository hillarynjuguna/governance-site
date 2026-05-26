# Design Specification: Oscillatory Fields Site Overhaul (Astro Adaptation)

This design document outlines the technical design, directory structure, content architecture, and SEO validation protocols for the Oscillatory Fields website overhaul, adapted for the Astro framework.

## 1. Objectives & Guidelines

- **Framework Sovereignty**: Stay on Astro. Use `.astro` components for server-rendered HTML by default. Keep client-side JavaScript strictly constrained to the CIR Diagnostic Radar Chart and the Interactive Stack Diagram (using React islands).
- **Branding & Visuals**: Maintain the serious, brutalist-adjacent dark aesthetic using zinc/slate palettes. Use calibrated amber (`#D97706`) as the primary CTA and interactive highlight color.
- **Substantive Content (Non-Commodity)**: Every single route must have unique, high-quality, framework-native content (3–5 paragraphs for placeholders), eliminating empty templates or "coming soon" filler.
- **E-E-A-T & Trust**: Each case study needs a formal "Limitations" section to ground authority. The glossary page must use schema-backed definitions and deep cross-links.

## 2. Directory Structure

```
src/
├── components/
│   ├── home/
│   │   ├── HeroSection.astro
│   │   └── StackDiagram.tsx          # Interactive SVG diagram (React island)
│   ├── layout/
│   │   ├── Layout.astro              # Central layout with global & per-page JSON-LD injection
│   │   ├── Header.astro              # Fixed sticky navigation bar
│   │   └── Footer.astro
│   ├── cir/
│   │   └── RadarChart.tsx            # CIR Diagnostic Radar Chart (React island)
│   └── shared/
│       └── Breadcrumbs.astro         # Reusable navigation breadcrumbs
├── data/
│   ├── glossary.ts                   # Centralized terms for definition matching
│   └── case-studies.ts               # Case study metadata and content
├── pages/
│   ├── index.astro                   # Overhauled Homepage
│   ├── cir-diagnostic-engine.astro   # Overhauled CIR page
│   ├── bainbridge-warning.astro      # Overhauled Bainbridge page
│   ├── rsps-architecture.astro       # Architectural explanation page
│   ├── sovereign-types.astro         # Data contract explanation page
│   ├── martha-course.astro           # Constitutional AI governance training page
│   ├── ce-ledger.astro               # Constitutional event ledger page
│   ├── delta-instrument.astro        # Gap measurement page
│   ├── premise.astro                 # Primitives and theoretical base page
│   ├── glossary.astro                # Glossary page
│   ├── 404.astro                     # Custom 404 page
│   └── case-studies/
│       └── [slug].astro              # E-E-A-T Case Study Pages
├── utils/
│   ├── metadata.ts                   # Page metadata generators
│   └── structured-data.ts            # JSON-LD Schema generators
public/
├── robots.txt                        # Standard robots.txt
└── assets/
    └── icons/                        # Tool SVGs
```

## 3. SEO & Structured Data (JSON-LD)

Every page must dynamically inject JSON-LD schemas inside the layout `<head>` tag. 
- The homepage will feature a connected `Organization` and `WebSite` block using matching `@id` references to describe publisher relationships cleanly.
- Tool pages will render `SoftwareApplication` or `TechArticle` schemas.
- Case studies will export `Article` schemas.
- Glossary entries will export `DefinedTerm` schemas.
- All pages will feature a hierarchical `BreadcrumbList`.

## 4. Visual Components

- **Sticky Navigation Bar**: Placed in `src/components/layout/Header.astro`. Standard anchor links for instant, crawlable page discovery.
- **Interactive Stack Diagram**: Built as a React component (`src/components/home/StackDiagram.tsx`) loaded via Astro island (`client:load`). Employs clickable SVGs with detailed screen-reader titles (`<title>`) and fallback text to guide crawlers.
- **CIR Radar Chart**: Built in `src/components/cir/RadarChart.tsx` loaded via Astro island (`client:load`). Renders a mock dashboard showing axes for the 4 primitives, scoring visualizations, and architecture selector buttons (Chatbot, Coding Agent, Clinical System) that change scores instantly.
