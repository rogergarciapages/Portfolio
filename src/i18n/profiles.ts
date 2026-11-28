export type ProfileType = 'tech' | 'data' | 'revenue' | 'master';

export interface ProfileData {
  type: ProfileType;
  badge: {
    fr: string;
    en: string;
  };
  headline: {
    fr: string;
    en: string;
  };
  bio: {
    fr: string;
    en: string;
  };
  stats: {
    stat1: { val: string; fr: string; en: string };
    stat2: { val: string; fr: string; en: string };
    stat3: { val: string; fr: string; en: string };
  };
  primaryCV: {
    file: string;
    frName: string;
    enName: string;
  };
}

export const PASSWORDS: Record<string, ProfileType> = {
  // Data Analytics & Business Intelligence
  '4855': 'data',
  
  // Systems & Automation Engineering
  '7521': 'tech',
  '1042': 'tech',
  
  // Revenue Management & Commercial Strategy
  '9210': 'revenue',
  '3600': 'revenue',
  
  // Master / Unified 360° Profile
  '2027': 'master',
  'roger': 'master'
};

export const PROFILES: Record<ProfileType, ProfileData> = {
  data: {
    type: 'data',
    badge: {
      fr: 'Profil Activé : Senior Data Analyst & Business Intelligence',
      en: 'Active Profile: Senior Data Analyst & Business Intelligence'
    },
    headline: {
      fr: 'Senior Data Analyst | Business Intelligence Specialist | Analytics Engineer',
      en: 'Senior Data Analyst | Business Intelligence Specialist | Analytics Engineer'
    },
    bio: {
      fr: 'Spécialiste senior en analyse de données et Business Intelligence avec plus de 15 ans d\'expérience dans la transformation de flux complexes en décisions stratégiques. Expert en modélisation SQL, pipelines ETL (Python/Pandas), tableaux de bord Power BI et gouvernance de la donnée dans des écosystèmes internationaux stricts (Atos/McDonald\'s, FIFA, DataForce).',
      en: 'Senior Data Analyst & Business Intelligence Specialist with 15+ years of experience turning complex data streams into executive decisions. Expert in SQL data modeling, automated ETL pipelines (Python/Pandas), interactive Power BI dashboards, and data quality governance across tier-1 organizations.'
    },
    stats: {
      stat1: { val: '15+', fr: 'Années d\'expérience Data', en: 'Years Data Experience' },
      stat2: { val: '-40 %', fr: 'Charge manuelle de reporting', en: 'Manual reporting reduction' },
      stat3: { val: '111', fr: 'Restaurants en supervision BI', en: 'Franchise stores audited' }
    },
    primaryCV: {
      file: '/cv/ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf',
      frName: 'Télécharger CV Data & BI (PDF)',
      enName: 'Download Data & BI CV (PDF)'
    }
  },

  tech: {
    type: 'tech',
    badge: {
      fr: 'Profil Activé : Ingénieur Systèmes & Automatisation',
      en: 'Active Profile: Systems & Automation Engineer'
    },
    headline: {
      fr: 'Ingénieur Systèmes & Automatisation | L3 Support & Cloud Engineer',
      en: 'Systems & Automation Engineer | L3 Support & Cloud Engineer'
    },
    bio: {
      fr: 'Ingénieur Systèmes, Data & Automatisation avec plus de 15 ans d\'expérience dans la conception de solutions scalables en Python, l\'architecture d\'APIs et l\'orchestration de workflows Jira/ServiceNow. Spécialiste de la haute disponibilité, du support L3 et de la fiabilisation des opérations critiques d\'entreprise (FIFA, Atos).',
      en: 'Systems, Data & Automation Engineer with 15+ years of experience building scalable Python solutions, REST API architectures, and Jira/ServiceNow workflow orchestration. Proven track record in high-availability enterprise environments, L3 systems engineering, and incident resolution.'
    },
    stats: {
      stat1: { val: '15+', fr: 'Années d\'ingénierie', en: 'Years Systems Eng.' },
      stat2: { val: '99.9%', fr: 'Disponibilité systèmes', en: 'Systems Uptime SLA' },
      stat3: { val: 'FIFA', fr: 'Département Juridique L3', en: 'Legal Dept L3 Support' }
    },
    primaryCV: {
      file: '/cv/ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf',
      frName: 'Télécharger CV Systèmes & Ops (PDF)',
      enName: 'Download Systems & Ops CV (PDF)'
    }
  },

  revenue: {
    type: 'revenue',
    badge: {
      fr: 'Profil Activé : Senior Revenue Manager & E-commerce',
      en: 'Active Profile: Senior Revenue Manager & E-commerce'
    },
    headline: {
      fr: 'Senior Revenue & Yield Manager | E-commerce & Pricing Strategist',
      en: 'Senior Revenue & Yield Manager | E-commerce & Pricing Strategist'
    },
    bio: {
      fr: 'Spécialiste senior en Revenue & Yield Management et E-commerce avec plus de 15 ans d\'expérience dans la maximisation des revenus (RevPAR/ADR), la tarification dynamique et la négociation multicanal (OTAs, Tour-Opérateurs). Profil hybride rare combinant stratégie commerciale pointue et compétences avancées en analyse de données (SQL, Power BI, Python).',
      en: 'Senior Revenue & Yield Management Specialist with 15+ years of experience maximizing revenue (RevPAR/ADR), dynamic pricing, and multichannel distribution (OTAs, Tour Operators). Unique hybrid profile pairing executive commercial acumen with data analytics mastery (SQL, Power BI, Python).'
    },
    stats: {
      stat1: { val: '15+', fr: 'Années en Yield & Revenue', en: 'Years Yield & Revenue' },
      stat2: { val: '5', fr: 'Destinations internationales', en: 'Destinations Managed' },
      stat3: { val: '600+', fr: 'Unités sous tarification dynamique', en: 'Units optimized' }
    },
    primaryCV: {
      file: '/cv/ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf',
      frName: 'Télécharger CV Revenue & Business (PDF)',
      enName: 'Download Revenue & Business CV (PDF)'
    }
  },

  master: {
    type: 'master',
    badge: {
      fr: 'Profil Activé : Dossier Unifié 360° (Systèmes, Data & Revenue)',
      en: 'Active Profile: Unified 360° Dossier (Systems, Data & Revenue)'
    },
    headline: {
      fr: 'Ingénieur Systèmes & Automatisation | Senior Data Analyst | Revenue Manager',
      en: 'Systems & Automation Engineer | Senior Data Analyst | Revenue Manager'
    },
    bio: {
      fr: 'Spécialiste hybride avec plus de 15 ans d\'expérience alliant ingénierie de données, automatisation de processus (Python, SQL, APIs) et stratégie commerciale (Revenue Management). Passionné par la résolution de problèmes complexes et la création de solutions numériques efficaces.',
      en: 'Hybrid specialist with 15+ years of experience combining data engineering, process automation (Python, SQL, APIs), and commercial strategy (Revenue Management). Passionate about solving complex problems and turning ideas into scalable digital solutions.'
    },
    stats: {
      stat1: { val: '15+', fr: 'Années d\'expérience', en: 'Years of experience' },
      stat2: { val: '-40 %', fr: 'Tâches manuelles automatisées', en: 'Manual tasks automated' },
      stat3: { val: 'FIFA', fr: 'Ingénierie L3 & Systèmes', en: 'L3 Systems & Engineering' }
    },
    primaryCV: {
      file: '/cv/ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf',
      frName: 'Télécharger CV Unifié (PDF)',
      enName: 'Download Unified CV (PDF)'
    }
  }
};
