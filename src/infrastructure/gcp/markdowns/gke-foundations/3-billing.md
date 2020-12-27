_______________________________________________________________________________
## Billing in GCP
Billing in GCP is set up at the GCP project level.
* When you define a GCP project, you will link a billing account to it.
* This billing account is where you will configure all your billing information, including your payment option.
* You can link a billing account to one or more projects.
* Projects you do not link any billing account could only use free GCP services.

Your billing account can be charged automatically and invoiced every month, or at every threshold limit.

You can separate project billings by setting up billing sub-accounts. Some GCP customers who resell GCP services use those sub-accounts for each of their own clients.

### How can I prevent running up a big GCP bill?
GCP provides tools to help:
* Budgets: You can define budgets at the billing account level or even at the project level.
* Alerts: To be notified when costs approach your budget limit, you can create alerts.
* Billing export: allows you to store detailed billing information in places where it is easy to retrieve for external analysis, such as a BigQuery dataset or a Cloud Storage bucket.

#### Billing quotas
GCP Billing also implements quotas which limit unforeseen extra billing charges.
* Quotas are designed to prevent the over consumption of resources because of an error or a malicious attack.
* Quotas apply at the project level.

Two types of quotas:
* Rate quota
  * Rate quotas reset after a specific time.
  * GKE service implements a quota of 1000 calls to its API for each GCP project every 100 seconds. After the 100 seconds, that limit is reset.
* Allocation quota
  * Allocation quota controls the number of resources you can have in your projects.
  * They do not reset at any interval.