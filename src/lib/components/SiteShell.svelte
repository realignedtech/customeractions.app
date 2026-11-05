<script>
	import Header from './Header.svelte';

	let {
		headTitle,
		description,
		ogType = 'website',
		publishedTime = '',
		modifiedTime = '',
		image = undefined,
		jsonLd = [],
		navTitle = 'Customer Actions',
		highlight = '',
		marketplaceLink = 'https://marketplace.atlassian.com/1229532',
		headingInNav = false,
		wide = false,
		subnav,
		children
	} = $props();
</script>

<div class="bg-[var(--bg-base)] text-[var(--text-primary)]">
	<Header
		title={headTitle}
		{description}
		{ogType}
		{publishedTime}
		{modifiedTime}
		{image}
		{jsonLd}
	/>
	{#if subnav}{@render subnav()}{/if}
	{@render children()}
</div>
