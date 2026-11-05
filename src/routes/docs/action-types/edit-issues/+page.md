---
title: "Edit Issues"
description: "Let customers edit Jira issues from the customer portal: configure the editable fields, request types, and user field search."
---

The configuration for the edit issues action is quite simple.

Choose a label for the action as well as which request types it should apply to.

Then select the editable fields via drag and drop. Note that you can add multiple edit actions to a request type in order to make editing more user friendly.

![Edit Issues](/docs/edit-issues.png)

It is necessary to first select a request type to see available fields that can be edited.

You can then drag the fields that should be editable from right to left and sort them according to your needs.

The edit action will be available on the right-hand side of the request view on the customer portal.

![Edit Issues on the portal](/docs/edit-issues2.png)

![Edit Issues configuration](/docs/edit-issues3.png)

## Supported Fields

The following Jira fields and custom field types are currently supported for all users:

- Summary
- Description
- Checkboxes
- Paragraph / Text Field (multi-line) (will always display as rich text)
- Radio Buttons
- Select List (single choice)
- Select List (multiple choices)
- Short Text
- Number Field
- Version Picker (single version)
- Version Picker (multiple versions)
- Date Fields
- DateTime Fields
- Components

### User Fields

Customer Actions app supports the following user fields:

- User Picker (multiple users)
- User Picker (single user)
- Assignee
- Reporter

By default, the user pickers will rely on Jira permissions, which means portal customers without a Jira account will not be able to search for users.

In order to make the user search feature available to everyone, go to the app administration via global Jira configuration:

Apps -> Customer Actions -> Configuration

and enable the toggle to allow browse users permissions to everyone.

Back in the project administration, you can configure the user search on the field configuration by clicking the settings icon and changing between regular user search and search within the organization of the user. Using the latter configuration, the user will only be able to select users from within their own organization.

### Other Fields

We are continually working to support more field types. If you need additional fields, reach out to us via the button at the bottom of this page.
