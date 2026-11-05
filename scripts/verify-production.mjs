// Live verification for customeractions.app. Run after a deployment:
//   node scripts/verify-production.mjs https://customeractions.app
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const origin = (process.argv[2] || 'https://customeractions.app').replace(/\/$/, '');
const sitemap = readFileSync('build/sitemap.xml', 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/customeractions\.app([^<]*)<\/loc>/g)].map((match) => match[1] || '/');

// Every sitemap route answers 200 with its own canonical URL.
for (const route of routes) {
	const response = await fetch(`${origin}${route}`, { redirect: 'manual' });
	assert.equal(response.status, 200, `${route}: ${response.status}`);
	const html = await response.text();
	const canonical = html.match(/rel="canonical" href="([^"]*)"/)?.[1];
	assert.equal(canonical, `https://customeractions.app${route}`, `${route}: canonical ${canonical}`);
}

// Trailing-slash requests canonicalize to the established URLs. 301 matches
// the status the previous Netlify origin answered these with.
for (const route of ['/docs/', '/trust/', '/blog/']) {
	const response = await fetch(`${origin}${route}`, { redirect: 'manual' });
	assert.equal(response.status, 301, `${route}: ${response.status}`);
	assert.equal(new URL(response.headers.get('location'), origin).pathname, route.slice(0, -1));
}

// The trailing-slash canonicalizer must never echo a backslash back in a
// Location header. Browsers normalize "\" to "/", so "/%5Cevil.com/" would
// otherwise redirect to https://evil.com.
for (const probe of ['/%5Cevil.com/', '///%5Cevil.com/']) {
	const response = await fetch(`${origin}${probe}`, { redirect: 'manual' });
	const location = response.headers.get('location');
	if (location) {
		const resolved = new URL(location, origin);
		assert.equal(resolved.origin, origin, `${probe}: redirects off-origin to ${resolved.href}`);
	}
	assert.notEqual(response.status, 200, `${probe}: must not be served as a page`);
}

// Unknown paths are a real 404, never the homepage.
const unknown = await fetch(`${origin}/not-a-real-page`, { redirect: 'manual' });
assert.equal(unknown.status, 404, `unknown path: ${unknown.status}`);
assert.doesNotMatch(await unknown.text(), /<h1[^>]*>Make your Jira Service Management portal/);

// Crawl-critical files and the structured-data node.
const robots = await fetch(`${origin}/robots.txt`);
assert.equal(robots.status, 200);
assert.match(await robots.text(), /Sitemap: https:\/\/customeractions\.app\/sitemap\.xml/);

const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);

const home = await fetch(origin);
const homeHtml = await home.text();
assert.match(homeHtml, /application\/ld\+json/);
assert.match(homeHtml, /"name":"Customer Actions for Jira"/);
assert.match(homeHtml, /Realigned Technologies/);

console.log(`verify-production: OK (${routes.length} routes, 404, redirects, robots, sitemap, JSON-LD)`);
