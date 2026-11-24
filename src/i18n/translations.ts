export type Locale = 'fr' | 'en';

export const translations = {
  fr: {
    meta: {
      title: "Roger Garcia Pagès | Ingénieur Systèmes & Automatisation · Senior Data Analyst · Suisse Romande",
      description: "Portfolio professionnel de Roger Garcia Pagès. Spécialiste hybride en ingénierie de données, automatisation de processus (Python, SQL, APIs) et stratégie commerciale. Installation en Suisse Romande : Mai 2027.",
      keywords: "Roger Garcia Pagès, Ingénieur Systèmes, Automatisation, Data Analyst, Revenue Management, Genève, Vaud, Suisse Romande, Python, SQL, Power BI, Jira, FIFA",
      ogTitle: "Roger Garcia Pagès — Ingénieur Systèmes & Automatisation",
      ogDescription: "15+ ans d'expérience alliant ingénierie de données, automatisation et stratégie commerciale. Libre circulation UE/EFTA.",
    },
    nav: {
      about: "Profil",
      projects: "Projets",
      experience: "Parcours",
      cv: "Curriculum Vitae",
      contact: "Contact",
      switchLangAria: "Changer de langue",
      menuAria: "Ouvrir le menu de navigation",
      toggleThemeAria: "Basculer entre le mode clair et le mode sombre",
      themeLight: "Clair",
      themeDark: "Sombre"
    },
    hero: {
      greeting: "Bonjour, Hello, 今日は — Je suis Roger.",
      name: "Roger Garcia Pagès",
      headline: "Ingénieur Systèmes & Automatisation | Senior Data Analyst | Revenue Manager",
      bio: "Spécialiste hybride avec plus de 15 ans d'expérience alliant ingénierie de données, automatisation de processus (Python, SQL, APIs) et stratégie commerciale (Revenue Management). Passionné par la résolution de problèmes complexes et la création de solutions numériques efficaces.",
      logisticsBadge: "Nationalité Espagnole (Libre circulation UE/EFTA) · Installation en Suisse Romande\u00A0: Mai 2027",
      statusIndicator: "Disponible dès Mai 2027 · Genève / Vaud",
      ctaCV: "Télécharger CV Unifié (PDF)",
      ctaContact: "Me contacter",
      emailAria: "Envoyer un e-mail à Roger Garcia Pagès",
      callAria: "Appeler Roger Garcia Pagès",
      linkedinAria: "Voir le profil LinkedIn de Roger Garcia Pagès",
      githubAria: "Voir le profil GitHub de Roger Garcia Pagès",
      stats: {
        expYears: "15+",
        expLabel: "Années d'expérience",
        automationImpact: "-40\u00A0%",
        automationLabel: "Tâches manuelles automatisées",
        legalSupport: "FIFA",
        legalLabel: "Ingénierie L3 & Systèmes"
      }
    },
    projects: {
      sectionBadge: "Ingénierie & Données",
      title: "Projets sélectionnés",
      subtitle: "Réalisations d'architectures logicielles, pipelines de données et modélisation algorithmique.",
      viewOnGithub: "Voir sur GitHub",
      liveDemo: "Démonstration",
      analyticsBannerTitle: "Architecture d'analyse souveraine et respectueuse de la vie privée",
      analyticsBannerText: "Self-hosted Analytics\u00A0: Ce site utilise une instance privée d'Umami Analytics (sans cookies, 100\u00A0% conforme RGPD/LPD).",
      items: [
        {
          id: "email-scrapper",
          title: "Automated Email & AI Classification Pipeline",
          repoUrl: "https://github.com/rogergarciapages/EmailScrapper",
          tags: ["Python", "Playwright", "AWS S3", "Supabase", "Gemini API", "Docker"],
          description: "Pipeline d'automatisation de bout en bout conçu pour extraire, traiter et archiver des flux d'emails complexes. Le système récupère les messages via IMAP, génère des rendus visuels automatisés (Playwright), stocke les actifs sur AWS S3 et utilise l'API Gemini pour résumer et classifier intelligemment les données dans Supabase.",
          impact: "Traitement continu sans intervention humaine et classification sémantique en temps réel.",
          category: "Cloud & Automation"
        },
        {
          id: "moon-bitcoin",
          title: "Quantitative Backtesting & Statistical Analytics Engine",
          repoUrl: "https://github.com/rogergarciapages/MoonBitcoin",
          tags: ["Next.js", "TypeScript", "Prisma", "SQL", "Recharts", "Statistical Modeling"],
          description: "Moteur d'analyse exploratoire et de backtesting sur 10 ans de données historiques de marché. L'application évalue les corrélations statistiques (indice de Pearson), la dispersion de la volatilité et compare des stratégies quantitatives face au marché via des tableaux de bord interactifs.",
          impact: "Analyse vectorielle de séries temporelles haute fréquence et modélisation prédictive.",
          category: "FinTech & Data Science"
        },
        {
          id: "sunny16",
          title: "Hardware-Aware Exposure & Compatibility Engine",
          repoUrl: "https://github.com/rogergarciapages/sunny16",
          tags: ["TypeScript", "React Native", "Expo", "Relational Logic", "Algorithm Design"],
          description: "Application de calcul mathématique et moteur de règles relationnelles couvrant plus de 120 boîtiers et optiques analogiques (1950–1990). Le système croise des matrices de compatibilité mécanique complexes avec des algorithmes de calcul d'exposition en temps réel.",
          impact: "Calcul instantané déterministe hors ligne sans dépendance réseau.",
          category: "Algorithms & Mobile"
        }
      ]
    },
    experience: {
      sectionBadge: "Parcours Professionnel",
      title: "Expérience & Expertises Hybrides",
      subtitle: "Un profil multidisciplinaire combinant rigueur technique, haute disponibilité et vision économique.",
      items: [
        {
          period: "2024 – Présent",
          company: "Département Juridique de la FIFA",
          location: "Zurich / Remote",
          role: "L3 Support / Systems & Automation Engineer",
          focus: "Python, Jira, APIs, High-Availability Systems",
          description: "Ingénierie de support niveau 3 et fiabilisation des plateformes critiques du département juridique. Développement de scripts d'automatisation en Python, orchestration des flux d'API et optimisation des workflows Jira dans un environnement réglementaire strict à haute disponibilité."
        },
        {
          period: "2022 – Présent",
          company: "Atos / McDonald’s Belgique",
          location: "Remote (Usage quotidien du français)",
          role: "Auditeur & Data Analyst",
          focus: "Reporting 111 restaurants, Power BI, SQL, Compliance, -40 % manuel",
          description: "Conception et automatisation du reporting financier, opérationnel et de conformité pour 111 restaurants. Modélisation de flux ETL via SQL et création de dashboards Power BI stratégiques, générant une réduction de 40\u00A0% du temps alloué aux tâches manuelles."
        },
        {
          period: "2023",
          company: "DataForce (Projet Siri)",
          location: "Remote",
          role: "AI Data Trainer / NLP Specialist",
          focus: "Validation de datasets IA, Search Intent, Edge Cases",
          description: "Évaluation qualitative et annotation fine de requêtes vocales et contextuelles d'IA en français et espagnol. Analyse approfondie de l'intention de recherche utilisateur, validation d'arbres décisionnels NLP et identification de cas limites (edge cases)."
        },
        {
          period: "2020 – 2022",
          company: "Pivot Stratégique & Reconversion Data",
          location: "Formation d'excellence",
          role: "Spécialisation Ingénierie de Données & Cybersécurité",
          focus: "Certifications Google Data Analytics & Google Cybersecurity",
          description: "Montée en compétences approfondie en Python, SQL, R, modélisation relationnelle, architectures cloud et protocoles de sécurisation des données avec obtention de double certification professionnelle Google."
        },
        {
          period: "2009 – 2020",
          company: "BeachMate / Nexus",
          location: "Espagne / International",
          role: "Senior Revenue & Yield Manager",
          focus: "Tarification dynamique, SiteMinder, OTAs, Forecasting sur 5 destinations",
          description: "Direction de la stratégie de tarification dynamique et de distribution numérique pour un portefeuille hôtelier sur 5 marchés clés. Gestion avancée des canaux OTAs, paramétrage fin des Channel Managers (SiteMinder) et maximisation de l'ADR / RevPAR via des modèles prédictifs d'élasticité prix."
        }
      ]
    },
    cvCenter: {
      sectionBadge: "Dossiers de Candidature",
      title: "Centrale de téléchargement des CVs",
      subtitle: "Version unifiée polyvalente (Thèmes Clair & Sombre) et déclinaisons ciblées adaptées aux exigences des recruteurs et ATS suisses.",
      downloadButton: "Télécharger le PDF",
      previewButton: "Consulter en ligne",
      unifiedCard: {
        badge: "Recommandé · Polyvalent",
        title: "CV Unifié — Systèmes, Data Analytics & Revenue Operations",
        subtitle: "Synthèse complète à 360° conçue pour couvrir l'intégralité du périmètre technique et commercial des 3 profils.",
        focusLabel: "Périmètre complet unifié\u00A0:",
        focus: "Ingénierie & Automatisation Python/Jira/APIs · Architecture SQL/ETL & Power BI · IA/NLP & Datasets · Revenue Management & E-commerce.",
        summary: "Document de référence en 2 pages, fidèle à la charte typographique suisse d'origine, disponible en versions Thème Clair et Thème Sombre.",
        downloadLight: "PDF Thème Clair",
        downloadDark: "PDF Thème Sombre",
        preview: "Aperçu interactif",
        lightFile: "/cv/ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf",
        darkFile: "/cv/ROGER_GARCIA_PAGES_Unified_Resume_Dark.pdf"
      },
      cards: [
        {
          id: "tech-automation",
          tag: "Tech & Ops",
          title: "CV — Systèmes, Data & Automatisation",
          file: "/cv/ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf",
          focusLabel: "Compétences clés\u00A0:",
          focus: "Python, Jira / ServiceNow, APIs REST, Support L3, Cloud AWS/Supabase, Automatisation des flux.",
          summary: "Idéal pour les postes d'Ingénieur Automatisation, Systems Engineer, Support L3 technique ou Data Engineer orienté fiabilité opérationnelle."
        },
        {
          id: "data-analytics",
          tag: "Business Intelligence",
          title: "CV — Senior Data Analyst & BI",
          file: "/cv/ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf",
          focusLabel: "Compétences clés\u00A0:",
          focus: "SQL avancé, Power BI, ETL, Qualité des données, KPI opérationnels, Datasets IA.",
          summary: "Conçu pour les équipes Data & Analytics recherchant un analyste senior autonome capable de transformer des données complexes en valeur décisionnelle."
        },
        {
          id: "revenue-business",
          tag: "Stratégie Commerciale",
          title: "CV — Revenue Management & E-commerce",
          file: "/cv/ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf",
          focusLabel: "Compétences clés\u00A0:",
          focus: "Yield Management, Pricing dynamique, SiteMinder, OTAs, Forecasting financier, Analytics commercial.",
          summary: "Parfait pour les directions commerciales, groupes hôteliers et plateformes d'e-commerce recherchant une vision éprouvée du pilotage de la rentabilité."
        }
      ]
    },
    footer: {
      rights: "Tous droits réservés.",
      swissRomande: "Suisse Romande (Genève · Lausanne · Vaud)",
      legalStatus: "Ressortissant UE/EFTA · Mobilité Suisse Romande Mai 2027",
      builtWith: "Conçu avec Astro, TypeScript & Tailwind CSS dans le respect des standards typographiques suisses.",
      privacyNote: "Ce site respecte scrupuleusement la loi fédérale suisse sur la protection des données (LPD) et le RGPD."
    },
    contact: {
      sectionBadge: "Disponibilité & Contact",
      title: "Échangeons sur vos opportunités",
      subtitle: "Actuellement ouvert aux échanges avec les recruteurs et directeurs techniques de l'arc lémanique.",
      emailLabel: "Adresse e-mail directe",
      phoneLabel: "Ligne directe (WhatsApp & Appel)",
      locationLabel: "Zone géographique visée",
      locationValue: "Genève, Lausanne, Canton de Vaud & Arc lémanique",
      mobilityLabel: "Statut d'immigration",
      mobilityValue: "Nationalité Espagnole · Libre circulation UE/EFTA (Permis B direct)",
      sendEmail: "Écrire un e-mail",
      copyEmail: "Copier l'adresse",
      copied: "Adresse copiée\u00A0!"
    }
  },
  en: {
    meta: {
      title: "Roger Garcia Pagès | Systems & Automation Engineer · Senior Data Analyst · Western Switzerland",
      description: "Professional portfolio of Roger Garcia Pagès. Hybrid specialist in data engineering, process automation (Python, SQL, APIs), and commercial strategy. Relocating to French-Speaking Switzerland: May 2027.",
      keywords: "Roger Garcia Pagès, Systems Engineer, Automation, Data Analyst, Revenue Management, Geneva, Lausanne, Vaud, Switzerland, Python, SQL, Power BI, Jira, FIFA",
      ogTitle: "Roger Garcia Pagès — Systems & Automation Engineer",
      ogDescription: "15+ years of experience combining data engineering, automation, and commercial strategy. EU/EFTA Free Movement.",
    },
    nav: {
      about: "Profile",
      projects: "Projects",
      experience: "Trajectory",
      cv: "Curriculum Vitae",
      contact: "Contact",
      switchLangAria: "Switch language",
      menuAria: "Open navigation menu",
      toggleThemeAria: "Toggle light and dark mode",
      themeLight: "Light",
      themeDark: "Dark"
    },
    hero: {
      greeting: "Hello, Bonjour, 今日は — I'm Roger.",
      name: "Roger Garcia Pagès",
      headline: "Systems & Automation Engineer | Senior Data Analyst | Revenue Manager",
      bio: "Hybrid specialist with 15+ years of experience combining data engineering, process automation (Python, SQL, APIs), and commercial strategy (Revenue Management). Passionate about solving complex problems and turning ideas into scalable digital solutions.",
      logisticsBadge: "Spanish Nationality (EU/EFTA Free Movement) · Relocating to French-Speaking Switzerland: May 2027",
      statusIndicator: "Available from May 2027 · Geneva / Vaud",
      ctaCV: "Download Unified CV (PDF)",
      ctaContact: "Get in touch",
      emailAria: "Send an email to Roger Garcia Pagès",
      callAria: "Call Roger Garcia Pagès",
      linkedinAria: "View Roger Garcia Pagès' LinkedIn profile",
      githubAria: "View Roger Garcia Pagès' GitHub profile",
      stats: {
        expYears: "15+",
        expLabel: "Years of experience",
        automationImpact: "-40%",
        automationLabel: "Manual tasks automated",
        legalSupport: "FIFA",
        legalLabel: "L3 Systems & Engineering"
      }
    },
    projects: {
      sectionBadge: "Engineering & Data",
      title: "Selected Projects",
      subtitle: "Software architecture implementations, production data pipelines, and quantitative algorithms.",
      viewOnGithub: "View on GitHub",
      liveDemo: "Live Demo",
      analyticsBannerTitle: "Sovereign, Privacy-First Analytics Architecture",
      analyticsBannerText: "Self-hosted Analytics: This site uses a private Umami Analytics instance (cookie-free, 100% GDPR/FADP compliant).",
      items: [
        {
          id: "email-scrapper",
          title: "Automated Email & AI Classification Pipeline",
          repoUrl: "https://github.com/rogergarciapages/EmailScrapper",
          tags: ["Python", "Playwright", "AWS S3", "Supabase", "Gemini API", "Docker"],
          description: "End-to-end automation pipeline built to extract, process, and archive complex email workflows. Fetches messages via IMAP, generates automated headless screenshots (Playwright), stores assets in AWS S3, and leverages the Gemini API to summarize and classify structured data into Supabase.",
          impact: "Unattended continuous processing and real-time semantic categorization.",
          category: "Cloud & Automation"
        },
        {
          id: "moon-bitcoin",
          title: "Quantitative Backtesting & Statistical Analytics Engine",
          repoUrl: "https://github.com/rogergarciapages/MoonBitcoin",
          tags: ["Next.js", "TypeScript", "Prisma", "SQL", "Recharts", "Statistical Modeling"],
          description: "Exploratory data analysis and backtesting engine covering 10 years of historical market data. Evaluates statistical correlations (Pearson indexing), volatility dispersion, and benchmarks quantitative strategies against the market through interactive dashboards.",
          impact: "Vectorized high-frequency time-series analysis and quantitative modeling.",
          category: "FinTech & Data Science"
        },
        {
          id: "sunny16",
          title: "Hardware-Aware Exposure & Compatibility Engine",
          repoUrl: "https://github.com/rogergarciapages/sunny16",
          tags: ["TypeScript", "React Native", "Expo", "Relational Logic", "Algorithm Design"],
          description: "Mathematical calculation engine and relational compatibility system covering 120+ vintage analog cameras and lenses (1950s–1990s). Cross-references mechanical mount constraints with real-time exposure algorithms.",
          impact: "Instant deterministic calculation with zero network dependency.",
          category: "Algorithms & Mobile"
        }
      ]
    },
    experience: {
      sectionBadge: "Career Trajectory",
      title: "Career Highlights & Hybrid Expertise",
      subtitle: "A multidisciplinary background pairing deep engineering rigor, high availability, and business acumen.",
      items: [
        {
          period: "2024 – Present",
          company: "FIFA Legal Department",
          location: "Zurich / Remote",
          role: "L3 Support / Systems & Automation Engineer",
          focus: "Python, Jira, APIs, High-Availability Systems",
          description: "Level 3 systems engineering and reliability maintenance for mission-critical legal department platforms. Developing automated Python scripts, orchestrating secure API workflows, and tuning Jira service operations within a strictly audited environment."
        },
        {
          period: "2022 – Present",
          company: "Atos / McDonald’s Belgium",
          location: "Remote (Daily professional French)",
          role: "Auditor & Data Analyst",
          focus: "111 restaurants reporting, Power BI, SQL, Compliance, -40% manual workload",
          description: "Designed and automated financial, operational, and compliance reporting across 111 franchise locations. Engineered automated SQL ETL pipelines and executive Power BI dashboards, slashing manual reporting workload by 40%."
        },
        {
          period: "2023",
          company: "DataForce (Siri Project)",
          location: "Remote",
          role: "AI Data Trainer / NLP Specialist",
          focus: "AI Datasets Validation, Search Intent, Edge Cases",
          description: "Conducted high-precision evaluation and fine annotation of voice and contextual queries in French and Spanish. Analyzed intent hierarchies, tested conversational edge cases, and benchmarked NLP classification accuracy."
        },
        {
          period: "2020 – 2022",
          company: "Strategic Pivot & Data Specialization",
          location: "Advanced Technical Programs",
          role: "Data Engineering & Cybersecurity Specialization",
          focus: "Google Data Analytics & Google Cybersecurity Professional Certifications",
          description: "Deep technical immersion in Python, SQL, R, relational data modeling, cloud workflows, and data security governance, earning dual Google Professional Certifications."
        },
        {
          period: "2009 – 2020",
          company: "BeachMate / Nexus",
          location: "Spain / International",
          role: "Senior Revenue & Yield Manager",
          focus: "Dynamic pricing, SiteMinder, OTAs, 5-destination forecasting",
          description: "Led dynamic pricing and multi-channel digital distribution strategies across 5 major leisure destinations. Administered OTA partnerships, tuned SiteMinder channel integrations, and optimized ADR / RevPAR via price elasticity forecasting."
        }
      ]
    },
    cvCenter: {
      sectionBadge: "Application Dossiers",
      title: "Tailored CVs Download Center",
      subtitle: "Versatile Unified Master Resume (Light & Dark Editions) plus laser-focused CV versions tailored to Swiss recruiters, hiring managers, and ATS compliance.",
      downloadButton: "Download PDF",
      previewButton: "Preview Online",
      unifiedCard: {
        badge: "Recommended · All-in-One",
        title: "Unified Master CV — Systems, Data Analytics & Revenue Operations",
        subtitle: "Comprehensive 360° dossier engineered to cover the complete scope of engineering, analytics, and commercial roles.",
        focusLabel: "Unified Core Scope:",
        focus: "Python/Jira/APIs Systems & Automation · SQL/ETL & Power BI Architecture · AI/NLP Datasets · Revenue Management & E-commerce.",
        summary: "Precision 2-page document with exact Swiss visual cohesion, provided in both Light Theme and Dark Theme PDF editions.",
        downloadLight: "Light Theme PDF",
        downloadDark: "Dark Theme PDF",
        preview: "Interactive Preview",
        lightFile: "/cv/ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf",
        darkFile: "/cv/ROGER_GARCIA_PAGES_Unified_Resume_Dark.pdf"
      },
      cards: [
        {
          id: "tech-automation",
          tag: "Tech & Ops",
          title: "CV — Systems, Data & Automation",
          file: "/cv/ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf",
          focusLabel: "Core Competencies:",
          focus: "Python, Jira / ServiceNow, REST APIs, L3 Support, Cloud AWS/Supabase, Workflow Automation.",
          summary: "Tailored for Automation Engineer, Systems Engineer, L3 Technical Support, or Operational Data Engineer roles."
        },
        {
          id: "data-analytics",
          tag: "Business Intelligence",
          title: "CV — Senior Data Analyst & BI",
          file: "/cv/ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf",
          focusLabel: "Core Competencies:",
          focus: "Advanced SQL, Power BI, ETL, Data Quality, Operational KPIs, AI Datasets.",
          summary: "Built for Data & Analytics teams seeking an autonomous Senior Analyst capable of translating raw data into executive decisions."
        },
        {
          id: "revenue-business",
          tag: "Commercial Strategy",
          title: "CV — Revenue Management & E-commerce",
          file: "/cv/ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf",
          focusLabel: "Core Competencies:",
          focus: "Yield Management, Dynamic Pricing, SiteMinder, OTAs, Financial Forecasting, Commercial Analytics.",
          summary: "Ideal for commercial directorates, hospitality groups, and e-commerce platforms seeking seasoned profitability leadership."
        }
      ]
    },
    footer: {
      rights: "All rights reserved.",
      swissRomande: "Western Switzerland (Geneva · Lausanne · Vaud)",
      legalStatus: "EU/EFTA Citizen · Western Switzerland Relocation May 2027",
      builtWith: "Engineered with Astro, TypeScript & Tailwind CSS following Swiss International Typographic principles.",
      privacyNote: "This website strictly adheres to the Swiss Federal Act on Data Protection (FADP) and the GDPR."
    },
    contact: {
      sectionBadge: "Availability & Inquiries",
      title: "Let's Discuss New Opportunities",
      subtitle: "Actively welcoming inquiries from engineering leaders and talent recruiters across Lake Geneva.",
      emailLabel: "Direct Email Address",
      phoneLabel: "Direct Phone Line (Call & WhatsApp)",
      locationLabel: "Target Location",
      locationValue: "Geneva, Lausanne, Canton of Vaud & Lake Geneva Basin",
      mobilityLabel: "Work Authorization",
      mobilityValue: "Spanish Citizen · EU/EFTA Free Movement (Direct B Permit)",
      sendEmail: "Send an Email",
      copyEmail: "Copy Address",
      copied: "Address Copied!"
    }
  }
};
