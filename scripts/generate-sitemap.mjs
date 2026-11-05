// Generates build/sitemap.xml from the prerendered export.
// A static source sitemap would drift from the route tree, so the URL set is
// derived from the files adapter-static actually wrote.
import { readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BUILD_DIR = 'build';
const ORIGIN = 'https://customeractions.app';

function pageUrls(dir, base = '') {
	const urls = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (entry.isDirectory()) {
			urls.push(...pageUrls(join(dir, entry.name), `${base}/${entry.name}`));
			continue;
		}
		if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
		const route = `${base}/${entry.name.slice(0, -5)}`;
		urls.push(route === '/index' ? '/' : route);
	}
	return urls;
}

const urls = pageUrls(BUILD_DIR)
	.filter((url) => url !== '/404') // error page: noindex and excluded from the sitemap
	.sort();

if (urls.length === 0) {
	throw new Error('No prerendered pages found in build/. Run the build first.');
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `\t<url><loc>${ORIGIN}${url}</loc></url>`).join('\n')}
</urlset>
`;

writeFileSync(join(BUILD_DIR, 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${urls.length} URLs`);
