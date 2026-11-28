import fs from 'node:fs';

const frHtml = fs.readFileSync('dist/index.html', 'utf8');
const enHtml = fs.readFileSync('dist/en/index.html', 'utf8');

console.log('=== Checking FR Page ===');
console.log('Has lang="fr":', frHtml.includes('lang="fr"'));
console.log('Has Password Gate Overlay:', frHtml.includes('id="password-gate-overlay"'));
console.log('Has Password Gate Input:', frHtml.includes('id="gate-password-input"'));
console.log('Has Active Profile Pill:', frHtml.includes('id="navbar-profile-pill"'));
console.log('Has Dynamic Profile Data Attributes:', 
  frHtml.includes('data-profile-headline') && 
  frHtml.includes('data-profile-bio') &&
  frHtml.includes('data-profile-hero-cv')
);
console.log('Has French Headline:', frHtml.includes('Ingénieur Systèmes &amp; Automatisation') || frHtml.includes('Ingénieur Systèmes & Automatisation'));
console.log('Has French Non-breaking space before colon:', frHtml.includes('Installation en Suisse Romande\u00A0: Mai 2027'));
console.log('Has Unified CV Light link:', frHtml.includes('ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf'));
console.log('Has Unified CV Dark link:', frHtml.includes('ROGER_GARCIA_PAGES_Unified_Resume_Dark.pdf'));
console.log('Has Theme toggle button:', frHtml.includes('id="theme-toggle"'));
console.log('Has Interactive CV Modal:', frHtml.includes('id="cv-modal"'));

console.log('\n=== Checking EN Page ===');
console.log('Has lang="en":', enHtml.includes('lang="en"'));
console.log('Has Password Gate Overlay EN:', enHtml.includes('id="password-gate-overlay"'));
console.log('Has English Headline:', enHtml.includes('Systems &amp; Automation Engineer') || enHtml.includes('Systems & Automation Engineer'));

console.log('\n=== Checking Profiles & Passwords Configuration ===');
const profilesModule = fs.readFileSync('src/i18n/profiles.ts', 'utf8');
console.log('Has Data Analytics password 4855:', profilesModule.includes("'4855': 'data'"));
console.log('Has Tech Engineering password 7521:', profilesModule.includes("'7521': 'tech'"));
console.log('Has Revenue Management password 9210:', profilesModule.includes("'9210': 'revenue'"));
console.log('Has Master Profile password 2027:', profilesModule.includes("'2027': 'master'"));

console.log('\n=== Checking PDF & Static Files ===');
console.log('Unified Resume Light exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf'));
console.log('Unified Resume Dark exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_Unified_Resume_Dark.pdf'));
console.log('Tailored CV 1 (Tech) exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf'));
console.log('Tailored CV 2 (Revenue) exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf'));
console.log('Tailored CV 3 (Data) exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf'));
console.log('Authentic Profile photo exists:', fs.existsSync('public/images/roger-profile.jpg'));
