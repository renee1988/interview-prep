_______________________________________________________________________________
### GKE Concepts
K8s control plane has a lot of components, setting up a K8s cluster by hand is a lot of work. There is an open source command cube ADM that can automate the initial setup of a cluster. However if a node fails or needs maintenance, human admin has to respond manually. The idea of having a managed service for K8s is appealing.

#### Difference between GKE and K8s Control Plane
How does GKE differ from K8s Control Plane?

From the user perspective, GKE is a lot simpler:
* GKE manages all the control-plane components for you. It exposes an IP address to which you send all the K8s API requests.
* GKE provisions and manages all the master infrastructure behind it.

#### Nodes
In any K8s environment, **nodes are created externally by cluster admin**, NOT by K8s itself. GKE automates this process for you.
* GKE launches GCE VM instances and registers them as nodes.
  * You can manage node settings directly from the GCP console.
  * You pay per hour of life of your nodes, not counting the master.
* Since nodes are running on GCE, you choose your node machine type when you create a GKE cluster.
  * You can customize your nodes, number of cores, their memory capacity, etc.
  * You can select a CPU platform, you can choose baseline min. CPU platform for the nodes or node pool.
  * You can select multiple node machine types by creating multiple *node pools*.

##### Node Pools
* A node pool is a subset of nodes within a GKE cluster that share a configuration.
* Node pools provide an easy way to ensure that workloads run on the right hardware within your cluster by labeling the workloads with the desired node pool.
* Node pools are GKE feature, NOT a K8s feature.
* **You can enable automatic node upgrades, repairs and cluster auto-scaling at this node pool level.**

By default, a cluster launches in a single GCP compute zone with three identical nodes, all in one node pool.

#### Clusters
You can use GKE **regional cluster** to increase the availability of your applications.
* Regional clusters have a single API endpoint for the cluster, but its masters and nodes are spread out across multiple compute zones within a region.
* By default, regional cluster is spread across three zones, each containing one master and three nodes.
* Once you build a zonal cluster, you cannot convert it into a regional cluster or vice versa.

Regional and zonal GKE clusters can be set up as a *private* cluster, the entire cluster including its master and nodes are hidden from the public internet.
* Cluster masters can be accessed by GCP products like Stackdriver through an internal IP address, or accessed by authorized networks through an external IP address.
  * Authorized networks are basically IP address ranges that are trusted to access the master.
* In addition, nodes can have limited outbound access through private Google access, which allows them to communicate with other GCP services.
  * For example, nodes can pull container images from GCR without needing external IP address.