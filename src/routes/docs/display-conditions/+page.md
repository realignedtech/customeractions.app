---
title: "Display Conditions"
description: "Show a customer action only when a JQL condition is met, using the built-in JQL editor and validation."
---

Customer Actions supports display conditions, to show action types only when a JQL query is met.

Note that this only works on the view issue screen, as actions on the create screen cannot be checked against an issue (since the issue does not exist yet).

The JQL editor lets you validate your query directly and shows you a list of issues. Invalid queries will fail the condition and the action will not display.

The following examples show what is possible with display conditions.

### Show for a certain status only

Use the following JQL query to show the action button only when the issue has a certain status:

`status in (Open)`

Shows the action button only for status "Open".

### Check labels

Check against a list of labels:

`labels in ("action-required","approval-required")`

Be aware that these queries will be executed from the app directly. User-aware queries like `currentUser()` are not supported at this time.
