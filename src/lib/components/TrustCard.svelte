<script>
	let { title, description, href, external = false } = $props();
</script>

<li class="min-w-0 list-none">
	<a
		{href}
		target={external ? '_blank' : undefined}
		rel={external ? 'noreferrer' : undefined}
		class="trust-card group"
	>
		<div class="trust-icon">
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3 5 6v5c0 4.8 2.95 8.18 7 10 4.05-1.82 7-5.2 7-10V6l-7-3Zm-3 9 2 2 4-4" />
			</svg>
		</div>
		<div class="min-w-0 flex-1">
			<h2 class="text-lg font-semibold tracking-tight text-[var(--text-primary)]">{title}</h2>
			<p class="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
		</div>
		<svg class="mt-1 h-4 w-4 flex-none text-[var(--text-muted)] transition group-hover:translate-x-0.5 group-hover:text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			{#if external}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5h5v5m0-5-9 9M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
			{:else}
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
			{/if}
		</svg>
	</a>
</li>

<style>
	.trust-card {
		display: flex;
		height: 100%;
		align-items: flex-start;
		gap: 1rem;
		border: 1px solid var(--border-subtle);
		border-radius: 0.75rem;
		background: var(--bg-surface);
		padding: 1.4rem;
		box-shadow: 0 18px 40px -32px rgba(3, 105, 161, 0.4);
		text-decoration: none;
		transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
	}

	.trust-card:hover {
		border-color: rgba(3, 105, 161, 0.34);
		background: var(--bg-surface-hover);
		transform: translateY(-2px);
	}

	.trust-icon {
		display: flex;
		height: 2.4rem;
		width: 2.4rem;
		flex: none;
		align-items: center;
		justify-content: center;
		border: 1px solid rgba(3, 105, 161, 0.2);
		border-radius: 0.6rem;
		background: var(--action-soft);
		color: var(--accent-cyan);
	}
</style>
