<script>
	import { page } from '$app/stores';
	import { realignedApps } from '$lib/apps.js';

	let { title = "Customer Actions", marketplaceLink = "", h1 = false, highlight = "", wide = false } = $props();
	let sourcePage = $derived($page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/+$/, ''));
	let open = $state(false);
	let showAppsPopover = $state(false);
	let buttonElement = $state(null);
	let popoverPosition = $state({ top: 0, right: 0 });

	function toggleAppsPopover() {
		if (!showAppsPopover && buttonElement) {
			const rect = buttonElement.getBoundingClientRect();
			popoverPosition = {
				top: rect.bottom + 8,
				right: window.innerWidth - rect.right
			};
		}
		showAppsPopover = !showAppsPopover;
	}

	function closePopover() {
		showAppsPopover = false;
	}
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && closePopover()} />

<nav aria-label="Main Navigation" class="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-white/85 backdrop-blur-sm">
	<div class="mx-auto px-4 transition-[max-width] duration-300 ease-in-out sm:px-6 lg:px-8 {wide ? 'max-w-[90rem]' : 'max-w-7xl'}">
		<div class="flex h-20 items-center justify-between">
		<!-- Left: Logo + App title -->
		<div class="flex min-w-0 items-center gap-3">
			<a href="/" aria-label="Back to homepage" class="flex-shrink-0">
				<img alt="Realigned Logo" width="119" height="34" src="/Realigned-ink.svg" class="h-[34px] w-auto" />
			</a>
			<div class="hidden h-7 w-px bg-[var(--border-subtle)] sm:block"></div>
			<a href="/" class="hidden items-center gap-3 hover:no-underline sm:flex">
				<span class="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-white p-1">
					<img src="/CaIcon2.svg" width="28" height="28" alt="" class="h-full w-full object-contain" />
				</span>
				{#if h1}
					<h1 class="m-0 text-base font-semibold text-[var(--text-primary)]">{title} for Jira</h1>
				{:else}
					<span class="text-base font-semibold text-[var(--text-primary)]">{title} for Jira</span>
				{/if}
			</a>
		</div>

		<!-- Mobile navigation toggle -->
		<button
			type="button"
			class="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-hover)] lg:hidden"
			aria-label={open ? "Close navigation" : "Open navigation"}
			aria-expanded={open}
			aria-controls="mobile-navigation"
			onclick={() => (open = !open)}>
			{#if open}
				<svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>

		<!-- Right: Nav links -->
		<div class="hidden items-center lg:flex">
			<ul class="list-reset flex items-center justify-end gap-7 xl:gap-8">
				<li>
					<a class="inline-block py-2 text-base font-medium no-underline transition-colors duration-200 {highlight === 'Documentation' ? 'text-[var(--accent-cyan)] font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}" href="/docs" data-umami-event="docs_journey" data-umami-event-destination="/docs" data-umami-event-source-page={sourcePage} data-umami-event-placement="nav_desktop">
						Documentation
					</a>
				</li>
				<li>
					<a class="inline-block py-2 text-base font-medium no-underline transition-colors duration-200 {highlight === 'Blog' ? 'text-[var(--accent-cyan)] font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}" href="/blog">
						Blog
					</a>
				</li>
				<li>
					<a class="inline-block py-2 text-base font-medium no-underline transition-colors duration-200 {highlight === 'Trust Center' ? 'text-[var(--accent-cyan)] font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}" href="/trust">
						Trust Center
					</a>
				</li>
				<li>
					<button
						bind:this={buttonElement}
						class="inline-flex items-center gap-1 border-none bg-transparent py-2 text-base font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
						aria-expanded={showAppsPopover}
						aria-haspopup="true"
						onclick={toggleAppsPopover}>
						All Apps
						<svg class="w-3.5 h-3.5 transition-transform duration-200 {showAppsPopover ? 'rotate-180' : ''}"
							 fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 9l-7 7-7-7" />
						</svg>
					</button>
				</li>
				<li>
					<a href={marketplaceLink} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="customer_actions" data-umami-event-listing-id="1229532" data-umami-event-intent="trial" data-umami-event-source-page={sourcePage} data-umami-event-placement="nav_desktop" class="realigned-primary-button !rounded-md !px-5 !py-2.5 text-base">
						View on Marketplace
					</a>
				</li>
			</ul>
		</div>
		</div>

			<div id="mobile-navigation" hidden={!open} class="border-t border-[var(--border-subtle)] py-4 lg:hidden">
				<div class="flex flex-col gap-1">
					<a class="rounded-md px-2 py-2 text-base font-medium {highlight === 'Documentation' ? 'text-[var(--accent-cyan)] font-semibold' : 'text-[var(--text-secondary)]'}" href="/docs" data-umami-event="docs_journey" data-umami-event-destination="/docs" data-umami-event-source-page={sourcePage} data-umami-event-placement="nav_mobile" onclick={() => (open = false)}>Documentation</a>
					<a class="rounded-md px-2 py-2 text-base font-medium {highlight === 'Blog' ? 'text-[var(--accent-cyan)] font-semibold' : 'text-[var(--text-secondary)]'}" href="/blog" onclick={() => (open = false)}>Blog</a>
					<a class="rounded-md px-2 py-2 text-base font-medium {highlight === 'Trust Center' ? 'text-[var(--accent-cyan)] font-semibold' : 'text-[var(--text-secondary)]'}" href="/trust" onclick={() => (open = false)}>Trust Center</a>
					<a class="rounded-md px-2 py-2 text-base font-medium text-[var(--text-secondary)]" href="https://realigned.io?utm_source=customeractions_site" rel="noreferrer">All Realigned apps</a>
					<a href={marketplaceLink} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="customer_actions" data-umami-event-listing-id="1229532" data-umami-event-intent="trial" data-umami-event-source-page={sourcePage} data-umami-event-placement="nav_mobile" class="realigned-primary-button mt-3 self-start !rounded-md !px-5 !py-2.5 text-base">
						View on Marketplace
					</a>
				</div>
			</div>
	</div>
</nav>

<!-- Apps popover -->
{#if showAppsPopover}
	<button type="button" aria-label="Close apps menu" class="fixed inset-0 z-[9998] cursor-default" onclick={closePopover}></button>

	<div id="apps-popover"
		 class="fixed z-[9999] w-[calc(100vw-2rem)] max-w-[42rem] overflow-y-auto rounded-md border border-[var(--border-subtle)] bg-white shadow-xl shadow-[rgba(3,105,161,0.18)]"
		 style="top: {popoverPosition.top}px; right: {Math.max(16, popoverPosition.right)}px; max-height: calc(100vh - {popoverPosition.top + 16}px);">
		<div class="p-4">
			<h3 class="mb-3 text-lg font-semibold text-[var(--text-primary)]">Our Apps</h3>
			<div class="grid gap-1 sm:grid-cols-2">
				{#each realignedApps as app}
					<a href={app.url}
					   class="group flex min-w-0 items-center gap-3 rounded-md p-3 no-underline transition-colors duration-200 hover:bg-[var(--bg-surface-hover)] focus-visible:bg-[var(--bg-surface-hover)]"
					   target={app.url.startsWith('http') ? '_blank' : undefined}
					   rel={app.url.startsWith('http') ? 'noreferrer' : undefined}>
						<div class="w-10 h-10 flex-shrink-0">
							<img src={app.icon} width="40" height="40" loading="lazy" decoding="async" alt="" aria-hidden="true" class="w-full h-full rounded-[0.6rem] object-contain" />
						</div>
						<div class="min-w-0 flex-1">
							<h4 class="font-semibold text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-cyan)]">
								{app.name}
							</h4>
							<p class="text-sm leading-5 text-[var(--text-secondary)]">{app.description}</p>
						</div>
						<svg aria-hidden="true" class="h-5 w-5 flex-shrink-0 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--accent-cyan)]"
							 fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				{/each}
			</div>
			<div class="mt-4 border-t border-[var(--border-subtle)] pt-3">
				<a href="https://realigned.io?utm_source=customeractions_site"
				   class="flex items-center justify-center gap-2 text-sm font-medium text-[var(--accent-cyan)] no-underline transition-colors duration-200 hover:text-[var(--action-hover)]"
				   target="_blank"
				   rel="noreferrer">
					View all on Realigned.io
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		</div>
	</div>
{/if}
