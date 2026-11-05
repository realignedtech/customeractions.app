<script>
	let {
		title = 'Documentation',
		sectionLabel = 'Customer Actions documentation',
		updated = '',
		onheadingschange = () => {},
		children
	} = $props();

	let contentElement = $state();
	let expandedImage = $state(null);

	$effect(() => {
		if (!contentElement) return;

		const collectHeadings = () => {
			const headings = [...contentElement.querySelectorAll('h2[id], h3[id]')].map((heading) => ({
				id: heading.id,
				text: heading.textContent?.trim() || '',
				level: Number(heading.tagName.slice(1))
			}));
			onheadingschange(headings);
		};

		collectHeadings();
		const observer = new MutationObserver(collectHeadings);
		observer.observe(contentElement, { childList: true, subtree: true });
		contentElement.addEventListener('click', handleContentClick);
		return () => {
			observer.disconnect();
			contentElement.removeEventListener('click', handleContentClick);
		};
	});

	function handleContentClick(event) {
		const image = event.target.closest('img');
		if (image && contentElement?.contains(image)) expandedImage = image.src;
	}

	function closeModal() {
		expandedImage = null;
	}
</script>

{#if expandedImage}
	<div class="blanket" role="dialog" tabindex="-1" aria-label="Expanded documentation image" onclick={closeModal} onkeydown={(event) => event.key === 'Escape' && closeModal()}>
		<div class="modal-image"><img src={expandedImage} alt="" class="max-h-full max-w-full" /></div>
	</div>
{/if}

<article class="docs-article">
	<header class="docs-heading">
		<div class="mb-2 flex items-center gap-2 text-xs font-semibold text-[var(--accent-cyan)]">
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.25v13m0-13C10.83 5.48 9.25 5 7.5 5S4.17 5.48 3 6.25v13C4.17 18.48 5.75 18 7.5 18s3.33.48 4.5 1.25m0-13C13.17 5.48 14.75 5 16.5 5s3.33.48 4.5 1.25v13C19.83 18.48 17.25 18 15.5 18s-2.33.48-3.5 1.25" />
			</svg>
			{sectionLabel}
		</div>
		<h1>{title}</h1>
		{#if updated}
			<p class="mt-3 text-sm text-[var(--text-muted)]">Last updated <time datetime={updated}>{new Date(updated).toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })}</time></p>
		{/if}
	</header>

	<div bind:this={contentElement} class="docs-content">
		{@render children()}
	</div>
</article>

<style>
	.docs-article {
		min-width: 0;
		overflow: hidden;
		border: 1px solid var(--border-subtle);
		border-radius: 0.75rem;
		background: var(--bg-surface);
		box-shadow: 0 22px 50px -38px rgba(3, 105, 161, 0.45);
	}

	.docs-heading {
		border-bottom: 1px solid var(--border-subtle);
		padding: 2rem 2.25rem 1.65rem;
		background: linear-gradient(135deg, var(--bg-elevated), rgba(255, 255, 255, 0));
	}

	.docs-heading h1 {
		margin: 0;
		color: var(--text-primary);
		font-size: clamp(1.8rem, 3vw, 2.45rem);
		font-weight: 700;
		letter-spacing: -0.025em;
		line-height: 1.15;
	}

	.docs-content {
		padding: 2.25rem;
		color: var(--text-secondary);
		font-size: 1rem;
		line-height: 1.8;
	}

	:global(.docs-content h1),
	:global(.docs-content h2),
	:global(.docs-content h3),
	:global(.docs-content h4) {
		color: var(--text-primary);
		font-weight: 700;
		letter-spacing: -0.018em;
		line-height: 1.25;
		scroll-margin-top: 9rem;
	}

	:global(.docs-content h1) { margin: 0 0 1.5rem; font-size: 2rem; }
	:global(.docs-content h2) { margin: 2.5rem 0 0.85rem; font-size: 1.55rem; }
	:global(.docs-content h3) { margin: 2rem 0 0.7rem; font-size: 1.22rem; }
	:global(.docs-content h4) { margin: 1.6rem 0 0.55rem; font-size: 1.05rem; }
	:global(.docs-content h2:first-child),
	:global(.docs-content h3:first-child) { margin-top: 0; }
	:global(.docs-content p) { margin: 0.9rem 0; }
	:global(.docs-content strong) { color: var(--text-primary); font-weight: 600; }
	:global(.docs-content a) { color: var(--accent-cyan); font-weight: 600; text-decoration: underline; text-decoration-color: rgba(3, 105, 161, 0.35); text-underline-offset: 3px; }
	:global(.docs-content a:hover) { color: var(--action-hover); text-decoration-color: currentColor; }
	:global(.docs-content h2 a),
	:global(.docs-content h3 a),
	:global(.docs-content h4 a) { color: inherit; font-weight: inherit; text-decoration: none; }
	:global(.docs-content h2 a:hover),
	:global(.docs-content h3 a:hover),
	:global(.docs-content h4 a:hover) { color: inherit; text-decoration: none; }
	:global(.docs-content ul),
	:global(.docs-content ol) { margin: 1rem 0; padding-left: 1.5rem; }
	:global(.docs-content ul) { list-style: disc; }
	:global(.docs-content ul ul) { list-style: circle; }
	:global(.docs-content ol) { list-style: decimal; }
	:global(.docs-content li) { margin: 0.35rem 0; padding-left: 0.2rem; }
	:global(.docs-content li::marker) { color: var(--accent-cyan); font-weight: 600; }
	:global(.docs-content hr) { margin: 2.25rem 0; border: 0; border-top: 1px solid var(--border-subtle); }
	:global(.docs-content blockquote) { margin: 1.4rem 0; border-left: 3px solid var(--accent-sky-soft); border-radius: 0 0.5rem 0.5rem 0; background: var(--action-soft); padding: 0.75rem 1rem; color: var(--text-secondary); }
	:global(.docs-content code) { border: 1px solid var(--border-subtle); border-radius: 0.3rem; background: var(--bg-elevated); padding: 0.13rem 0.35rem; color: var(--accent-cyan); font-size: 0.86em; }
	:global(.docs-content pre) { overflow-x: auto; margin: 1.4rem 0; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 0.6rem; background: #061d3d; padding: 1.1rem 1.2rem; }
	:global(.docs-content pre code) { border: 0; background: transparent; padding: 0; color: #dbeafe; }
	:global(.docs-content table) { display: block; overflow-x: auto; width: 100%; margin: 1.5rem 0; border-collapse: collapse; }
	:global(.docs-content th),
	:global(.docs-content td) { border: 1px solid var(--border-subtle); padding: 0.65rem 0.8rem; text-align: left; }
	:global(.docs-content th) { background: var(--bg-surface-hover); color: var(--text-primary); font-weight: 600; }
	:global(.docs-content img) { max-width: 100%; height: auto; margin: 1.6rem auto; border: 1px solid var(--border-subtle); border-radius: 0.6rem; box-shadow: 0 16px 36px -26px rgba(3, 105, 161, 0.5); cursor: zoom-in; }

	.blanket {
		position: fixed;
		inset: 0;
		z-index: 500;
		background: rgba(2, 6, 23, 0.82);
		backdrop-filter: blur(6px);
	}

	.modal-image {
		position: absolute;
		inset: 5vh 5vw;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}

	@media (max-width: 639px) {
		.docs-heading { padding: 1.55rem 1.35rem 1.35rem; }
		.docs-content { padding: 1.5rem 1.35rem; font-size: 0.95rem; }
	}
</style>
