_______________________________________________________________________________
## Resource Management in GCP
### Google Cloud Regions
Behind services provided by GCP, lay a huge range of GPC resources, physical assets such as physical servers and hard drives and virtual resources such as VMs and containers.
* Resources are managed by Google within its global DCs.
* GCP provides resources in multi-regions, regions, zones.
  * GCP divides the world up into 3 multi-regional areas: Americas, Europe, and Asia Pacific.
  * The 3 multi-regional areas are divided into regions which are independent geographic areas on the same continent.
    * Within a region, there is fast network connectivity, generally round-trip network latencies of under p95 1ms.
  * Regions are divided into zones which are deployment areas for GCP resources within a focus geographic area.
    * You can think of a zone as a DC or multiple DCs within a region.
    * GCE VM instances reside within a specific zone, if that zone becomes unavailable, so would your VMs and the workloads running in them.
    * GKE uses GCE, so your GKE workloads could be affected as well if a zone is down.
    * Deploying applications across multiple zones enables fault tolerance and high availability.

### Resource Hierarchy
The GCP resources you use, no matter where they reside, **must belong to a project**.

#### What is a project
A project is the base level organizing entity for creating and using resources and services and managing billing APIs and permissions.
* Regions and zones physically organize a GCP resources you use and projects logically organize them.
* Each project is identified by a unique project ID and project number. Project ID and number are not changable.
* You can name your project and apply labels for filtering. These labels are changable.

#### What is a folder
Projects can belong to a folder which is another grouping mechanism.
* You should use folders to reflect their hierarchy of your enterprise and apply policies at the right levels within your enterprise.
* You can nest folders inside of folders. For example, you can have a folder for each department, and with each department folder, you can have sub folders for each of the teams that make it up. The projects of each team belong to its folder.

#### What is an organization
A single organization owns all the folders beneath it. Organization is the root node of a GCP resource hierarchy.
* You are not required to have an organization to use GCP.
* Organizations let you set policies that apply throughout your entire enterprise.
* Organization is required for you to use folders.

#### IAM
IAM lets you fine tune access controls all the GCP resources you use.
* You define IAM policies that control user access to resources.
* You apply these policies at the level you choose, and those policies inherit downwards.

#### Billing
Billing accumulates at the **project** level.
* Most GCP customers have a resource hierarchy that looks like their employee organization chart.
* Their project billing looks like their cost center structure.
