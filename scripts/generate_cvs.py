import os

def create_simple_pdf(filename, title, subtitle, focus, sections):
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    
    # We will build a clean, valid PDF 1.4 file
    stream_content = []
    
    # Header styling
    stream_content.append("BT /F1 20 Tf 50 780 Td (ROGER GARCIA PAGES) Tj ET")
    stream_content.append(f"BT /F1 12 Tf 50 760 Td ({title.upper()}) Tj ET")
    stream_content.append(f"BT /F2 10 Tf 50 745 Td (Geneve / Lausanne / Vaud - roger.garcia75@gmail.com - +34 646 86 96 53) Tj ET")
    stream_content.append(f"BT /F2 9 Tf 50 732 Td (Nationalite Espagnole - Libre circulation UE/EFTA - Mobilite Mai 2027) Tj ET")
    
    # Horizontal divider rule
    stream_content.append("0.11 0.31 0.85 RG 2 w 50 720 m 550 720 l S")
    
    # Focus summary box
    stream_content.append("0.96 0.97 0.99 rg 50 670 500 40 re f")
    stream_content.append("0.85 0.88 0.93 RG 1 w 50 670 500 40 re S")
    stream_content.append("BT /F1 10 Tf 60 695 Td (OBJECTIF / POSITIONNEMENT SUISSE ROMANDE :) Tj ET")
    stream_content.append(f"BT /F2 9 Tf 60 680 Td ({subtitle[:110]}) Tj ET")
    
    # Competencies
    y = 650
    stream_content.append(f"BT /F1 11 Tf 50 {y} Td (COMPETENCES CLES & ENVIRONNEMENT TECHNIQUE) Tj ET")
    stream_content.append(f"0.8 0.8 0.8 RG 1 w 50 {y-4} m 550 {y-4} l S")
    
    y -= 20
    for line in focus:
        stream_content.append(f"BT /F2 9 Tf 60 {y} Td (* {line}) Tj ET")
        y -= 14
        
    y -= 10
    stream_content.append(f"BT /F1 11 Tf 50 {y} Td (PARCOURS PROFESSIONNEL & EXPERIENCES SELECTIONNEES) Tj ET")
    stream_content.append(f"0.8 0.8 0.8 RG 1 w 50 {y-4} m 550 {y-4} l S")
    
    y -= 22
    for sec in sections:
        stream_content.append(f"BT /F1 10 Tf 50 {y} Td ({sec['title']}) Tj ET")
        stream_content.append(f"BT /F2 9 Tf 400 {y} Td ({sec['dates']}) Tj ET")
        y -= 13
        stream_content.append(f"BT /F1 9 Tf 60 {y} Td ({sec['role']}) Tj ET")
        y -= 13
        for bullet in sec['bullets']:
            stream_content.append(f"BT /F2 8.5 Tf 70 {y} Td (- {bullet}) Tj ET")
            y -= 12
        y -= 8
        if y < 80:
            break

    # Footer
    stream_content.append("0.8 0.8 0.8 RG 0.5 w 50 50 m 550 50 l S")
    stream_content.append("BT /F2 8 Tf 50 38 Td (Roger Garcia Pages - Dossier Professionnel Suisse Romande - Disponible Mai 2027) Tj ET")
    stream_content.append("BT /F2 8 Tf 480 38 Td (Page 1 / 1) Tj ET")
    
    content_bytes = "\n".join(stream_content).encode('latin-1', errors='replace')
    content_len = len(content_bytes)
    
    objects = []
    
    # Object 1: Catalog
    objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj")
    
    # Object 2: Pages
    objects.append("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj")
    
    # Object 3: Page
    objects.append("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj")
    
    # Object 4: Stream
    objects.append(f"4 0 obj\n<< /Length {content_len} >>\nstream\n" + content_bytes.decode('latin-1') + "\nendstream\nendobj")
    
    # Object 5: Helvetica-Bold
    objects.append("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj")
    
    # Object 6: Helvetica
    objects.append("6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj")
    
    pdf = "%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"
    offsets = []
    for obj in objects:
        offsets.append(len(pdf.encode('latin-1')))
        pdf += obj + "\n"
        
    xref_offset = len(pdf.encode('latin-1'))
    pdf += f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n"
    for off in offsets:
        pdf += f"{off:010d} 00000 n \n"
        
    pdf += f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF"
    
    with open(filename, 'wb') as f:
        f.write(pdf.encode('latin-1'))
    print(f"Generated {filename}")

