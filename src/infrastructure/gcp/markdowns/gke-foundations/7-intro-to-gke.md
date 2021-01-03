_______________________________________________________________________________
### What is GKE?
GKE = Google K8s Engine

GKE helps you deploy, manage and scale K8s environments for your containerized applications on GCP.
* GKE is a component of GCP computer offering.
* GKE makes it easy to bring your K8s workloads into the cloud.
* GKE is fully managed by Google, meaning you do not have to provision the underlying resources.
  * GKE uses a container-optmized OS. These OS are managed by Google. They are optmized to scale quickly and with a minimal resource footprint.

#### Clusters
When you use GKE, you start by directing the service to instantiate a K8s system for you. This system is called a **cluster**.
* GKE auto-upgrade feature can be enabled to ensure that your clusters are automatically upgraded with the latest and greatest version of K8s.

#### Nodes
The VMs that host your containers inside of a GKE cluster, are called **nodes**.
* If you enable GKE auto-repair feature, GKE will automatically repair unhealthy nodes for you.
  * GKE will make periodic health checks on each node in the cluster.
  * If a node is determined to be unhealthy and requires repair, GKE will drain the node, in other words, GKE will cause the worloads in the unhealthy node gracefully exit and then recreate that node.

### GKE cluster scaling
Just as K8s supports scaling workloads, GKE supports scaling the cluster itself.

### Integration with other GCP services
GKE seamlessly integrates with Google Cloud Build and Google Container Registry.
* This allows you to automate deployment using private container images that you have securely store in Container Registry.

GKE also integrates with Google IAM, which allows you to control access through the use of accounts and role permissions.

Stackdriver is a GCP service for monitoring and management for services, containers, applications and infrastructure. GKE integrates with Stackdriver monitoring to help you understand your applications performance.

GKE also integrates with Google virtual private clouds or VPCs, it makes use of GCP networking features.

GCP console provides insights into GKE clusters and the resources. It allows you to view, inspect and delete resources in those clusters.
* GCP console is a dashbaord for GKE clusters and workloads that you do not have to manage.
