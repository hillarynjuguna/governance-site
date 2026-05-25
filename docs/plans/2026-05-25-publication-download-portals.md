# Design Specification: Publication Download Portals

## Overview
Elevate the presentation of Hillary Njuguna's core research papers (*The Bainbridge Warning* and *The Governance Activation Gap*) on the Oscillatory Fields governance site. This update removes the messy 22,000-word inline Markdown body from the Bainbridge Warning page, replaces it with a premium downloadable resource layout, and unifies both pages with matching academic citation and download components.

---

## Architectural & Layout Changes

### 1. Remove Inline Markdown Text
* **Target File:** `src/pages/bainbridge-warning.astro`
* **Changes:**
  * Delete import of `warningEntry` content rendering.
  * Delete table of contents (TOC) sidebar.
  * Delete HTML structure for `{warningEntry ? <Content /> : ...}`.
  * Delete JS scripts managing TOC scrolling and back-to-top tracking.

### 2. Publication Portal Component
* **Path:** `src/components/shared/PublicationPortal.astro`
* **Design system styling:** Uses HSL tailored color palette (`accent` teal, `ground` dark backgrounds), smooth hover states, and monospace font pairings.
* **Cover Mockup:** 
  * A CSS/SVG-based graphic depicting a high-quality academic paper / booklet cover.
  * Displays title, series metadata, pages, and reading duration.
* **Download Station:**
  * Primary Button: "Download PDF" pointing to `/bainbridge-warning.pdf` and `/governance-activation-gap.pdf`.
  * Secondary Button: "Download EPUB" (pointing to EPUB files, falling back to clean placeholder alerts if not yet prepared).
* **Interactive Citation Station:**
  * Toggle tabs for citation formats: APA, Chicago, BibTeX.
  * Single-click copy button writing to the user's clipboard.
  * Micro-interaction: Clipboard copy displays a success state checkmark and fades back to normal.

---

## Citation Registry

### 1. The Bainbridge Warning
* **APA:**
  ```text
  Njuguna, H. (2026). The Bainbridge Warning: Behavioral Layer Exposure and Institutional AI Failure (Vol. 1). Cognitive Infrastructure Series, Oscillatory Fields.
  ```
* **Chicago:**
  ```text
  Njuguna, Hillary. The Bainbridge Warning: Behavioral Layer Exposure and Institutional AI Failure. Vol. 1. Cognitive Infrastructure Series. Oscillatory Fields, 2026.
  ```
* **BibTeX:**
  ```bibtex
  @book{njuguna2026bainbridge,
    author    = {Njuguna, Hillary},
    title     = {The Bainbridge Warning: Behavioral Layer Exposure and Institutional AI Failure},
    series    = {Cognitive Infrastructure Series},
    volume    = {1},
    year      = {2026},
    publisher = {Oscillatory Fields}
  }
  ```

### 2. The Governance Activation Gap
* **APA:**
  ```text
  Njuguna, H. (2026). The Governance Activation Gap: Toward a Runtime Governance Calculus in Agentic AI Systems (Working Paper). Oscillatory Fields.
  ```
* **Chicago:**
  ```text
  Njuguna, Hillary. "The Governance Activation Gap: Toward a Runtime Governance Calculus in Agentic AI Systems." Working Paper, Oscillatory Fields, 2026.
  ```
* **BibTeX:**
  ```bibtex
  @techreport{njuguna2026activation,
    author      = {Njuguna, Hillary},
    title       = {The Governance Activation Gap: Toward a Runtime Governance Calculus in Agentic AI Systems},
    institution = {Oscillatory Fields},
    year        = {2026},
    type        = {Working Paper}
  }
  ```

---

## Verification Plan
1. Validate file creation and syntax of the new `PublicationPortal` component.
2. Confirm both `bainbridge-warning.astro` and `governance-activation-gap.astro` build correctly.
3. Test interaction: toggle citation styles, click copy button, click download buttons.
