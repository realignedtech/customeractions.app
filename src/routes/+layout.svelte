<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	let currentPath = $derived($page.url.pathname);
	let wide = $derived(currentPath.startsWith('/docs') || currentPath.startsWith('/trust'));
	let highlight = $derived(
		currentPath.startsWith('/docs')
			? 'Documentation'
			: currentPath.startsWith('/trust')
				? 'Trust Center'
				: currentPath.startsWith('/blog') || currentPath.startsWith('/articles')
					? 'Blog'
						: ''
	);
	const marketplaceLink = 'https://marketplace.atlassian.com/1229532';
</script>

<div class="flex min-h-screen flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
	<Nav title="Customer Actions" {highlight} {marketplaceLink} {wide} />
	<div class="flex-1">{@render children()}</div>
	<Footer {wide} />
</div>
