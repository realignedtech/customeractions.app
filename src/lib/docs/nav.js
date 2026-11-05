export const titles = {
	intro: 'Introduction',
	setup: 'Setup',
	'creating-actions': 'Creating Actions',
	'action-types': 'Action Types',
	'edit-issues': 'Edit Issues',
	'select-issues': 'Select Issues',
	'sign-documents': 'Sign Documents',
	'display-conditions': 'Display Conditions',
	support: 'Support',
	privacy: 'Privacy Information',
	eula: 'End User License Agreement'
};

export const CustomerActionTitles = titles;

export const CustomerActionsNav = [
	{ link: '/', title: titles.intro },
	{ link: '/setup', title: titles.setup },
	{ link: '/creating-actions', title: titles['creating-actions'] },
	{
		link: '/action-types', title: titles['action-types'], children: [
			{ link: '/action-types/edit-issues', title: titles['edit-issues'] },
			{ link: '/action-types/select-issues', title: titles['select-issues'] },
			{ link: '/action-types/sign-documents', title: titles['sign-documents'] }
		]
	},
	{ link: '/display-conditions', title: titles['display-conditions'] },
	{
		link: '/support', title: titles.support, children: [
			{ link: '/support/privacy', title: titles.privacy },
			{ link: '/support/eula', title: titles.eula }
		]
	}
];

export default CustomerActionsNav;
