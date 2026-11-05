<script>
	import DottedClouds from './DottedClouds.svelte';

	let {
		id = undefined,
		eyebrow = '',
		title = '',
		description = '',
		iconSrc = '',
		iconAlt = '',
		compact = false,
		heading,
		children
	} = $props();
</script>

<section aria-labelledby={id} class="realigned-hero relative overflow-hidden text-white {compact ? 'py-16 sm:py-20' : 'py-20 sm:py-24'}">
	<DottedClouds opacity={0.12} />
	<div class="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
		{#if eyebrow}
			<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
				<span class="h-2 w-2 rounded-full bg-cyan-300"></span>
				{eyebrow}
			</div>
		{/if}

		<div class="flex flex-col items-center justify-center gap-5 sm:flex-row">
			{#if iconSrc}<img src={iconSrc} width="64" height="64" alt={iconAlt} class="h-16 w-16" />{/if}
			<h1 {id} class="text-[clamp(38px,6vw,64px)] font-bold leading-[1.06] tracking-tight text-white">
				{#if heading}{@render heading()}{:else}{title}{/if}
			</h1>
		</div>

		{#if description}
			<p class="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/80">{description}</p>
		{/if}

		{#if children}<div class="mt-10">{@render children()}</div>{/if}
	</div>
</section>
