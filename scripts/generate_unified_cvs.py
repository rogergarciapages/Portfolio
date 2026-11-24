import base64
import os
from playwright.sync_api import sync_playwright

def get_base64_image(image_path):
    with open(image_path, 'rb') as f:
        return 'data:image/jpeg;base64,' + base64.b64encode(f.read()).decode('utf-8')

image_data_uri = get_base64_image('public/images/roger-profile.jpg')

def generate_resume_html(theme='light'):
    is_dark = (theme == 'dark')
    
    # Color palette
    bg_color = '#0F172A' if is_dark else '#FFFFFF'
    text_primary = '#F8FAFC' if is_dark else '#111827'
    text_secondary = '#94A3B8' if is_dark else '#374151'
    text_muted = '#64748B' if is_dark else '#6B7280'
    accent_bar = '#38BDF8' if is_dark else '#0070BA'
    accent_color = '#38BDF8' if is_dark else '#0070BA'
    border_color = '#334155' if is_dark else '#D1D5DB'
    card_bg = '#1E293B' if is_dark else '#F9FAFB'
    bullet_color = '#38BDF8' if is_dark else '#0070BA'
    
    html = f"""<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<style>
  @page {{
    size: A4 portrait;
    margin: 0;
  }}
  *, *::before, *::after {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: {bg_color};
    color: {text_primary};
    line-height: 1.35;
    font-size: 9.2pt;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
  .page {{
    width: 210mm;
    min-height: 297mm;
    height: 297mm;
    position: relative;
    padding: 16mm 18mm 16mm 22mm;
    background-color: {bg_color};
    page-break-after: always;
    overflow: hidden;
  }}
  .page:last-child {{
    page-break-after: avoid;
  }}
  /* Left decorative accent stripe matching original PDF documents */
  .left-accent-stripe {{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 6mm;
    background-color: {accent_bar};
  }}
  
  /* Header Layout */
  .header {{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4.5mm;
  }}
  .header-content {{
    flex: 1;
    padding-right: 5mm;
  }}
  .candidate-name {{
    font-size: 21pt;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: {text_primary};
    line-height: 1.1;
    margin-bottom: 1.5mm;
    text-transform: uppercase;
  }}
  .candidate-title {{
    font-size: 11pt;
    font-weight: 600;
    color: {accent_color};
    margin-bottom: 2mm;
    letter-spacing: -0.01em;
  }}
  .contact-row {{
    font-size: 8.5pt;
    color: {text_secondary};
    margin-bottom: 1.2mm;
  }}
  .contact-row a {{
    color: {text_secondary};
    text-decoration: none;
  }}
  .logistics-info {{
    font-size: 8.2pt;
    color: {text_secondary};
    line-height: 1.3;
  }}
  .logistics-badge {{
    font-weight: 600;
    color: {text_primary};
  }}
  
  .photo-container {{
    width: 27mm;
    height: 27mm;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid {border_color};
    flex-shrink: 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }}
  .photo-container img {{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }}

  /* Section Styling */
  .section {{
    margin-bottom: 4mm;
  }}
  .section-title {{
    font-size: 9.8pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: {text_primary};
    padding-bottom: 1mm;
    border-bottom: 1px solid {border_color};
    margin-bottom: 2.2mm;
  }}
  
  /* Profile Text */
  .profile-text {{
    font-size: 8.6pt;
    color: {text_secondary};
    line-height: 1.38;
    text-align: justify;
    margin-bottom: 1mm;
  }}
  .profile-text p + p {{
    margin-top: 1.2mm;
  }}

  /* Skills Grid / Pillars */
  .skills-list {{
    list-style: none;
  }}
  .skills-item {{
    font-size: 8.4pt;
    color: {text_secondary};
    margin-bottom: 1.5mm;
    position: relative;
    padding-left: 3.5mm;
    line-height: 1.32;
  }}
  .skills-item::before {{
    content: "▪";
    position: absolute;
    left: 0;
    top: 0;
    color: {bullet_color};
    font-size: 9pt;
  }}
  .skills-category {{
    font-weight: 700;
    color: {text_primary};
  }}

  /* Experience Items */
  .exp-item {{
    margin-bottom: 3.5mm;
  }}
  .exp-header {{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.8mm;
  }}
  .exp-role-company {{
    font-size: 9.3pt;
    font-weight: 700;
    color: {text_primary};
  }}
  .exp-role-company .company {{
    color: {accent_color};
    font-weight: 700;
  }}
  .exp-dates {{
    font-size: 8.2pt;
    font-weight: 600;
    color: {text_muted};
    white-space: nowrap;
  }}
  .exp-bullets {{
    list-style: none;
    margin-top: 1mm;
  }}
  .exp-bullet {{
    font-size: 8.4pt;
    color: {text_secondary};
    margin-bottom: 1.2mm;
    position: relative;
    padding-left: 3.5mm;
    line-height: 1.34;
  }}
  .exp-bullet::before {{
    content: "▪";
    position: absolute;
    left: 0;
    top: 0;
    color: {bullet_color};
    font-size: 8.5pt;
  }}

  /* Languages & Education */
  .lang-text {{
    font-size: 8.5pt;
    color: {text_secondary};
    line-height: 1.35;
  }}
  .edu-item {{
    margin-bottom: 2mm;
  }}
  .edu-degree {{
    font-size: 8.8pt;
    font-weight: 700;
    color: {text_primary};
  }}
  .edu-school {{
    font-size: 8.4pt;
    color: {text_secondary};
  }}
  .edu-details {{
    font-size: 8pt;
    color: {text_muted};
    margin-top: 0.5mm;
  }}

  /* Page Footer Note */
  .page-footer {{
    position: absolute;
    bottom: 8mm;
    left: 22mm;
    right: 18mm;
    display: flex;
    justify-content: space-between;
    font-size: 7.5pt;
    color: {text_muted};
    border-top: 0.5px solid {border_color};
    padding-top: 1.5mm;
  }}
</style>
</head>
<body>

<!-- PAGE 1 -->
<div class="page">
  <div class="left-accent-stripe"></div>

  <!-- Header -->
  <div class="header">
    <div class="header-content">
      <h1 class="candidate-name">Roger Garcia Pagès</h1>
      <div class="candidate-title">Ingénieur Systèmes, Senior Data Analyst & Revenue Operations</div>
      <div class="contact-row">
        <span>roger.garcia75@gmail.com</span> &nbsp;|&nbsp; <span>+34 646 86 96 53</span> &nbsp;|&nbsp; <span>linkedin.com/in/roger-garcia-pages</span> &nbsp;|&nbsp; <span>github.com/rogergarciapages</span>
      </div>
      <div class="logistics-info">
        <div>Autorisation de travail suisse / Schengen (Nationalité espagnole – Libre circulation UE/EFTA)</div>
        <div>Suisse Romande (Disponibilité pour déménagement&nbsp;: Mai 2027) &nbsp;|&nbsp; Date de naissance&nbsp;: 01.11.1975</div>
      </div>
    </div>
    <div class="photo-container">
      <img src="{image_data_uri}" alt="Roger Garcia Pagès" />
    </div>
  </div>

  <!-- Profil Professionnel -->
  <div class="section">
    <div class="section-title">Profil Professionnel</div>
    <div class="profile-text">
      <p>Spécialiste senior hybride avec plus de 15 ans d'expérience combinant ingénierie de données, automatisation de processus complexes (Python, SQL, APIs, Jira) et pilotage de la stratégie commerciale (Revenue Management & E-commerce). Profil analytique de haut niveau, habitué à opérer dans des écosystèmes internationaux de premier plan (FIFA, Atos, McDonald's) exigeant haute disponibilité, conformité stricte et précision absolue.</p>
      <p>Expert dans la conception d'architectures logicielles fiables, l'automatisation de pipelines ETL décisionnels (réduisant jusqu'à 40&nbsp;% la charge manuelle) et la modélisation prédictive de la performance financière. Bilingue espagnol/catalan, anglais courant (C1) et français professionnel (langue de travail active au quotidien).</p>
    </div>
  </div>

  <!-- Compétences Clés & Stack Technique (4 Piliers Unifiés) -->
  <div class="section">
    <div class="section-title">Compétences Clés & Stack Technique</div>
    <ul class="skills-list">
      <li class="skills-item">
        <span class="skills-category">Ingénierie, Cloud & Automatisation&nbsp;:</span> Python, Groovy, Intégration d'APIs REST, Postman, Power Automate, ScriptRunner, Linux, Docker, Git, AWS (S3), Google Cloud, Azure, Splunk, Surveillance des systèmes & Résolution d'incidents L3.
      </li>
      <li class="skills-item">
        <span class="skills-category">Data, BI & Analytics&nbsp;:</span> SQL (requêtes avancées, CTEs, optimisation ETL), Power BI (DAX, Power Query), Pandas, NumPy, Looker, Excel avancé (modélisation financière & VBA), Data Wrangling, Contrôle qualité (Data Quality), Storytelling & KPIs.
      </li>
      <li class="skills-item">
        <span class="skills-category">IA, NLP & Gouvernance&nbsp;:</span> Validation de jeux de données IA (Datasets), NLP & Annotation sémantique, Analyse de l'intention utilisateur (Search Intent), Détection d'anomalies, Audit de conformité (Compliance), Analyse de causes racines (Root Cause Analysis).
      </li>
      <li class="skills-item">
        <span class="skills-category">Business Systems, Revenue & E-commerce&nbsp;:</span> Jira Service Management, ServiceNow, Revenue & Yield Management, Tarification dynamique (Dynamic Pricing), Prévisions (Forecasting RevPAR/ADR), SiteMinder, PMS, OTAs, Web & SEO (Next.js, Astro, Supabase, TypeScript).
      </li>
    </ul>
  </div>

  <!-- Expérience Professionnelle (Partie 1: Postes récents de premier plan) -->
  <div class="section" style="margin-bottom: 0;">
    <div class="section-title">Expérience Professionnelle</div>

    <!-- FIFA -->
    <div class="exp-item">
      <div class="exp-header">
        <div class="exp-role-company">L3 Support / Systems & Data Automation Engineer | <span class="company">Département Juridique de la FIFA (Zurich)</span></div>
        <div class="exp-dates">2024 – Présent</div>
      </div>
      <ul class="exp-bullets">
        <li class="exp-bullet">Supervision et fiabilisation des systèmes critiques d'entreprise, traitement des escalades et résolution des incidents techniques de niveau 3 dans un environnement international à haute disponibilité.</li>
        <li class="exp-bullet">Conception et déploiement de solutions d'automatisation logicielle basées sur Python, Groovy, Jira Service Management et des intégrations d'APIs REST, réduisant drastiquement les interventions manuelles.</li>
        <li class="exp-bullet">Automatisation des pipelines d'extraction et de traitement de données juridiques et opérationnelles (SQL, Pandas) pour le suivi de l'activité mondiale et la production de rapports stratégiques d'aide à la décision.</li>
        <li class="exp-bullet">Amélioration mesurable de la disponibilité des plateformes et des temps de réponse grâce à un monitoring proactif et à l'analyse rigoureuse des causes racines (Root Cause Analysis).</li>
      </ul>
    </div>

    <!-- Atos / McDonald's -->
    <div class="exp-item" style="margin-bottom: 0;">
      <div class="exp-header">
        <div class="exp-role-company">Auditeur & Senior Data Analyst | <span class="company">Atos / McDonald’s Belgique (Remote – Usage quotidien du français)</span></div>
        <div class="exp-dates">2022 – Présent</div>
      </div>
      <ul class="exp-bullets">
        <li class="exp-bullet">Pilotage du reporting analytique, financier et de conformité opérationnelle pour un réseau de 111 restaurants McDonald's sous des standards d'audit rigoureux.</li>
        <li class="exp-bullet">Automatisation complète des flux ETL et des pipelines de données (SQL, Power BI, Excel), éliminant 40&nbsp;% des charges manuelles et supprimant les erreurs de saisie.</li>
        <li class="exp-bullet">Création et maintenance de tableaux de bord exécutifs interactifs sous Power BI pour le suivi quotidien des KPIs de vente, marges, pertes et conformité.</li>
        <li class="exp-bullet">Audit statistique approfondi des processus d'affaires et détection proactive des anomalies financières et des dérives opérationnelles.</li>
      </ul>
    </div>

  </div>

  <div class="page-footer">
    <span>Roger Garcia Pagès — Dossier Professionnel Unifié (Suisse Romande)</span>
    <span>Page 1 / 2</span>
  </div>
</div>

<!-- PAGE 2 -->
<div class="page">
  <div class="left-accent-stripe"></div>

  <!-- Suite Expérience Professionnelle -->
  <div class="section">
    <div class="section-title">Expérience Professionnelle (Suite)</div>

    <!-- DataForce Siri -->
    <div class="exp-item">
      <div class="exp-header">
        <div class="exp-role-company">AI Data Trainer & NLP Specialist | <span class="company">DataForce (Projet Siri)</span></div>
        <div class="exp-dates">2023 (Mission de 6 mois)</div>
      </div>
      <ul class="exp-bullets">
        <li class="exp-bullet">Analyse quantitative et qualitative de flux massifs de requêtes vocales et textuelles (Search Intent) pour accroître la pertinence des algorithmes conversationnels et des modèles d'IA.</li>
        <li class="exp-bullet">Définition des règles de gouvernance, structuration des cadres d'étiquetage (Labeling Frameworks) et contrôle qualité rigoureux (Data Quality) des jeux d'entraînement en français et espagnol.</li>
        <li class="exp-bullet">Identification fine des cas limites (Edge Cases), des ambiguïtés sémantiques et des erreurs de classification pour guider les cycles d'apprentissage continu des modèles NLP.</li>
      </ul>
    </div>

    <!-- Pivot Stratégique -->
    <div class="exp-item">
      <div class="exp-header">
        <div class="exp-role-company">Ingénieur en Reconversion Technologique & Projets Personnels | <span class="company">Spécialisation Data & Cybersécurité</span></div>
        <div class="exp-dates">2020 – 2022</div>
      </div>
      <ul class="exp-bullets">
        <li class="exp-bullet">Transition proactive initiée lors de la crise sanitaire : montée en compétences intensive sur l'ingénierie de données, l'architecture logicielle moderne et l'analyse décisionnelle.</li>
        <li class="exp-bullet">Obtention des certifications professionnelles Google Data Analytics et Google Cybersecurity (approfondissement de Python, SQL, R, modélisation relationnelle, architectures cloud et sécurité des systèmes).</li>
      </ul>
    </div>

    <!-- BeachMate / Nexus -->
    <div class="exp-item">
      <div class="exp-header">
        <div class="exp-role-company">Senior Revenue & Yield Manager | <span class="company">BeachMate Hotels / CheckIN Hotels / Nexus</span></div>
        <div class="exp-dates">2009 – 2020</div>
      </div>
      <ul class="exp-bullets">
        <li class="exp-bullet">Direction complète de la stratégie de tarification dynamique (Dynamic Pricing) et de distribution numérique pour un portefeuille hôtelier sur 5 destinations (500–600 unités).</li>
        <li class="exp-bullet">Négociation des contrats tarifaires, contingents et conditions commerciales avec les principales plateformes OTAs (Booking.com, Expedia, Voyage Privé) et les tour-opérateurs internationaux.</li>
        <li class="exp-bullet">Administration technique de l'écosystème de distribution (Channel Manager SiteMinder, PMS, moteurs de réservation, APIs) avec synchronisation en temps réel des disponibilités et Stop Sales.</li>
        <li class="exp-bullet">Développement de modèles prédictifs de la demande (Forecasting) fondés sur l'analyse de données historiques, optimisant l'occupation, l'ADR et le RevPAR.</li>
        <li class="exp-bullet">Audit rigoureux des flux de facturation, contrôle de parité tarifaire et détection des fuites de revenus (revenue leakage) grâce à l'analyse avancée des bases de données de vente.</li>
      </ul>
    </div>

  </div>

  <!-- Langues -->
  <div class="section">
    <div class="section-title">Langues</div>
    <div class="lang-text">
      <strong>Espagnol / Catalan&nbsp;:</strong> Natif &nbsp;|&nbsp; 
      <strong>Anglais&nbsp;:</strong> Courant (C1) &nbsp;|&nbsp; 
      <strong>Français&nbsp;:</strong> Professionnel (C1/B2 – Langue de travail active au quotidien)
    </div>
  </div>

  <!-- Formation & Certifications -->
  <div class="section">
    <div class="section-title">Formation & Certifications</div>
    
    <div class="edu-item">
      <div class="edu-degree">Certificat Professionnel Google Data Analytics</div>
      <div class="edu-details">SQL avancé, programmation Python, Business Intelligence, modélisation ETL et nettoyage de données.</div>
    </div>

    <div class="edu-item">
      <div class="edu-degree">Certificat Professionnel Google Cybersecurity</div>
      <div class="edu-details">Opérations de sécurité, détection des menaces, conformité, protocoles de chiffrement et scripts Python.</div>
    </div>

    <div class="edu-item">
      <div class="edu-degree">Certifications Techniques & Spécialisations Complémentaires</div>
      <div class="edu-details">Python, Jira Service Management, Postman API, NP#, AWS Cloud Essentials & SQL Database Design.</div>
    </div>

    <div class="edu-item">
      <div class="edu-degree">Diplôme d'Études Supérieures en Gestion Hôtelière & Masters in Revenue Management</div>
      <div class="edu-school">Universitat de Girona &nbsp;|&nbsp; 360 Hotel Management Academy</div>
    </div>

  </div>

  <div class="page-footer">
    <span>Roger Garcia Pagès — Dossier Professionnel Unifié (Suisse Romande)</span>
    <span>Page 2 / 2</span>
  </div>
</div>

</body>
</html>"""
    return html

def render_pdfs():
    os.makedirs('public/cv', exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        
        # 1. Light Theme Unified PDF
        light_html = generate_resume_html(theme='light')
        page = browser.new_page()
        page.set_content(light_html, wait_until='networkidle')
        light_pdf_path = 'public/cv/ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf'
        page.pdf(
            path=light_pdf_path,
            format='A4',
            print_background=True,
            prefer_css_page_size=True
        )
        print(f"Generated {light_pdf_path} ({os.path.getsize(light_pdf_path)} bytes)")
        
        # 2. Dark Theme Unified PDF
        dark_html = generate_resume_html(theme='dark')
        page.set_content(dark_html, wait_until='networkidle')
        dark_pdf_path = 'public/cv/ROGER_GARCIA_PAGES_Unified_Resume_Dark.pdf'
        page.pdf(
            path=dark_pdf_path,
            format='A4',
            print_background=True,
            prefer_css_page_size=True
        )
        print(f"Generated {dark_pdf_path} ({os.path.getsize(dark_pdf_path)} bytes)")
        
        browser.close()

if __name__ == '__main__':
    render_pdfs()