# CV 1: Tech & Automation
cv1_sections = [
    {
        "title": "FIFA - Departement Juridique (Zurich / Remote)",
        "role": "L3 Support / Systems & Automation Engineer",
        "dates": "2024 - Present",
        "bullets": [
            "Support technique N3 sur environnements critiques a haute disponibilite.",
            "Developpement de scripts d'automatisation Python et integration d'APIs REST.",
            "Orchestration et optimisation des flux Jira Service Management et bases relationnelles."
        ]
    },
    {
        "title": "Atos / McDonald's Belgique (Usage quotidien francais)",
        "role": "Auditeur & Data Analyst (Reporting 111 restaurants)",
        "dates": "2022 - Present",
        "bullets": [
            "Automatisation complete des flux ETL SQL et Power BI pour 111 etablissements.",
            "Reduction de 40% des taches manuelles et conformite stricte des donnees.",
            "Coordination bilingue quotidienne avec les equipes operationnelles et metiers."
        ]
    },
    {
        "title": "DataForce (Projet Siri)",
        "role": "AI Data Trainer / NLP Specialist",
        "dates": "2023",
        "bullets": [
            "Validation de datasets IA, evaluation d'intention et resolution de cas limites NLP.",
            "Assurance qualite rigoureuse sur des corpus complexes francais et espagnols."
        ]
    }
]

create_simple_pdf(
    "public/cv/ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf",
    "Ingenieur Systemes & Automatisation (Python / APIs / Support L3)",
    "Specialiste automatisation et fiabilisation de flux complexes, support L3 et APIs cloud.",
    [
        "Langages & Outils: Python, Bash, SQL, Git, Docker, REST APIs, JSON.",
        "Systemes & Ticketing: Jira Service Management, ServiceNow, Linux/Windows Server.",
        "Cloud & Data: AWS S3, Supabase, PostgreSQL, Architecture de pipelines.",
        "Langues: Francais (Courant C1/C2), Espagnol (Natif), Anglais (Courant C1)."
    ],
    cv1_sections
)

# CV 2: Data Analytics & BI
cv2_sections = [
    {
        "title": "Atos / McDonald's Belgique",
        "role": "Senior Data Analyst & BI Consultant",
        "dates": "2022 - Present",
        "bullets": [
            "Conception de tableaux de bord executifs Power BI pour 111 restaurants.",
            "Creation de requetes complexes SQL (jointures, CTEs, fenetrage analytique).",
            "Mise en place de regles d'integrite de donnees et controles de conformite."
        ]
    },
    {
        "title": "FIFA - Departement Juridique",
        "role": "Systems & Data Quality Engineer",
        "dates": "2024 - Present",
        "bullets": [
            "Analyse de flux de donnees juridiques et reporting strategique.",
            "Audit de coherence, extraction de metriques de performance L3."
        ]
    },
    {
        "title": "Projets Personnels & Open Source",
        "role": "Architecte Quantitative Backtesting Engine (MoonBitcoin)",
        "dates": "2023 - 2024",
        "bullets": [
            "Analyse statistique sur 10 ans de series temporelles et modelisation Pearson."
        ]
    }
]

create_simple_pdf(
    "public/cv/ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf",
    "Senior Data Analyst & Business Intelligence (SQL / Power BI / ETL)",
    "Analyste senior alliant maitrise avancee de SQL, gouvernance de la donnee et vision metier.",
    [
        "Data & BI: SQL avance, PostgreSQL, Power BI, DAX, Power Query, ETL Pipelines.",
        "Analyse Statistique: Python (Pandas, NumPy), Recharts, Modelisation correlationnelle.",
        "Qualite & Gouvernance: Nettoyage de datasets IA, audits de donnees, KPIs executifs.",
        "Certifications: Google Professional Data Analytics Certificate & Google Cybersecurity."
    ],
    cv2_sections
)

# CV 3: Revenue Management & Business Strategy
cv3_sections = [
    {
        "title": "BeachMate / Nexus (Espagne / International)",
        "role": "Senior Revenue & Yield Manager (5 destinations)",
        "dates": "2009 - 2020",
        "bullets": [
            "Strategie de tarification dynamique et distribution multicanale complexe.",
            "Gestion experte des Channel Managers (SiteMinder) et partenariats OTAs (Booking, Expedia).",
            "Modeles previsionnels de demande, optimisation proactive de l'ADR et du RevPAR."
        ]
    },
    {
        "title": "Atos / McDonald's Belgique",
        "role": "Auditeur de Gestion & Analyse de Rentabilite",
        "dates": "2022 - Present",
        "bullets": [
            "Suivi de rentabilite unitaire et conformite operationnelle sur 111 points de vente."
        ]
    }
]

create_simple_pdf(
    "public/cv/ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf",
    "Senior Revenue & Yield Manager (Tarification Dynamique / OTAs / Distribution)",
    "Expertise de plus de 10 ans en optimisation du chiffre d'affaires et distribution numerique.",
    [
        "Revenue Management: Tarification dynamique, Yield Management, Elasticite prix, Forecasting.",
        "Outils & Distribution: SiteMinder, Channel Managers, Booking.com, Expedia, GDS.",
        "Analyse de Donnees: Excel Avance, SQL, Business Analytics, Tableaux de bord financiers.",
        "Double competence: Forte culture analytique couplee a une execution commerciale pragmatique."
    ],
    cv3_sections
)
