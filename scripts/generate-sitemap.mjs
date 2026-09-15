import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import 'dotenv/config';

const siteUrl = (process.env.VITE_SITE_URL || 'https://www.rpexotichomes.com').replace(/\/$/, '');
const constants = readFileSync(resolve('src/constants.ts'), 'utf8');
const projectSource = constants.split('export const SERVICES')[0];
const projectIds = [...projectSource.matchAll(/^\s*id:\s*'([^']+)'/gm)].map((match) => match[1]);
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/work', priority: '0.9', changefreq: 'weekly' },
  { path: '/system', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  ...projectIds.map((id) => ({ path: `/work/${id}`, priority: '0.7', changefreq: 'monthly' })),
];

const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
const urls = routes.map(({ path, priority, changefreq }) => `  <url>\n    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

writeFileSync(resolve('public/sitemap.xml'), sitemap);
writeFileSync(resolve('public/robots.txt'), robots);
console.log(`Generated sitemap and robots for ${siteUrl} (${routes.length} routes)`);
