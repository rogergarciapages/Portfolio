# Roger Garcia Pagès — Professional Portfolio

> **Production-ready personal portfolio website** designed for recruiters, engineering managers, and executive leaders in Switzerland (Suisse Romande: Geneva, Lausanne, Vaud).  
> Built with **Astro**, **TypeScript**, and **Tailwind CSS** using the **Swiss International Typographic Style**.

---

## 🇨🇭 Positioning & Identity
- **Name:** Roger Garcia Pagès
- **Target Region:** Suisse Romande (Geneva, Lausanne, Vaud) — May 2027
- **Work Authorization:** Spanish Nationality (EU/EFTA Free Movement)

---

## 🔐 Password-Tailored Profile System (Recruiter Access)
The portfolio includes a stealth password gateway modal designed to intrigue recruiters and tailor the profile in real-time to the open role without leaving any trace in the browser URL:

| Target Role / Track | Password | Tailored View & Focus | Priority CV Document |
| :--- | :--- | :--- | :--- |
| **Data Analytics & BI** | `4855` | Senior Data Analyst, SQL, Power BI, ETL, Data Quality, Franchise Store Auditing | `ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf` |
| **Systems & Automation** | `7521` (or `1042`) | Python, Groovy, REST APIs, Jira/ServiceNow, L3 Systems Support, Cloud AWS/S3 | `ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf` |
| **Revenue Management** | `9210` (or `3600`) | Yield Management, Dynamic Pricing, OTAs, SiteMinder, Hotel & E-commerce Forecasting | `ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf` |
| **Unified 360° Profile** | `2027` (or `roger`) | Complete multidisciplinary hybrid profile (Systems, Data & Revenue) | `ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf` |

*Stealth URL Guarantee:* The URL always remains clean (`https://roger.oncewerehumans.com/` or `/en`). Even if an access code is passed via URL parameter (`?code=4855`), the system extracts it silently into `sessionStorage` and immediately sanitizes the address bar via `window.history.replaceState()`.

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
