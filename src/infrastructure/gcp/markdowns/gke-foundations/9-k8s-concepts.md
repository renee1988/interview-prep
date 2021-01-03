_______________________________________________________________________________
### Fundamental components of K8s operating philosophy
There are two related concepts you need to understand:
* K8s Object Model: each thing K8s manages is represented by an *object*. You can view and change these objects, attributes and state.
* Declarative Management: K8s expects you to tell it what you want, the state of objects under each management to be. It will work to bring that state into being and keep it there.

#### K8s Object
K8s object is defined as a persistent entity that represents the state of something running in a cluster: its desired state and its current state.

Various kinds of objects:
* the containerized applications
* the resources that are available to the applications
* the policies that affect their behavior

K8s object has two important elements:
* **Object spec**: You give K8s an object spec for each object you want to create. With this spec, you define the desired state of the object by providing the characteristics that you want.
* **Object status** is simply the current state of the object provided by K8s control plane.
  * K8s control plane: refers to the various system processes that collaborate to make a K8s cluster work.

#### K8s Object Model
**Pods** are the basic building block of the standard K8s model, and they are the *smallest* deployable K8s object.
* Every running container and K8s system is **in a pod**.
* A pod embodies the environment where the containers live.
  * This environment can accommodate one or more containers.
  * If there is more than one container in a pod, they are tightly coupled and share resources including networking and storage.
    * K8s assigns each pod *a unique IP address*. Every container within a pod sahres the network namespace.
    * Containers within the same pod can communicate through the `localhost`: 127.0.0.1 IP address.
    * A pod can specify a set of storage volumes to be shared among its containers.

Example: You want 3 Nginx web servers, each running in its own container, running all the time. How will this be achieve in K8s?
1. You declare some objects to represent those Nginx containers. What objects? Maybe Pods, **although Pods are not self-healing**.
1. K8s launches these objects and maintains them.