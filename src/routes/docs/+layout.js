const pageModules = import.meta.glob('./**/+page.md', { eager: true });

export function load({ url }) {
	const relativePath = url.pathname.slice('/docs'.length).replace(/\/$/, '');
	const modulePath = relativePath ? `.${relativePath}/+page.md` : './+page.md';
	return { meta: pageModules[modulePath]?.metadata || {} };
}
