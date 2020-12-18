## GCP Resource Hierarchy
Resource hierarchy level define trust boundaries
- Group your resources according to your organization structure
- Levels of the hierarchy provide trust boundaries and resource isolation
<img style="width:80%" src="./resource-hierarchy-1.jpg">

### Projects
All GCP resources belong to a project: All GCP services you use are associated with a project
- Projects are the basis for enabling and using GCP services (e.g., managing APIs, enabling billing, adding and removing collaborators)
- Each project is a separate compartment, each resource belongs to exactly one project
- Projects can have different owners and users, they are billed separately and they are managed separately
- Track resource and quota usage
- Enable billing
- Manage permissions and credentials
- Enable services and APIs

Projects have three identifying attributes:
- Project ID: globally unique, immutable
- Project Name: mutable
- Project number: globally unique, immutable

### Folders
You can organize your projects into folders, it offers you flexible management:
- You can use group and organize projects into teams
- Folders allow teams to delegate the administrator rights so that they can work independently
- Resources in a folder inherit IAM policies from the folder

### Organization Node
To use folders, you need an organization node at the top of the hierarchy.
- Organization node organizes projects
- Organization node is the root node for Google Cloud resources
    - Most of the companies want the ability to have centralized visibility on
        - how resources are being used
        - applying policies centrally
- Notable organization roles:
    - Organization policy administrator: Broad control over cloud resources
    - Project Creator: Fine=grained control of project creation

How to get an organization node?
- If you are using G Suite (having a G Suite domain), the GCP projects will automatically belong to your organization node
- Or you can use Google Cloud Identity to create one

### Resource & Policies
- A policy is set on a resource
    - Each policy contains a set of roles and role members
- Resources inherit policies from parent
    - Resource policies are a union of parent and resource
- A less restrictive parent policy overrides a more restrictive resource policy
