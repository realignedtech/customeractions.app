<script>
	import BlogLayout from '$lib/components/BlogLayout.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
	let meta = $derived($page.data?.meta || {});
</script>

<BlogLayout {meta}>
	{@render children()}
</BlogLayout>
