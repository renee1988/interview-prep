_______________________________________________________________________________
### Advanced Objects Service
Pods are created and destroyed dynamically. Pods can communicate using their assigned Pod IP addresses, **these IP addresses are ephemeral**.

Question: Imagine you have two sets of pods: frontend pods, and backend pods. How will the frontend pods discover and keep track of dynamically scaling backend pods?

**K8s service** comes to the rescue.

#### K8s services
A K8s service is **a static IP address** that represents a service or a function in your infrastructure.
* It is a network abstraction for a set of pods that deliver that service.
* It hides the ephemeral nature of the IP addresses of the individual Pods.

In the question example, a set of backend pods can be exposed to the frontend pods using a K8s service.
* the service defines a set of pods and assigns a policy by which you can access those pods.
* the pods are selected using a label selector.

You can also get a service quickly by asking K8s to expose a deployment.
* When you do this, K8s handles selecting the right pods for you.

Whenever a service is created, K8s automatically creates endpoints for the selected pods, by creating endpoint resources.

By default the master assigns a virtual IP address, also known as a cluster IP, to the service from internal IP tables.
* With GKE, this is assigned from the clusters VPC network.

There are 3 primary types of K8S services:
* ClusterIP: exposes the service on an IP address that is only accessible from within this cluster. This is the default type.
* NodePort: exposes the service on an IP address of each node in the cluster, at a specific port number.
* LoadBalancer: exposes the service externally, using a load-balancing service provided by a cloud provider.

#### Data access
A container application can easily write data to the read-write layer inside the container, but it is ephemeral. What if you want to store data permanently? Or what if you need storage to be shared between tightly coupled containers within a pod?

**K8s volume** comes to the rescue.

#### K8s volume
A K8s volume is simply a directory that is accessible to all the containers in a pod. The requirements for a volume are defined through the pod spec. This declares how the directory is created, what storage medium should be used, and its initial contents.

In order to access these volumes, these volumes must be mounted specifically on each container within a pod. However pods themselves are also ephemeral. A failing node or deleted pod could lead to its volume being deleted too. To avoid this, you can configure volumes using network-based storage from outside of your pods to provide durable storage that is not lost when a pod or a node fails.