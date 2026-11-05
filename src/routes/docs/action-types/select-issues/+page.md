---
title: "Select Issues"
description: "Enable customers to select and link related Jira issues from the customer portal, with a JQL query and link type."
---

The Select Issues action lets customers select issues to link from the create screen.

![Select Issues](/docs/select-issues.png)

For this action to work, you must provide a JQL query that limits the range of selectable issues.

## Keeping your data safe

Users can select issues from the customer portal, which potentially exposes your Jira data to the public. This is because the app will execute the JQL for your customers and override Jira permissions. You need to pay close attention to what can be queried.

If you have site-admin permissions, the query will work right away. In case you do not have site-admin permissions, a request will be sent to the site-admin to approve the query.

If there is no admin approval, the query will be executed with user permissions. For portal customers without a Jira licence, this usually means no issues will be returned.

## Further setup

Select a link type to connect issues after ticket creation.

You have the choice to have users select a single issue or multiple issues. You can also customize the buttons on the dialog.
