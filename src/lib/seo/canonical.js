export const siteOrigin = 'https://customeractions.app';

export function normalizePath(pathname) {
	return pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
}

export function canonicalPathFor(pathname) {
	return normalizePath(pathname);
}

export function sourceRouteFor(pathname) {
	return normalizePath(pathname);
}

export function canonicalUrlFor(pathname) {
	return `${siteOrigin}${canonicalPathFor(pathname)}`;
}
