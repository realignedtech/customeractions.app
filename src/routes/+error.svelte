<script>
	import { page } from '$app/stores';
	import NotFound from '$lib/components/NotFound.svelte';

	let message = $derived($page.error?.message ?? 'Page not found');
</script>

<svelte:head>
	<title>Page not found | Customer Actions for Jira</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<NotFound {message} />
