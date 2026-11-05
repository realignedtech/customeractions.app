const pageModules = import.meta.glob('./**/+page.md', { eager: true });

export function load({ url }) {
	const relativePath = url.pathname.slice('/articles'.length).replace(/\/$/, '');
	return { meta: pageModules[`.${relativePath}/+page.md`]?.metadata || {} };
}
