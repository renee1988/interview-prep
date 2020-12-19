## Cloud Identity
Google Cloud Identity is an identity as a service solution for managing who has appropriate access to your organization resources and services.

Google Cloud Identity provides a single-admin console (Google Admin Console), you can manage your users, groups, and domain-wide security settings for your organization in this one place.
* Cloud Identity can work with any domain name that is able to receive email -> You can use your existing web and email addresses.
* Your organization does not need to use G Suite services in order to use Cloud Identity.
* When you migrate to Cloud Identity, you must verify that you own the domain name and you create an account for each of your users.

### Google Admin Console
Google Cloud Identity can be
* Leveraged as a standalone service for any domain that you own.
* Combined with your existing G Suite subscriptions
In either case, you can manage all users across your entire domain from the **Google Admin Console**.
* You need to create G Suite licenses for users who require G Suite services.
* You can create free non-licensed Cloud Identity accounts for managing users who do not need G Suite services.

I you are not using G Suite via domain, you need to register your domain with Cloud Identity and verify you are the owner.

Each G Suite or Cloud Identity account is associated with *one* organization.

Organization Administrators have central console of all resources.

When creating the organization, the G Suite or Cloud Identity super admin needs to assign the organization administrator (IAM role) to a user or a group.

You can manage all of your users by assigning roles to users and groups through the GCP Console, IAM and Admin section.

### Google Cloud Directory Sync (GCDS)
Google Cloud Directory Sync helps simplify provisioning and deprovisioning user accounts.

Google Admin Console allows admins to provision/create user accounts manually.

Google Cloud Directory Sync tool synchronizes G Suite accounts to match the data in an existing Active Directory or LDAP.

#### Syncing with Microsoft Active Directory
How does GCDS work?
1. Data is exported from your LDAP server or Active Directory.
2. GCDS connects to the Google domain and generates a list of Google users, groups and shared contacts that you specify.
3. GCDS compares these lists and updates your Google domain to match the data.
4. When complete, a report is e-mailed to the addresses specified when configuring GCDS.

GCDS only performs one-way synchronization, **the data in your directory server is never modified or compromised**.

GCDS runs as a utility within your server environment, it does not need to run in the Cloud, which means there is no need to access your Active Directory or LDAP server outside of your organization IT perimeter.

GCDS automatically provisions and and deprovisions users being added or removed from your Active Directory.

If you are already using Microsoft Active Directory on-premises and want that service and configuration to extend to your Google Cloud deployments, you have the option to use Google Managed service for Microsoft Active Directory.
* Managed Service for Microsoft Active Directory uses the actual Microsoft Active Directory controller, so your work will nto be interrupted by the need to resolve application incompatibilities.
* Since it is a Google managed service, Google will take care of most routine maintenance needs.
  * provides a highly available secure deployment configuration
  * provides automated system patching
  * provides maintenance of appropriate firewall rules
* You can choose how your on-premises, Cloud domains and workloads interact. For example, you can run each as a standalone domain or you can connect your Cloud domain with your on-premises domain.
* It can be integrated with Cloud DNS to allow domain discovery for VMs.

Managed Service for Microsoft Active Directory allows you to create the right architecture for your domain.

Factors to consider are:

- Alignment with existing security zones:
  - In Microsoft AD environment, networks are often segmented into several security zones.
  - These security zones are based on interations required to securely run applications and move data between applications.
  - How these security zones are set up outlines the trust boundaries between machines and traffic on your network.
    - Trust boundaries are another way to contain the impact of a malicious attach.
    - Attacks continue across machines until they hit a traust boundary they cannot cross.
  - When you plan a deployment to Google Cloud that requires the use of Active Directory, you must choose between two options:
    - You can extend an existing on-premise security zone into Google Cloud.
    - You can create a new security zone or zones for your Cloud resources.
    - Zero trust model is the preferred networking model for Google Cloud.
      - Zero trust means that each machine in the network is treated as a separate entity with its own security zone, and all the network and firewall scrutiny that goes along with that assumption.
* Interaction required between on-premises and Google Cloud resources
  * categorized: light, moderate and heavy
    * Light: if you need only an additional set of servers that can accept logins from your organization internal administrators.
      * You can create two separate AD forests that do not shared a trust relatioship, but they require duplicating information on the cloud forest, which would result in any duplicated data out of sync.
      * To resolve the issue of the out-of-sync duplicated data, you can create two separate AD forests, maintaining duplicate records on each side, allow them to communicate with **Cross Forest trust**.
    * Moderate: if your internal administrators need to access file shares or your applications require the ability to authenticate and communicate across trust boundaries.
      * Similar to Light interaction, creating AD forests with Cross Forest trust is recommended.
    * Heavy: if you require virtual desktop infrastructure environment.
      * Virtual desktop infra environment requires a constant flow of information between on-premises resources and resources deployed on Google Cloud.
      * Use a **single** AD forest and sharing it across environments.
* Resource availability requirements
  * how your proposed architecture affects resource availability.
  * In an AD forest, the domain controller serves as an identity provider for users in that domain.
  * Interacting with multiple domain controllers can result in corresponding decrease in the resource availability.

### Google Authentication vs. SAML-based SSO
There are two types of AuthN supported by GCP, two primary ways to handle Google user account authN.
* Google AuthN
* SAML-based SSO (single sign-on)
These two authN mechanisms are **mutually exclusive**.
* They cannot be combined except within super admin accounts.
* Google AuthN is primary mechanism for signing in to GCP.
  * a Google password is stored within Google infrastructure
  * you can specify the min and max number of characters within guidelines and monitor the length and relative strength of your users passwords.
* Google supports SAML (an OpenID complaint SSO system).
  * Google operates as a service provider and your SSO system operates as an identity provider.
  * You can use your own authN mechanism and manage your own credentials.

### Authentication best practice
You should avoid managing permissions fro individual users.
* operational overhead
* better to assign Google Cloud roles to groups and let the G Suite Cloud Identity admins handle group membership
* for high-risk areas, you want to make an exception to this practice, and assign roles to individuals directly

You should have at least two organizational admins.

When the organization is created, all users in your domain are automatically granted project creator and billing account creator IAM roles at the organization level.
* This enables users in your domain to continue creating projects without disruptions.
* Organizational admins should remove these organizational level permissions and start locking down access at finer granularity ASAP.

Your organization account can have multiple domains. When you sign up for a Cloud Identity domain, the first domain name becomes the primary domain for your organization.