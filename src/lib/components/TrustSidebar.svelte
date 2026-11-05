<script>
	let { navigation = [], currentRoute = '/trust', onnavigate = () => {} } = $props();
</script>

<div>
	<div class="mb-5 px-2">
		<p class="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Trust Center</p>
		<h2 class="mt-1 text-base font-semibold text-[var(--text-primary)]">Policies & practices</h2>
	</div>

	<nav aria-label="Trust Center pages" class="space-y-1">
		{#each navigation as item}
			<a href={item.href} onclick={onnavigate} class:active={currentRoute === item.href} class="trust-nav-row">
				<span>{item.navTitle || item.title}</span>
				<svg class="h-3.5 w-3.5 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
				</svg>
			</a>
		{/each}
	</nav>

	<div class="mt-6 border-t border-[var(--border-subtle)] px-2 pt-5">
		<p class="text-xs leading-5 text-[var(--text-muted)]">Have a security concern?</p>
		<a href="mailto:info@realigned.io" class="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-cyan)] hover:text-[var(--action-hover)]">
			Contact Realigned
			<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4 4L19 6" /></svg>
		</a>
	</div>
</div>

<style>
	.trust-nav-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		border-radius: 0.5rem;
		padding: 0.6rem 0.7rem;
		color: var(--text-secondary);
		font-size: 0.82rem;
		font-weight: 500;
		line-height: 1.35;
		transition: background 160ms ease, color 160ms ease;
	}

	.trust-nav-row:hover { background: var(--bg-surface-hover); color: var(--text-primary); }
	.trust-nav-row.active { background: var(--action-soft); box-shadow: inset 2px 0 var(--accent-sky-soft); color: var(--accent-cyan); }
</style>
