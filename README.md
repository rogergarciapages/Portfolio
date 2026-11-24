# Roger Garcia Pagès — Professional Portfolio

> **Production-ready personal portfolio website** designed for recruiters, engineering managers, and executive leaders in Switzerland (Suisse Romande: Geneva, Lausanne, Vaud).  
> Built with **Astro**, **TypeScript**, and **Tailwind CSS** using the **Swiss International Typographic Style**.

---

## 🇨🇭 Positioning & Identity
- **Name:** Roger Garcia Pagès
- **Headline (FR):** Ingénieur Systèmes & Automatisation | Senior Data Analyst | Revenue Manager
- **Headline (EN):** Systems & Automation Engineer | Senior Data Analyst | Revenue Manager
- **Target Region:** Suisse Romande (Geneva, Lausanne, Vaud) — May 2027
- **Work Authorization:** Spanish Nationality (EU/EFTA Free Movement)

---

## ⚡ Tech Stack & Architecture
- **Framework:** [Astro 5](https://astro.build) (zero JS client payload by default, static SSG)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) configured with a bespoke Swiss design tokens system
- **Type Safety:** Full TypeScript strict mode
- **Internationalization (i18n):** Native Astro i18n routing (`/` French default, `/en` English)
- **Typography:** Inter, Plus Jakarta Sans, JetBrains Mono
- **French Typography Engine:** Strict adherence to non-breaking spaces before double punctuation (`:`, `;`, `?`, `!`)
- **Self-Hosted Privacy Analytics:** Compatible with private Umami Analytics instance (zero cookies, GDPR & Swiss FADP / LPD compliant)

---

## 📂 Project Structure
```text
Portfolio/
├── public/
│   ├── cv/                                 # 3 Tailored ATS-ready CVs
│   │   ├── ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf
│   │   ├── ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf
│   │   └── ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf
│   ├── images/
│   │   └── roger-profile.jpg               # Professional framed corporate portrait
│   ├── favicon.svg                         # Minimalist Swiss Blue icon
│   └── robots.txt                          # SEO search crawler instructions
├── src/
│   ├── components/
│   │   ├── Navbar.astro                    # Navigation with instant FR | EN toggle
│   │   ├── Hero.astro                      # High-impact Swiss hero section
│   │   ├── Projects.astro                  # 3-card GitHub showcase grid
│   │   ├── Experience.astro                # Timeline & hybrid trajectory
│   │   ├── CVDownloads.astro               # 3 Tailored download cards
│   │   └── Footer.astro                    # Direct contact & privacy notice
│   ├── layouts/
│   │   └── Layout.astro                    # Base HTML5 layout with SEO, OpenGraph, JSON-LD
│   ├── i18n/
│   │   └── translations.ts                 # Full bilingual dictionary (FR / EN)
│   ├── pages/
│   │   ├── index.astro                     # French default homepage (/)
│   │   └── en/
│   │       └── index.astro                 # English version (/en)
│   └── styles/
│       └── global.css                      # Tailwind base & Swiss grid patterns
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `^20.0.0` or `^22.0.0`
- npm, pnpm, or yarn

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) to view the site in French, or [http://localhost:4321/en](http://localhost:4321/en) for English.

### Production Build
```bash
npm run build
```
The static build will be generated in `./dist/`.

---

## 📄 License & Attribution
© 2026 Roger Garcia Pagès. All rights reserved.
