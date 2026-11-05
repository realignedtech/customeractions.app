<script>
	import { page } from '$app/stores';
	import { canonicalUrlFor, siteOrigin } from '$lib/seo/canonical.js';
	import { organizationSchema, websiteSchema } from '$lib/seo/schema.js';

	let {
		title,
		description,
		ogType = 'website',
		publishedTime = '',
		modifiedTime = '',
		image = `${siteOrigin}/realignedOG.png`,
		jsonLd = []
	} = $props();

	let canonicalUrl = $derived(canonicalUrlFor($page.url.pathname));
	let structuredData = $derived([organizationSchema, websiteSchema, ...jsonLd]);
	let defaultImage = `${siteOrigin}/realignedOG.png`;
	let isDefaultImage = $derived(image === defaultImage);
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
		<meta property="og:title" content={title} />
		<meta name="twitter:title" content={title} />
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta name="twitter:description" content={description} />
	{/if}

	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:type" content={ogType} />
	<meta property="og:site_name" content="Customer Actions for Jira" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={image} />
	{#if isDefaultImage}
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
	{/if}
	{#if ogType === 'article' && publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if ogType === 'article' && modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={image} />

	{#each structuredData as data}
		{@html `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`}
	{/each}
</svelte:head>
