<script>
	import { page } from '$app/stores';
	import SiteShell from './SiteShell.svelte';
	import DocsSidebar from './DocsSidebar.svelte';
	import DocsArticle from './DocsArticle.svelte';
	import DocsToc from './DocsToc.svelte';
	import { CustomerActionsNav, CustomerActionTitles } from '$lib/docs/nav.js';
	import { canonicalUrlFor } from '$lib/seo/canonical.js';
	import { techArticleSchema } from '$lib/seo/schema.js';

	let {
		meta = {},
		title = 'Customer Actions',
		marketplaceLink = 'https://marketplace.atlassian.com/1229532',
		children
	} = $props();

	let mobileMenuOpen = $state(false);
	let headings = $state([]);

	function findNavigationTitle(navigation, route) {
		for (const item of navigation) {
			if (item.link === route) return item.title;
			for (const child of item.children || []) {
				if (child.link === route) return child.title;
			}
		}
		return '';
	}

	let currentRoute = $derived($page.url.pathname.replace('/docs', '') || '/');
	let chunks = $derived(currentRoute.split('/').filter(Boolean));
	let active = $derived.by(() => {
		if (currentRoute.startsWith('/action-types/')) return '/action-types';
		if (currentRoute.startsWith('/support/')) return '/support';
		return currentRoute;
	});
	const currentNav = CustomerActionsNav;
	let currentTitle = $derived(
		findNavigationTitle(currentNav, currentRoute) ||
		CustomerActionTitles[chunks[chunks.length - 1]] ||
		(currentRoute === '/' ? CustomerActionTitles.intro : 'Documentation')
	);
	const sectionLabel = 'Customer Actions documentation';
	let documentTitle = $derived(meta.title || currentTitle);
	const productTitle = 'Customer Actions for Jira';
	let description = $derived(meta.description || `${currentTitle} documentation for ${productTitle}.`);
	// Documentation pages read as articles to search engines; declare it so the
	// page is eligible for the documentation rich result. Article.datePublished
	// is required, so the same date is shown to the reader (content/date-agreement).
	const DOCS_UPDATED = '2026-11-05T00:00:00.000Z';
	let jsonLd = $derived([
		techArticleSchema({
			headline: documentTitle,
			description,
			url: canonicalUrlFor($page.url.pathname),
			datePublished: DOCS_UPDATED,
			dateModified: DOCS_UPDATED
		})
	]);
</script>

<SiteShell
	headTitle={`${documentTitle} | Customer Actions`}
	{description}
	{jsonLd}
	navTitle={title}
	{marketplaceLink}
	highlight="Documentation"
	wide
>
	<main class="docs-shell">
		<div class="mx-auto max-w-[90rem] px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-16">
			<button
				type="button"
				class="mobile-menu-button lg:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-expanded={mobileMenuOpen}
				aria-controls="docs-navigation"
			>
				<span class="flex items-center gap-2">
					<svg class="h-4 w-4 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
					Browse documentation
				</span>
				<svg class:rotate-180={mobileMenuOpen} class="h-4 w-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" /></svg>
			</button>

				<div id="docs-navigation" hidden={!mobileMenuOpen} class="mobile-menu-panel lg:hidden">
					<DocsSidebar navigation={currentNav} {currentRoute} {active} onnavigate={() => (mobileMenuOpen = false)} />
				</div>

			<div class="docs-grid">
				<aside class="hidden lg:block">
					<div class="sticky top-36">
						<DocsSidebar navigation={currentNav} {currentRoute} {active} />
					</div>
				</aside>

				<DocsArticle title={currentTitle} {sectionLabel} updated={DOCS_UPDATED} onheadingschange={(value) => (headings = value)}>
					{@render children()}
				</DocsArticle>

				<aside class="hidden xl:block">
					<div class="sticky top-36 py-2">
						<DocsToc {headings} />
					</div>
				</aside>
			</div>
		</div>
	</main>
</SiteShell>

<style>
	.docs-shell {
		min-height: 58vh;
		border-top: 1px solid var(--border-subtle);
		background:
			radial-gradient(circle at 68% 0%, rgba(125, 211, 252, 0.16), transparent 34rem),
			var(--bg-base);
	}

	.docs-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-items: start;
		gap: 2rem;
	}

	.mobile-menu-button {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		border: 1px solid var(--border-subtle);
		border-radius: 0.6rem;
		background: var(--bg-surface);
		padding: 0.8rem 0.9rem;
		color: var(--text-primary);
		font-size: 0.86rem;
		font-weight: 600;
	}

	.mobile-menu-panel {
		margin: 0.65rem 0 1rem;
		border: 1px solid var(--border-subtle);
		border-radius: 0.65rem;
		background: var(--bg-surface);
		padding: 1rem;
	}

	@media (min-width: 1024px) {
		.docs-grid { grid-template-columns: 15rem minmax(0, 1fr); }
		.mobile-menu-button,
		.mobile-menu-panel { display: none; }
	}

	@media (min-width: 1280px) {
		.docs-grid { grid-template-columns: 15rem minmax(0, 1fr) 12rem; }
	}
</style>
