## Access Controls
What is IAM? It is a way of identifying who can do what on which resource.
* who: the person, group or an application
* what: specific privileges or actions
* which resource: can be any GCP service

Cloud IAM allows you to set policies at all of the levels (organization, folder, project, resource) where policy contains a set of roles and memebers.

### IAM members
There are 5 types of members:
* Google Accounts: represents a developer, an admin, or any other person who interacts with GCP. Any email associated with Google Account can be an identity.
* Service Accounts: is an account that belongs to your application, instead of an individual user. When you run code with it as hosted on GCP, you specify the account that the code should run as. You can create as many service accounts as needed to represent the different logical components of your application.
* Google Groups: is a named collection of Google Accounts and Service Accounts. Every group has unique email addresses that is associated with the group. Google Group is a convenient way to apply an access policy to a collection of users. You can grant and change access controls for the whole group.
* G Suite Domains: represents a virtual group of all the Google Accounts that have been created in an organization G Suite account.
* Cloud Identity Domains: is like a G Suite Domain, it represents a virtual group of all Google Accounts in an organization, however Cloud Identity Domain users do not have access to G Suite applications and features.

### Network-related IAM Roles
* Network Viewer: read-only access to all networking resources
* Network Admin: Permissions to create, modify, and delete networking resources, except for firewall rules and SSL certificates.
* Security Admin: Permissions to create, modify, and delete firewall rules and SSL certificates.

### Organization Policy
Organization policy focuses on what and lets the admin set restrictions on specific resources to determin how they can be configured.

Organization policy service gives you centralized and programmatic control over your cloud resources.
* As the organization policy admin, you can configure constraints across your entire resource hierarchy.

**An organization policy is a configuration of restrictions.**

In order to define an organization policy:
1. You need to choose a **constraint** which is a particular type of restriction against either a Google Cloud service or a group of Google Cloud services.
2. You configure this constraint with your desired restrictions.

#### Organization Policy Constraint
A constraint is a particular type of restriction against a Google Cloud service or a group of Google Cloud services.
* You can think of the constraint as a blueprint that defines what behaviors are controlled. This blueprint is applied to a resource hierarchy node as an organization policy which implements the rule defined in the constraint.
* The Google Cloud service mapped to that constraint and associated with that resource hierarychy node will then enforce the restrictions configured in the organization policy.

A constraint has a type, either *list* or *boolean*.
* List constraints are validity constraints with a list of allowed or denied values that you provide, such as an allow list of IP addresses that can connect to a VM.
  
Examples of list constraints:  
* VPC networking, restrict VM IP forwarding where a list constraint defines the set of VM instances that can enable IP forwarding.
* Restrict shared VPC subnetworks, where a list constraint defines the set of shared VPC networks that eligible to resources can use.
* Restrict shred VPC host projects, where a list constraint defines these set of shared VPC host projects that projects at or below this resource can attach to.
* Restrict VPC peering usage, where a list cosntraint defines these sets of VPC networks allowed to be paired with a VPC network belonging to this project, folder or organization.

### Firewall Rules
Firewall rule parameter: Target and Source

The target defines the instances to which the sirewall rule is intended to apply. There are 3 types of target:
* All instances in the network
* Specified target tags
* Specified service accounts

The source is intended for ingress traffic and defines the allowed sources of tghe traffic.