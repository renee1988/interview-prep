## Identity and Access Management
IAM lets administrators authorize who can take actions on specific resources.

IAM policy has
- a “who” part: Google account, Google group, service account, an entire G Suite, or cloud identity domain
- a “can do what” part: defined by an IAM role (a collection of permissions), three types of IAM roles
    - Primitive:
        - applied across all GCP services in a project
        - affects all resources on the project
        - offers fixed, coarse-grained levels of access
            - Owner: invite members, remove members, delete projects + editor permissions + billing administrator permission
            - Editor: Deploy applications, modify code, configure services + viewer permissions
            - Viewer: read-only access
            - Billing administrator: Manage billing, add and remove administrators
    - Predefined:
        - applied to a particular GCP service in a project
        - offers more fine-grained permissions on particular services
    - Custom:
        - can define a precise set of permissions
        - can only be used at a project or organization level, can’t be used at a folder level
    - Service account:
        - controls server-to-server interactions
        - provide an identity for carrying out server-to-server interactions in a project
        - used to authenticate from one service to another
        - used to control privileges used by resources
            - so that applications can perform actions on behalf of authenticated end users
        - identified with an email address
        - What if you want to give permission to a Compute Engine virtual machine rather than a person?
            - create a service account to authenticate the VM to Cloud Storage
            - instead of passwords, service accounts use cryptographic keys to access resources
            - Google manages keys for Compute Engine and App Engine
            - one can assign a predefined or custom IAM role to the service account
            - For example: a service account has been granted a Compute Engine instance administrator role, this allows an application running on a VM with this service account to create, modify, delete other VMs
        - **A service account is also a resource, it can have IAM policies attached to it**
            - For example, Alice can have an editor role on a service account and Bob can have a viewer role on this service account.
        - Service account permissions can be changed without recreating the VMs
- an “on which resource” part