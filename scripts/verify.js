import fs from 'node:fs';

const frHtml = fs.readFileSync('dist/index.html', 'utf8');
const enHtml = fs.readFileSync('dist/en/index.html', 'utf8');

console.log('=== Checking FR Page ===');
console.log('Has lang="fr":', frHtml.includes('lang="fr"'));
console.log('Has French Headline:', frHtml.includes('Ingénieur Systèmes &amp; Automatisation') || frHtml.includes('Ingénieur Systèmes & Automatisation'));
console.log('Has French Non-breaking space before colon:', frHtml.includes('Installation en Suisse Romande\u00A0: Mai 2027'));
console.log('Has French CV 1:', frHtml.includes('ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf'));
console.log('Has French CV 2:', frHtml.includes('ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf'));
console.log('Has French CV 3:', frHtml.includes('ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf'));
console.log('Has Umami banner:', frHtml.includes('umami-fork'));
console.log('Has JSON-LD schema:', frHtml.includes('application/ld+json') && frHtml.includes('Roger Garcia Pagès'));

console.log('\n=== Checking EN Page ===');
console.log('Has lang="en":', enHtml.includes('lang="en"'));
console.log('Has English Headline:', enHtml.includes('Systems &amp; Automation Engineer') || enHtml.includes('Systems & Automation Engineer'));
console.log('Has English Logistics:', enHtml.includes('Relocating to French-Speaking Switzerland: May 2027'));

console.log('\n=== Checking Files ===');
console.log('Profile image exists:', fs.existsSync('dist/images/roger-profile.jpg'));
console.log('Robots.txt exists:', fs.existsSync('dist/robots.txt'));
console.log('Favicon exists:', fs.existsSync('dist/favicon.svg'));
console.log('All 3 CVs exist in dist/cv:', 
  fs.existsSync('dist/cv/ROGER_GARCIA_PAGES_v1_Tech_Automation.pdf') &&
  fs.existsSync('dist/cv/ROGER_GARCIA_PAGES_v2_Revenue_Business.pdf') &&
  fs.existsSync('dist/cv/ROGER_GARCIA_PAGES_v3_Data_Analytics.pdf')
);
