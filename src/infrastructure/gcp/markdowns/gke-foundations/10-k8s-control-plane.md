_______________________________________________________________________________
### K8s Control Plane
K8s control plane is a set of cooperating processes that make a K8s cluster work.

A K8s **cluster** needs computers.
* Usually the computers that compose your clusters are VMs.
* These computers always are in GKE, but they could be physical computers too.

A computer is called the **master** and the others are called simply, **nodes**.
* The job of the nodes is to run **pods**.
* The job of the master is to coordinate the entire cluster.

Several critical K8s components run on the master.

#### `kube-APIserver`
The single component that you interact with directly is the `kube-APIserver`.
* The job of `kube-APIserver` is to accept commands that view or change the state of the cluster, including launch pods.
* Any query or change to the cluster state must be addresed to the `kube-APIserver`, not only `kubectl` commands.
* `kubectl` command: connect to `kube-APIserver` and communicate with it using K8s API.
* `kube-APIserver` also authenticates incoming requests, determines whether they are authorized, invalid and manages admission contorl.

#### `etcd`
`etcd` is the cluster database.
* Its job is to reliably store the state of the cluster.
  * all the cluster configuration data
  * dynamic information such as what nodes are part of the cluster, what pods should be running, and where they should be running.
* You never directly interact with `etcd`, instead `kube-APIserver` interacts with `etcd` database on behalf of the rest of the system.

#### `kube-scheduler`
`kube-scheduler` is resposible for scheduling pods onto the nodes.
* `kube-scheduler` evaluates the requirements of each individual pod and selects which node is most suitable.
* `kube-scheduler` does not do the actual work to launch pods into nodes.
* Whenever `kube-scheduler` discovers a pod object that does not yet have an assignment to a node, it chooses a node and simply write the *name* of that node into the pod object.

How does `kube-scheduler` decide where to run a pod?

`kube-scheduler` knows the state of all the nodes, and it will also obey constraints that you define on where a pod may run, based on hardware, software and policy.
* You can specify that a certain pod is only allowed to run on nodes with a certain amount of memory
* You can define affinity specs, which cause a group of pods to refer running on the same node.
* You can define anti-affinity specs, which ensure that pods do not run on the same node.

#### `kube-controller-manager`
`kube-controller-manager` continuously monitors the state of a cluster through `kube-APIserver`. Whenever the current state of the cluster does not match the desired state, `kube-controller-manager` will attempt to make changes to achieve the desired state.
* `kube-controller-manager` is called the controller manager because many K8s objects are maintained by loops of code called **controllers**. These loops of code handle the process of remediation.
  * You all use certain kinds of K8s controllers to manage workloads. For example, to keep Nginx pods running, we gather them together into a controller object called a **deployment**.
  * There are other controllers like **node controller**. The job of a node controller is to monitoring and respond when a node is offline.

#### `kube-cloud-manager`
`kube-cloud-manager` manages the controllers that interact with underlying cloud providers.

For example, if you manually launch a K8s cluster on GCE, `kube-cloud-manager` is responsible for bringing in GCP features like load balancers and storage volumes when you need them.

### Nodes in Clusters
Each node runs a small family of control-plane components too.

#### kubelet
Each node runs a kubelet. A kubelet is a K8s agent on each node.
* When `kube-APIserver` wants to start a pod on a node, it connects to the kubelet of that node.
* kubelet uses the **container runtime** to start the pod and monitor its lifecycle, including readiness and liveness probes, and reports back to `kube-APIserver`.
  * Container runtime is the software that knows how to launch a container from a container image.
  * K8s offers several options of container runtimes, the Linux distribution that GKE uses for its nodes launches containers using the container runtime: **container D**, the runtime component of Docker.

#### kube-proxy
The job of kube-proxy  is to maintain network connectivity among the pods in a cluster. It does so using the firewall capabilities of IP tables, which are built into the Linux kernel.