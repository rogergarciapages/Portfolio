import fs from 'node:fs';

const frHtml = fs.readFileSync('dist/index.html', 'utf8');
const enHtml = fs.readFileSync('dist/en/index.html', 'utf8');

console.log('=== Checking FR Page ===');
console.log('Has lang="fr":', frHtml.includes('lang="fr"'));
console.log('Has French Headline:', frHtml.includes('Ingénieur Systèmes &amp; Automatisation') || frHtml.includes('Ingénieur Systèmes & Automatisation'));
console.log('Has French Non-breaking space before colon:', frHtml.includes('Installation en Suisse Romande\u00A0: Mai 2027'));
console.log('Has Unified CV Light link:', frHtml.includes('ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf'));
console.log('Has Unified CV Dark link:', frHtml.includes('ROGER_GARCIA_PAGES_Unified_Resume_Dark.pdf'));
console.log('Has Theme toggle button:', frHtml.includes('id="theme-toggle"'));
console.log('Has Interactive CV Modal:', frHtml.includes('id="cv-modal"'));
console.log('Has Umami banner:', frHtml.includes('umami-fork'));
console.log('Has JSON-LD schema:', frHtml.includes('application/ld+json') && frHtml.includes('Roger Garcia Pagès'));

console.log('\n=== Checking EN Page ===');
console.log('Has lang="en":', enHtml.includes('lang="en"'));
console.log('Has English Headline:', enHtml.includes('Systems &amp; Automation Engineer') || enHtml.includes('Systems & Automation Engineer'));
console.log('Has English Logistics:', enHtml.includes('Relocating to French-Speaking Switzerland: May 2027'));
console.log('Has Unified CV Light link EN:', enHtml.includes('ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf'));
console.log('Has Unified CV Dark link EN:', enHtml.includes('ROGER_GARCIA_PAGES_Unified_Resume_Dark.pdf'));

console.log('\n=== Checking PDF & Static Files ===');
console.log('Unified Resume Light exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_Unified_Resume_Light.pdf'));
console.log('Unified Resume Dark exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_Unified_Resume_Dark.pdf'));
console.log('Tailored CV 1 exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf'));
console.log('Tailored CV 2 exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf'));
console.log('Tailored CV 3 exists:', fs.existsSync('public/cv/ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf'));
console.log('Authentic Profile photo exists:', fs.existsSync('public/images/roger-profile.jpg'));
console.log('Favicon exists:', fs.existsSync('public/favicon.svg'));
console.log('Robots.txt exists:', fs.existsSync('public/robots.txt'));
