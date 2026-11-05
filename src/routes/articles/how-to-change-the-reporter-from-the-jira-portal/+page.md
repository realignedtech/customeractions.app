---
title: "How to change the reporter from the Jira customer portal"
description: "Allowing users to report issues for other users can improve their support experience. A step-by-step guide to making the reporter field editable from the customer portal."
date: 1677599339663
---

Jira is a popular issue and project tracking tool used by many teams to manage their work. One of the key features of Jira is its ability to allow users to report and track issues. In Jira, an issue can have multiple fields, such as the summary, description, priority, and more. One of the key fields of an issue is the "Reporter" field, which identifies the person who reported the issue. In some cases, the reporter of an issue may need to be changed, and Customer Actions for Jira allows for this to be done via the customer portal.

When the app is installed, the Jira customer portal can be customized to show specific actions that customers can perform on their issues, such as editing the issue's details, adding links, or signing documents.

With the help of Customer Actions for Jira, admins can define an action that is visible via the portal view, which enables users to click the "Change Reporter" button and select a different reporter.

![Portal Preview](/blog/change-reporter4.png)

Adding this functionality is simple. Open the Customer Actions app and click "Add Action".

![Add Customer Action](/blog/change-reporter1.png)

Next, create an action with type "Edit Issue". Even if you already have such an action defined, you can put changing the reporter field in a separate action. This way, it is possible to allow changing the reporter only in a special status or when other conditions on the Jira issue are met.

![Create an Action](/blog/change-reporter2.png)

In this example, we will allow changing the reporter only in a status that is not "Closed", and only the current reporter of the issue is allowed to change the reporter. As the editable field we will only add the reporter field. All other fields could go on a separate "Edit Issues" action.

![Configuring the action](/blog/change-reporter3.png)

That's it. Once you access the customer portal, you will be able to see the "Change Reporter" button on the left hand side of the request view. When clicking it, a pop-up will open where you can edit the reporter and save the issue.

Once the reporter is changed and the original reporter is not in the Request Participants list, the issue will not be accessible to them anymore.
