# Customer Actions for Jira

## Product

Customer Actions for Jira extends the Jira Service Management customer portal with configurable actions. Portal users can edit their requests, select and link related issues, and read and acknowledge documents, without a Jira account and without leaving the request form.

The Atlassian Marketplace listing is `1229532`. Installation, evaluation, licensing, and updates are handled through Atlassian Marketplace.

## Site architecture

- SvelteKit 2 and Svelte 5
- Static generation with `@sveltejs/adapter-static`
- Tailwind CSS 3
- mdsvex documentation routes
- Shared Realigned navigation, footer, Trust Center, SEO, and analytics patterns from the Story Mapping site

The legacy Next.js site (source `stefan-ernst/storymapping-site-2`, `sites/customeractions`, still live on Netlify during rollout) is the content source of record. This workspace is the new implementation and must not invent capabilities, customer claims, or proof that are absent from the product documentation.

## Brand and URLs

- Product: Customer Actions for Jira (short form: Customer Actions)
- Site: `https://customeractions.app`
- Marketplace: `https://marketplace.atlassian.com/1229532`
- Product icon: `/CaIcon2.svg`
- Social image: `/realignedOG.png`
- Publisher: Realigned Technologies GmbH (Atlassian Marketplace vendor: Realigned Technologies Ltd.)

## Principles

1. Keep Jira Service Management as the source of truth; the app stores no customer data.
2. Show the product with real screenshots rather than unsupported claims.
3. Make documentation and security information easy for existing customers to find.
4. Preserve the exact product name and keep Customer Actions distinct from the other Realigned Jira apps.
