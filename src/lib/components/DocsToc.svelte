<script>
	let { headings = [] } = $props();
	let activeId = $state('');

	$effect(() => {
		const ids = headings.map((heading) => heading.id);
		if (!ids.length || typeof document === 'undefined') return;
		if (!ids.includes(activeId)) activeId = ids[0];

		const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
				if (visible[0]?.target.id) activeId = visible[0].target.id;
			},
			{ rootMargin: '-18% 0px -70% 0px', threshold: [0, 1] }
		);

		elements.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	});

	function navigate(event, id) {
		event.preventDefault();
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		history.replaceState(null, '', `#${id}`);
	}
</script>

{#if headings.length}
	<nav aria-label="On this page">
		<p class="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">On this page</p>
		<ul class="space-y-1 border-l border-[var(--border-subtle)]">
			{#each headings as heading}
				<li class:pl-3={heading.level === 3}>
					<a
						href="#{heading.id}"
						onclick={(event) => navigate(event, heading.id)}
						class:active={activeId === heading.id}
						class="toc-link"
					>{heading.text}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	.toc-link {
		display: block;
		margin-left: -1px;
		border-left: 1px solid transparent;
		padding: 0.38rem 0 0.38rem 0.85rem;
		color: var(--text-muted);
		font-size: 0.76rem;
		line-height: 1.4;
		transition: color 160ms ease, border-color 160ms ease;
	}

	.toc-link:hover { color: var(--text-primary); }
	.toc-link.active { border-left-color: var(--accent-cyan); color: var(--accent-cyan); }
</style>
