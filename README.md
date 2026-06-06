# DepEd Orders S. 2026 — Orientation Site

> An informational, single-page website summarizing the Department of Education's key issuances for School Year 2026–2027.

---

## 📋 About

This project is a modern, responsive static website that presents the four DepEd Orders of Series 2026 in a clear, visual, and accessible format for teachers, school administrators, parents, and learners.

It was built following a custom **Civic Excellence & Resilience** design system rooted in Philippine national identity — using Philippine Blue and Sun Gold as primary colors, with semantic status indicators drawn directly from the Hayo-Hinto learning continuity framework.

---

## 📄 Orders Covered

| Order | Date Issued | Title |
|-------|-------------|-------|
| **DO 009, S. 2026** | April 17, 2026 | Guidelines on the Implementation of the Three-Term School Calendar in Basic Education |
| **DO 014, S. 2026** | June 4, 2026 | Guidelines on Learning Continuity in Emergencies |
| **DO 015, S. 2026** | June 4, 2026 | Revised Guidelines on Classroom Assessment, Grading System, and Awards and Recognition for the K–12 Basic Education Program |
| **DO 017, S. 2026** | June 4, 2026 | Strengthened Senior High School Curriculum |

---

## ✨ Features

- **Three-Term Calendar Timeline** — Visual block diagram of Term 1, 2, and 3 with proportional instructional, opening, and end-of-term blocks
- **Interactive Hazard Matrix** — Tabbed matrix for all 8 hazard types (typhoons, rainfall, earthquakes, power outages, heat, air quality, human-induced, and other emergencies) mapped to Hayo → Hinay → Hinga → Hinto stages
- **Grading Weights Visualizer** — Segmented bar charts showing Written/Oral Work, Performance Task, and Examination weights per subject category
- **Grade Descriptors** — Visual progress bars for all five grade descriptors (Advancing to Emerging) with Filipino equivalents
- **SHS Curriculum Overview** — Core subjects, elective clusters, curriculum exit pathways, and a sample General Average computation
- **Scroll-triggered animations** — Staggered fade-in on all cards and sections
- **Responsive layout** — Optimized for mobile (< 600px), tablet (600–1024px), and desktop (> 1024px)
- **Accessible** — Semantic HTML5, ARIA labels, keyboard-navigable tabs, visible focus states

---

## 🗂️ File Structure

```
orientation/
├── index.html              # Main page — all four DO sections
├── styles.css              # Design system & component styles
├── app.js                  # Interactivity (matrix tabs, scroll animations, nav)
├── DepEd_Orders_S2026.md   # Source content (DepEd policy summaries)
└── DESIGN.md               # Design system specification
```

---

## 🎨 Design System

Defined in [`DESIGN.md`](./DESIGN.md) and implemented in [`styles.css`](./styles.css).

| Token | Value | Usage |
|-------|-------|-------|
| Primary Blue | `#002576` | Headers, buttons, nav, institutional branding |
| Sun Gold | `#FFD31A` | Accents, achievements, active states |
| Surface | `#F8F9FA` | Page background |
| Hayo (Green) | `#28A745` | Safe / Continue stage |
| Hinay (Amber) | `#FFC107` | Ease-In stage |
| Hinga (Orange) | `#FD7E14` | Check-In stage |
| Hinto (Red) | `#DC3545` | Stop / Emergency stage |

**Typeface:** [Public Sans](https://fonts.google.com/specimen/Public+Sans) — a government-accessibility-oriented typeface designed for institutional clarity.

---

## 🚀 Getting Started

This is a pure static site — no build tools, no dependencies, no package manager required.

### Open Locally

Simply open `index.html` in any modern browser:

```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

### Deploy

Since this is a static site, it can be deployed to any static hosting platform:

- **GitHub Pages** — Push to a `gh-pages` branch or configure Pages from `main`
- **Netlify / Vercel** — Drag and drop the folder or connect the repository
- **Any web server** — Upload the three files (`index.html`, `styles.css`, `app.js`) to your server root

---

## 📸 Sections at a Glance

| Section | Highlights |
|---------|-----------|
| **Hero** | Animated headline, order navigation pills, issued date meta |
| **Overview** | Key facts (220 class days, 3 terms, 4 stages, 5 core subjects) + order summary cards |
| **DO 009** | Term timeline, per-term cards with exam dates, End-of-Term block schedule, key definitions |
| **DO 014** | Hayo/Hinay/Hinga/Hinto stage cards, interactive hazard matrix, learning resource grid |
| **DO 015** | Assessment component cards, grading weight bar charts, grade descriptor scale, AI ethics |
| **DO 017** | Exit pathways, track overview, core subjects list, curriculum hours, GA computation sample |

---

## ⚠️ Disclaimer

This site is an **informational summary** intended for orientation and reference purposes. Always refer to the official DepEd issuances for the authoritative and legally binding text of all orders.

---

*Department of Education — Republic of the Philippines · DO 009 · DO 014 · DO 015 · DO 017 · Series of 2026*
