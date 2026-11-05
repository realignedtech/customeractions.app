<script>
	import TrustCard from '$lib/components/TrustCard.svelte';

	const resources = [
		{
			title: 'Bug Fix Policy',
			description: 'How we prioritize and resolve security vulnerabilities across Realigned products.',
			href: '/trust/bug-fix-policy'
		},
		{
			title: 'Self-Assessment Questionnaire',
			description: 'Our public responses to cloud security, governance, and compliance controls.',
			href: '/trust/self-assessment-questionaire'
		},
		{
			title: 'Security & Technology Policies',
			description: 'Our principles for access, assets, encryption, operations, and governance.',
			href: '/trust/security-policy'
		},
		{
			title: 'Cloud App Security Compliance',
			description: 'The Atlassian Marketplace security requirements that our Cloud apps follow.',
			href: 'https://developer.atlassian.com/platform/marketplace/security-requirements/',
			external: true
		},
		{
			title: 'Service Provider ISO 27001',
			description: 'Review the ISO 27001 certification published by our infrastructure provider.',
			href: 'https://www.hetzner.com/assets/downloads/FOX-Certificate.pdf',
			external: true
		},
		{
			title: 'Security Scanning Practices',
			description: 'Dependency, application, Data Center, and Atlassian ecosystem security scanning.',
			href: '/trust/security-scanning'
		}
	];
</script>

<main>
	<div class="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
		<div class="max-w-2xl">
			<p class="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Security resources</p>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">Clear policies, public answers.</h2>
			<p class="mt-3 leading-7 text-[var(--text-secondary)]">Review how Realigned approaches application security, privacy, vulnerability management, and operational controls.</p>
		</div>
		<a href="mailto:info@realigned.io" class="realigned-secondary-button shrink-0">Report a concern</a>
	</div>

	<ul class="grid gap-4 p-0 md:grid-cols-2 xl:grid-cols-3">
		{#each resources as resource}
			<TrustCard {...resource} />
		{/each}
	</ul>
</main>
