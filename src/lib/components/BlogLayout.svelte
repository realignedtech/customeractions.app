<script>
	import SiteShell from './SiteShell.svelte';
	import { page } from '$app/stores';
	import { canonicalUrlFor, siteOrigin } from '$lib/seo/canonical.js';
	import { articleSchema, breadcrumbSchema } from '$lib/seo/schema.js';

	let { meta = {}, children } = $props();
	let sourcePage = $derived($page.url.pathname.replace(/\/$/, '') || '/');
	const marketplaceLink = 'https://marketplace.atlassian.com/1229532';
	let publishedTime = $derived(meta.date ? new Date(meta.date).toISOString() : '');
	let shareImage = $derived(`${siteOrigin}/realignedOG.png`);
	let jsonLd = $derived(
		meta.title
			? [
					articleSchema({
						headline: meta.title,
						description: meta.description,
						url: canonicalUrlFor($page.url.pathname),
						datePublished: publishedTime,
						dateModified: publishedTime,
						image: shareImage
					}),
					breadcrumbSchema([
						{ name: 'Home', url: siteOrigin },
						{ name: 'Blog', url: `${siteOrigin}/blog` },
						{ name: meta.title, url: canonicalUrlFor($page.url.pathname) }
					])
				]
			: []
	);
</script>

<SiteShell
	headTitle={`${meta.title || 'Article'} | Customer Actions`}
	description={meta.description || 'Customer portal guidance for Jira Service Management teams.'}
	ogType={meta.title ? 'article' : 'website'}
	{publishedTime}
	image={shareImage}
	{jsonLd}
	highlight="Blog"
	{marketplaceLink}
>
	<main class="realigned-band min-h-[60vh] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
		<article class="realigned-card mx-auto max-w-4xl overflow-hidden rounded-xl">
			<header class="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-6 py-10 sm:px-10 sm:py-14">
				<a href="/blog" class="text-sm font-semibold text-[var(--accent-cyan)] hover:text-[var(--action-hover)]">Customer Actions blog</a>
				<h1 class="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl">{meta.title}</h1>
				{#if meta.date}<time class="mt-5 block text-sm text-[var(--text-muted)]" datetime={new Date(meta.date).toISOString()}>{new Date(meta.date).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })}</time>{/if}
			</header>
			<div class="docs-content px-6 py-9 sm:px-10 sm:py-12">
				{@render children()}
				<div class="mt-12 border-t border-[var(--border-subtle)] pt-8">
					<h2 class="!mt-0">Do you have questions?</h2>
					<p>See how Customer Actions for Jira makes your Jira Service Management portal more interactive.</p>
					<div class="mt-4 flex flex-col gap-3 sm:flex-row">
						<a href={marketplaceLink} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="customer_actions" data-umami-event-listing-id="1229532" data-umami-event-intent="trial" data-umami-event-source-page={sourcePage} data-umami-event-placement="article_footer" class="realigned-primary-button">Try the app now</a>
						<a href="/docs/support" class="realigned-secondary-button">Contact us</a>
					</div>
				</div>
			</div>
		</article>
	</main>
</SiteShell>

<style>
	.docs-content { color: var(--text-secondary); font-size: 1.05rem; line-height: 1.8; }
	.docs-content :global(h2), .docs-content :global(h3), .docs-content :global(h4) { color: var(--text-primary); font-weight: 650; letter-spacing: -0.018em; line-height: 1.25; }
	.docs-content :global(h2) { margin: 2.6rem 0 .9rem; font-size: 1.7rem; }
	.docs-content :global(h3) { margin: 2rem 0 .7rem; font-size: 1.3rem; }
	.docs-content :global(p) { margin: 1rem 0; }
	.docs-content :global(ol), .docs-content :global(ul) { margin: 1rem 0; padding-left: 1.6rem; }
	.docs-content :global(li) { margin: .45rem 0; }
	.docs-content :global(li::marker) { color: var(--accent-cyan); }
	.docs-content :global(a) { color: var(--accent-cyan); text-decoration: underline; text-underline-offset: 3px; }
	/* Heading anchors (rehype wrap) and the CTA button are links too; keep
	   prose styling off them. */
	.docs-content :global(h2 a),
	.docs-content :global(h3 a),
	.docs-content :global(h4 a) { color: inherit; text-decoration: none; }
	.docs-content :global(h2 a:hover),
	.docs-content :global(h3 a:hover),
	.docs-content :global(h4 a:hover) { color: inherit; text-decoration: none; }
	.docs-content :global(a.realigned-primary-button) { color: white; text-decoration: none; }
	.docs-content :global(img) { width: 100%; height: auto; margin: 2rem auto; border: 1px solid var(--border-subtle); border-radius: .6rem; box-shadow: 0 14px 30px -22px rgba(3, 105, 161, 0.4); }
</style>
