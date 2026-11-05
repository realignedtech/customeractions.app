export const trustNavigation = [
	{
		href: '/trust',
		title: 'Trust Center',
		navTitle: 'Overview',
		description: 'Security, privacy, and compliance information for Customer Actions for Jira: policies, scanning practices, and how we handle your data.'
	},
	{
		href: '/trust/security-policy',
		title: 'Security & Technology Policies',
		description: 'How Realigned manages access, risk, infrastructure, and operations for Customer Actions for Jira, and the controls behind them.'
	},
	{
		href: '/trust/security-scanning',
		title: 'Security Scanning Practices',
		description: 'Our dependency, application, and Atlassian ecosystem scanning practices, and how findings are triaged, tracked, and remediated.'
	},
	{
		href: '/trust/bug-fix-policy',
		title: 'Bug Fix Policy',
		description: 'Severity-based objectives for resolving security vulnerabilities, with target timeframes for each severity level and how fixes are reported.'
	},
	{
		href: '/trust/self-assessment-questionaire',
		title: 'Self-Assessment Responses',
		description: 'Our public responses to the cloud security, governance, and compliance questionnaire for Customer Actions for Jira.'
	}
];

export function trustPageFor(pathname) {
	return trustNavigation.find((item) => item.href === pathname) || trustNavigation[0];
}
