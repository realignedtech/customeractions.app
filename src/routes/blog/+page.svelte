<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	const marketplaceLink = 'https://marketplace.atlassian.com/1229532';

	const posts = [
		{
			href: '/articles/how-to-change-the-reporter-from-the-jira-portal',
			title: 'How to change the reporter from the Jira customer portal',
			date: '2023-02-28',
			dateLabel: 'February 28, 2023',
			highlight: '/blog/blog2header.png',
			description: 'Allowing users to report issues for other users can improve their support experience. A step-by-step guide to making the reporter field editable from the customer portal.'
		},
		{
			href: '/articles/introducing-customer-actions-for-jira',
			title: 'Introducing Customer Actions for Jira',
			date: '2022-07-20',
			dateLabel: 'July 20, 2022',
			highlight: '/blog/blog1header.png',
			description: 'Extend your Jira Service Management portal with custom actions and panels: edit issues, link related requests, and sign documents.'
		}
	];
</script>

<SiteShell headTitle="Customer Actions for Jira blog" description="News, guides, and practical advice for extending the Jira Service Management customer portal with Customer Actions for Jira." highlight="Blog" {marketplaceLink}>
	<main class="realigned-band min-h-[60vh] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<p class="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Customer Actions blog</p>
			<h1 class="mt-3 text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">Get more from your service desk portal.</h1>
			<p class="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">Guides and updates for teams extending their Jira Service Management portal with customer-facing actions.</p>
			<div class="mt-12 grid gap-5 sm:grid-cols-2">
				{#each posts as post}
					<a href={post.href} class="realigned-card group flex flex-col overflow-hidden rounded-xl transition hover:-translate-y-1 hover:border-[var(--accent-sky-soft)]">
						<img src={post.highlight} width="1280" height="720" loading="lazy" alt="" class="aspect-video w-full object-cover" />
						<div class="flex flex-1 flex-col p-5">
							<time class="text-xs text-[var(--text-muted)]" datetime={post.date}>{post.dateLabel}</time>
							<h2 class="mt-2 text-lg font-semibold leading-snug text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)]">{post.title}</h2>
							<p class="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{post.description}</p>
							<span class="mt-4 text-sm font-semibold text-[var(--accent-cyan)]">Read the article <span aria-hidden="true">→</span></span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</main>
</SiteShell>
