<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import DottedClouds from '$lib/components/DottedClouds.svelte';
	import { softwareApplicationSchema } from '$lib/seo/schema.js';

	const MARKETPLACE_LINK = 'https://marketplace.atlassian.com/1229532';
	const HEAD_TITLE = 'Customer Actions for Jira - Extend Your Service Desk Portal';

	// Stated in machine-readable form so search engines and AI systems attribute
	// the product to the right developer. Mirrors the Organization node on realigned.io.
	const softwareApplicationJson = JSON.stringify(
		softwareApplicationSchema({
			name: 'Customer Actions for Jira',
			description:
				'Extend Jira Service Management portals with customer-facing actions: edit issues, link related requests, and sign documents without leaving the portal.',
			url: 'https://customeractions.app/',
			image: 'https://customeractions.app/realignedOG.png',
			operatingSystem: 'Atlassian Jira Service Management',
			sameAs: ['https://marketplace.atlassian.com/1229532'],
			featureList: [
				'Edit Jira issues from the customer portal',
				'Select and link related issues',
				'Sign and acknowledge documents on a request',
				'Display actions conditionally with JQL',
				'Configurable labels, messages, and edit screens'
			]
		})
	);

	const capabilities = [
		{ title: 'Edit issues from the portal', text: 'Let customers change the information on their request, add missing detail, and keep the issue accurate without a Jira account.', href: '/docs/action-types/edit-issues' },
		{ title: 'Link related requests', text: 'Enable customers to select and link issues while they create a request, so your team sees the whole picture.', href: '/docs/action-types/select-issues' },
		{ title: 'Sign and acknowledge documents', text: 'Show a usage agreement, licence term, or privacy statement on the request form and require acknowledgement before submission.', href: '/docs/action-types/sign-documents' }
	];

	const details = [
		{ title: 'More power to your users', text: 'Allow your customers to edit requests right from the customer portal.' },
		{ title: 'Enable self service', text: 'Allow users to link issues more easily.' },
		{ title: 'Community driven risk management', text: 'New ways to use Jira Service Management, bringing risk management to your company.' },
		{ title: 'Sign on request', text: 'Fill an agreement without paperwork by displaying it on the request form.' },
		{ title: 'Minimal footprint', text: 'The app is built to be as fast as possible so editing stays seamless for your users.' },
		{ title: 'More control', text: 'Let users only file requests once an action has been taken.' }
	];
</script>

<SiteShell
	headTitle={HEAD_TITLE}
	description="Extend Jira Service Management portals with customer-facing actions: edit issues, link related requests, and sign documents without leaving the portal."
	marketplaceLink={MARKETPLACE_LINK}
