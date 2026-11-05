// Verifies the static export against the site's SEO and integrity rules.
// Run after `npm run build`. Fails loudly so a broken export cannot ship.
//
// Checks:
//  1. every page: single title, self-canonical, meta description, exactly one h1
//  2. sitemap URL set equals the exported page set (minus the noindex 404 page)
//  3. robots.txt is real, points at the sitemap, and does not block the site
//  4. every internal link resolves to an exported page
//  5. every referenced local asset exists in the export
//  6. the homepage carries Organization + WebSite + SoftwareApplication JSON-LD,
//     and the blog article carries Article JSON-LD with article:published_time
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const BUILD = 'build';
const ORIGIN = 'https://customeractions.app';

const failures = [];
const problem = (message) => failures.push(message);

function pageFiles(dir, base = '') {
	const files = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (entry.isDirectory()) {
			files.push(...pageFiles(join(dir, entry.name), `${base}/${entry.name}`));
		} else if (entry.isFile() && entry.name.endsWith('.html')) {
			files.push({ route: `${base}/${entry.name.slice(0, -5)}` === '/index' ? '/' : `${base}/${entry.name.slice(0, -5)}`, path: join(dir, entry.name) });
		}
	}
	return files;
}

const pages = pageFiles(BUILD);
const exportedRoutes = new Set(pages.map((p) => p.route));

for (const { route, path } of pages) {
	const html = readFileSync(path, 'utf8');
	const label = route === '/' ? 'homepage' : route;

	const titles = [...html.matchAll(/<title>(.*?)<\/title>/gs)];
	if (titles.length !== 1) problem(`${label}: ${titles.length} <title> elements`);
	else if (/ - Home<\/title>/.test(titles[0][1])) problem(`${label}: title ends in "- Home"`);

	// The noindex 404 page needs none of the indexing metadata below.
	if (route === '/404') continue;

	const canonicals = [...html.matchAll(/rel="canonical" href="([^"]*)"/g)];
	if (canonicals.length !== 1) problem(`${label}: ${canonicals.length} canonical links`);
	else if (canonicals[0][1] !== `${ORIGIN}${route}`) problem(`${label}: canonical ${canonicals[0][1]} does not match route`);

	if (!/<meta name="description" content="[^"]{20,}"\/?>/.test(html)) problem(`${label}: missing or short meta description`);

	const h1s = [...html.matchAll(/<h1[\s>]/g)];
	if (h1s.length !== 1) problem(`${label}: ${h1s.length} <h1> elements`);

	for (const match of html.matchAll(/href="(\/[^"#]*?)"/g)) {
		const target = match[1].split('?')[0].replace(/\/+$/, '') || '/';
		if (!exportedRoutes.has(target)) problem(`${label}: internal link to unexported route ${target}`);
	}

	for (const match of html.matchAll(/(?:src|href)="(\/[^"]+\.(?:png|webp|svg|jpg|jpeg|json|xml|txt|mp4|ico))"/g)) {
		const asset = match[1].split('?')[0];
		if (!existsSync(join(BUILD, asset))) problem(`${label}: missing asset ${asset}`);
	}
}

// Sitemap
const sitemapPath = join(BUILD, 'sitemap.xml');
if (!existsSync(sitemapPath)) {
	problem('sitemap.xml missing from export');
} else {
	const sitemapUrls = [...readFileSync(sitemapPath, 'utf8').matchAll(/<loc>https:\/\/customeractions\.app([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
	const expected = [...exportedRoutes].filter((r) => r !== '/404').sort();
	const missing = expected.filter((r) => !sitemapUrls.includes(r));
	const extra = sitemapUrls.filter((r) => !expected.includes(r));
	if (missing.length) problem(`sitemap.xml missing: ${missing.join(', ')}`);
	if (extra.length) problem(`sitemap.xml lists unknown routes: ${extra.join(', ')}`);
}

// robots.txt
const robotsPath = join(BUILD, 'robots.txt');
if (!existsSync(robotsPath)) {
	problem('robots.txt missing from export');
} else {
	const robots = readFileSync(robotsPath, 'utf8');
	if (!/Sitemap: https:\/\/customeractions\.app\/sitemap\.xml/.test(robots)) problem('robots.txt does not declare the sitemap');
	if (/Disallow: \/$/.test(robots)) problem('robots.txt disallows the whole site');
}

// 404 page
const notFoundPath = join(BUILD, '404.html');
if (!existsSync(notFoundPath)) problem('404.html missing from export');
else if (!/noindex/.test(readFileSync(notFoundPath, 'utf8'))) problem('404.html is missing its noindex directive');

// Structured data on the homepage: Organization + WebSite (emitted on every page
// by Header.svelte) plus a SoftwareApplication for the product.
const homeHtml = readFileSync(join(BUILD, 'index.html'), 'utf8');
const jsonLdMatches = [...homeHtml.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
if (jsonLdMatches.length === 0) {
	problem('homepage has no JSON-LD structured data');
} else {
	const nodes = [];
	for (const match of jsonLdMatches) {
		try {
			nodes.push(JSON.parse(match[1]));
		} catch (error) {
			problem(`homepage JSON-LD is not parseable: ${error.message}`);
		}
	}
	const byType = (type) => nodes.filter((node) => node['@type'] === type);

	const organization = byType('Organization');
	if (organization.length !== 1) problem(`homepage JSON-LD: ${organization.length} Organization nodes (expected 1)`);
	else if (organization[0].name !== 'Realigned Technologies Ltd') problem(`homepage Organization name is "${organization[0].name}"`);

	const website = byType('WebSite');
	if (website.length !== 1) problem(`homepage JSON-LD: ${website.length} WebSite nodes (expected 1)`);

	const app = byType('SoftwareApplication');
	if (app.length !== 1) problem(`homepage JSON-LD: ${app.length} SoftwareApplication nodes (expected 1)`);
	else {
		const node = app[0];
		if (node.name !== 'Customer Actions for Jira') problem(`homepage SoftwareApplication name "${node.name}"`);
		if (!node.sameAs?.includes('https://marketplace.atlassian.com/1229532')) problem('homepage SoftwareApplication does not reference the Marketplace listing');
		if (node.publisher?.['@id'] !== `${ORIGIN}/#organization`) problem('homepage SoftwareApplication publisher does not reference the Realigned organization');
	}
}

// Article structured data on the blog article: Article JSON-LD plus the
// article OpenGraph metadata that a news/blog card relies on.
const articlePath = join(BUILD, 'articles/introducing-customer-actions-for-jira.html');
if (existsSync(articlePath)) {
	const html = readFileSync(articlePath, 'utf8');
	const nodes = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
		.map((match) => {
			try {
				return JSON.parse(match[1]);
			} catch {
				return null;
			}
		})
		.filter(Boolean);
	if (!nodes.some((node) => node['@type'] === 'Article')) problem('article page has no Article JSON-LD');
	if (!/<meta property="og:type" content="article"/.test(html)) problem('article page og:type is not article');
	if (!/<meta property="article:published_time"/.test(html)) problem('article page is missing article:published_time');
} else {
	problem('article page is missing from the export');
}

if (failures.length) {
	console.error(`verify-export: ${failures.length} problem(s)\n`);
	for (const failure of failures) console.error(`  - ${failure}`);
	process.exit(1);
}
console.log(`verify-export: OK (${pages.length} pages, sitemap, robots, 404, JSON-LD, links, assets)`);
