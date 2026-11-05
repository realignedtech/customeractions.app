<script>
	import { page } from '$app/stores';
	import SiteShell from '$lib/components/SiteShell.svelte';
	import TrustSidebar from '$lib/components/TrustSidebar.svelte';
	import { trustNavigation, trustPageFor } from '$lib/trust/navigation.js';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	const APP_LINK = 'https://marketplace.atlassian.com/1229532';
	let currentRoute = $derived($page.url.pathname.replace(/\/$/, '') || '/trust');
	let currentPage = $derived(trustPageFor(currentRoute));
	let isOverview = $derived(currentRoute === '/trust');
</script>

<SiteShell
	headTitle={`Customer Actions for Jira - ${currentPage.title}`}
	description={currentPage.description}
	highlight="Trust Center"
	marketplaceLink={APP_LINK}
	wide
>
	<section class="trust-hero border-b border-[var(--border-subtle)]">
		<div class="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
			<div class="mb-3 flex items-center gap-2 text-xs font-semibold text-[var(--accent-cyan)]">
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3 5 6v5c0 4.8 2.95 8.18 7 10 4.05-1.82 7-5.2 7-10V6l-7-3Zm-3 9 2 2 4-4" />
				</svg>
				<a href="/trust" class="transition-colors hover:text-[var(--text-primary)]">Realigned Trust Center</a>
			</div>
			<h1 class="max-w-4xl text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">{currentPage.title}</h1>
			<p class="mt-3 max-w-3xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">{currentPage.description}</p>
		</div>
	</section>

	<div class:trust-overview={isOverview} class:trust-detail={!isOverview} class="trust-content">
		<div class="mx-auto max-w-[90rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
			{#if !isOverview}
				<button
					type="button"
					class="mobile-trust-button lg:hidden"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-expanded={mobileMenuOpen}
					aria-controls="trust-navigation"
				>
					<span class="flex items-center gap-2">
						<svg class="h-4 w-4 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
						Browse Trust Center
					</span>
					<svg class:rotate-180={mobileMenuOpen} class="h-4 w-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" /></svg>
				</button>

					<div id="trust-navigation" hidden={!mobileMenuOpen} class="mobile-trust-panel lg:hidden">
						<TrustSidebar navigation={trustNavigation} {currentRoute} onnavigate={() => (mobileMenuOpen = false)} />
					</div>

				<div class="trust-grid">
					<aside class="hidden lg:block">
						<div class="sticky top-28"><TrustSidebar navigation={trustNavigation} {currentRoute} /></div>
					</aside>
					<div class="trust-page min-w-0">{@render children()}</div>
				</div>
			{:else}
				<div class="trust-page">{@render children()}</div>
			{/if}
		</div>
	</div>
</SiteShell>

<style>
	.trust-hero {
		background:
			radial-gradient(circle at 78% 0%, rgba(125, 211, 252, 0.28), transparent 30rem),
			linear-gradient(145deg, var(--bg-elevated), #ffffff);
	}

	.trust-content {
		min-height: 56vh;
		background:
			radial-gradient(circle at 72% 0%, rgba(125, 211, 252, 0.16), transparent 34rem),
			var(--bg-base);
	}

	.trust-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-items: start;
		gap: 2rem;
	}

	.mobile-trust-button {
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

	.mobile-trust-panel {
		margin: 0.65rem 0 1rem;
		border: 1px solid var(--border-subtle);
		border-radius: 0.65rem;
		background: var(--bg-surface);
		padding: 1rem;
	}

	.trust-page :global(main) {
		width: 100%;
		max-width: none;
		margin: 0;
		padding: 0;
	}

	.trust-detail .trust-page :global(main) {
		overflow: hidden;
		border: 1px solid var(--border-subtle);
		border-radius: 0.75rem;
		background: var(--bg-surface);
		padding: 2.25rem;
		box-shadow: 0 22px 50px -40px rgba(3, 105, 161, 0.4);
		color: var(--text-secondary);
	}

	.trust-page :global(.prose) { max-width: none; color: var(--text-secondary); }
	.trust-page :global(.prose h1),
	.trust-page :global(.prose h2),
	.trust-page :global(.prose h3),
	.trust-page :global(.prose h4) { color: var(--text-primary); font-weight: 650; letter-spacing: -0.018em; }
	.trust-page :global(.prose h2) { margin-top: 2.25rem; margin-bottom: 0.75rem; }
	.trust-page :global(.prose h2:first-child) { margin-top: 0; }
	.trust-page :global(.prose p),
	.trust-page :global(.prose li) { color: var(--text-secondary); }
	.trust-page :global(.prose strong) { color: var(--text-primary); }
	.trust-page :global(.prose a),
	.trust-page :global(table a) { color: var(--accent-cyan); text-decoration-color: rgba(3, 105, 161, 0.35); text-underline-offset: 3px; }
	.trust-page :global(.prose a:hover),
	.trust-page :global(table a:hover) { color: var(--action-hover); }
	.trust-page :global(.prose li::marker) { color: var(--accent-cyan); }

	.trust-page :global(.overflow-x-auto) {
		border: 1px solid var(--border-subtle);
		border-radius: 0.6rem;
	}

	.trust-page :global(table) { color: var(--text-secondary); }
	.trust-page :global(th),
	.trust-page :global(td) { border-color: var(--border-subtle); }
	.trust-page :global(th) { background: var(--bg-surface-hover); color: var(--text-primary); font-weight: 600; }
	.trust-page :global(td) { background: var(--bg-surface); }
	.trust-page :global(tbody tr:nth-child(even) td) { background: var(--bg-elevated); }

	@media (min-width: 1024px) {
		.trust-grid { grid-template-columns: 15rem minmax(0, 1fr); }
		.mobile-trust-button,
		.mobile-trust-panel { display: none; }
	}

	@media (max-width: 639px) {
		.trust-detail .trust-page :global(main) { padding: 1.4rem; }
	}
</style>