>
	<main class="bg-[var(--bg-base)] text-[var(--text-primary)]">
		<section aria-labelledby="hero-title" class="realigned-hero relative isolate overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-24">
			<DottedClouds opacity={0.18} />
			<div class="wave-glow" aria-hidden="true"></div>
			<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-4xl text-center">
					<div class="mb-7 flex items-center justify-center gap-5">
						<span class="flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-xl bg-white p-2.5 shadow-lg shadow-slate-950/20 sm:h-[4.5rem] sm:w-[4.5rem]">
							<img src="/CaIcon2.svg" width="52" height="52" alt="" class="h-full w-full object-contain" />
						</span>
						<p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100/80">Customer Actions for Jira</p>
					</div>
					<h1 id="hero-title" class="text-[clamp(40px,6vw,68px)] font-bold leading-[1.04] tracking-tight text-white">
						Make your Jira Service Management portal interactive.
					</h1>
					<p class="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">
						Give customers configurable actions on the portal: edit their request, link related issues, and sign documents without leaving Jira.
					</p>
					<div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
						<a href={MARKETPLACE_LINK} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="customer_actions" data-umami-event-listing-id="1229532" data-umami-event-intent="trial" data-umami-event-source-page="/" data-umami-event-placement="homepage_hero" class="realigned-primary-button text-base">Start a free trial</a>
						<a href="/docs" class="realigned-secondary-button text-base">Read the documentation</a>
					</div>
					<div class="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-white/80">
						<span>Available on</span>
						<a href={MARKETPLACE_LINK} target="_blank" rel="noreferrer" aria-label="Atlassian Marketplace listing" class="rounded bg-white/95 px-3 py-1.5">
							<img src="/main/amp.png" width="190" height="16" alt="Atlassian Marketplace" class="h-4 w-auto" />
						</a>
					</div>
				</div>

				<div class="relative mx-auto mt-12 max-w-6xl sm:mt-16">
					<div class="absolute -inset-10 rounded-full bg-cyan-300/10 blur-3xl"></div>
					<div class="realigned-card relative overflow-hidden rounded-xl bg-white p-2 sm:p-3">
						<img
							src="/main/ca12.png"
							width="1743"
							height="1070"
							alt="Customer Actions configuration screen in Jira Service Management"
							class="w-full rounded-lg"
						/>
					</div>
				</div>
			</div>
		</section>

		<section aria-label="Product highlights" class="border-b border-[var(--border-subtle)] bg-[var(--bg-base)] py-10">
			<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-9 gap-y-4 px-4 text-sm font-semibold text-[var(--text-secondary)] sm:px-6 sm:text-base lg:px-8">
				<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Runs inside Jira Service Management</span>
				<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Configurable actions</span>
				<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> No customer data stored by us</span>
				<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Free trial on Marketplace</span>
			</div>
		</section>

		<section aria-labelledby="capabilities-title" class="realigned-band border-b border-[var(--border-subtle)] py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-3xl text-center">
					<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Actions for the customer portal</p>
					<h2 id="capabilities-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Extend what customers can do on a request.</h2>
					<p class="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">Add actions to a Jira Service Management request type and let customers take care of the task themselves.</p>
				</div>
				<div class="mt-14 grid gap-5 md:grid-cols-3">
					{#each capabilities as capability}
						<article class="realigned-card capability-card flex flex-col rounded-lg p-7">
							<div class="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-[var(--action-soft)] text-[var(--accent-cyan)]">
								<svg aria-hidden="true" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4 4L19 6" /></svg>
							</div>
							<h3 class="text-xl font-semibold text-[var(--text-primary)]">{capability.title}</h3>
							<p class="mt-3 flex-1 leading-relaxed text-[var(--text-secondary)]">{capability.text}</p>
							<a href={capability.href} class="mt-6 font-semibold text-[var(--accent-cyan)] hover:text-[var(--action-hover)]">Read the guide <span aria-hidden="true">→</span></a>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section aria-labelledby="customize-title" class="bg-[var(--bg-base)] pt-24 pb-12">
			<div class="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
				<img src="/main/ca3.png" width="1743" height="1070" loading="lazy" alt="Customer Actions configuration with configurable labels, request types, and editable fields" class="w-full drop-shadow-2xl" />
				<div>
					<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Highly customizable</p>
					<h2 id="customize-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Configure the action around the request.</h2>
					<p class="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">Actions are fully configurable, including labels and messages. Choose the request types an action applies to, pick the editable fields, and show the action only when a condition is met.</p>
					<a href="/docs/display-conditions" class="realigned-secondary-button mt-8">See display conditions</a>
				</div>
			</div>
		</section>

		<section aria-labelledby="workflow-title" class="bg-[var(--bg-base)] pt-12 pb-24">
			<div class="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
				<div>
					<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Seamlessly integrated</p>
					<h2 id="workflow-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Actions appear as part of the original request form.</h2>
					<p class="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">Customers do not learn a new tool. The action opens on the request they already use, with the labels, messages, and fields you configure.</p>
					<a href="/docs/creating-actions" class="realigned-secondary-button mt-8">See how to create an action</a>
				</div>
				<img src="/main/ca4.png" width="1743" height="1094" loading="lazy" alt="A Customer Actions button on a Jira Service Management request form" class="w-full drop-shadow-2xl" />
			</div>
		</section>

		<section aria-labelledby="details-title" class="realigned-band border-y border-[var(--border-subtle)] py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-3xl text-center">
					<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">More details</p>
					<h2 id="details-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Built to improve self service.</h2>
				</div>
				<ul class="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{#each details as detail}
						<li class="realigned-card rounded-lg p-7">
							<h3 class="text-lg font-semibold text-[var(--text-primary)]">{detail.title}</h3>
							<p class="mt-3 leading-relaxed text-[var(--text-secondary)]">{detail.text}</p>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<section aria-labelledby="final-cta-title" class="realigned-hero relative overflow-hidden py-20">
			<DottedClouds opacity={0.12} />
			<div class="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
				<h2 id="final-cta-title" class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Give your portal users more control.</h2>
				<p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Try Customer Actions for Jira on the Atlassian Marketplace.</p>
				<div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
					<a href={MARKETPLACE_LINK} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="customer_actions" data-umami-event-listing-id="1229532" data-umami-event-intent="trial" data-umami-event-source-page="/" data-umami-event-placement="homepage_footer" class="realigned-primary-button">Start a free trial</a>
				</div>
			</div>
		</section>
	</main>
</SiteShell>

<svelte:head>
	{@html `<script type="application/ld+json">${softwareApplicationJson}</script>`}
</svelte:head>

<style>
	.wave-glow { position: absolute; left: -10%; right: -10%; bottom: -24%; height: 45%; background: radial-gradient(ellipse at center, rgba(255,255,255,.25) 0%, rgba(255,255,255,.06) 42%, transparent 72%); filter: blur(16px); pointer-events: none; }
	.status-check { display: inline-grid; width: 1.25rem; height: 1.25rem; place-items: center; border-radius: 999px; background: var(--action-soft); color: var(--accent-cyan); font-size: .7rem; font-style: normal; }
	.capability-card { transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }
	.capability-card:hover { transform: translateY(-4px); border-color: rgba(3, 105, 161, 0.34); background: var(--bg-surface-hover); }
</style>
