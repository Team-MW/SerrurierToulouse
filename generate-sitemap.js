import fs from 'fs';
import path from 'path';

// Get cities from citiesData.ts
const citiesFile = fs.readFileSync(path.resolve('src/data/citiesData.ts'), 'utf-8');
const slugs = [];
const regex = /slug:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(citiesFile)) !== null) {
    slugs.push(match[1]);
}

const baseUrl = 'https://leserruriertoulousain.com';

const staticRoutes = [
    '/',
    '/services',
    '/portfolio',
    '/contact',
    '/zones-intervention',
    '/mentions-legales',
];

const urls = [
    ...staticRoutes,
    ...slugs.map(slug => `/intervention/${slug}`)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.mkdirSync(path.resolve('public'), { recursive: true });
fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!');
