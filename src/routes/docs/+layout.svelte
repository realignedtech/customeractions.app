<script>
	import DocsLayout from '$lib/components/DocsLayout.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
	let meta = $derived($page.data?.meta || {});
</script>

<DocsLayout {meta}>
	{@render children()}
</DocsLayout>
