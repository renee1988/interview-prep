## What is Kubernetes
K8s is an orchestration framework for software containers.
* Containers are a way to package and run code that is more efficient than VMs.
* K8s is a software layer that sits in between your applications and your hardware infrastructure.
* K8s provides the tools you need to run containerized applications in production and at scale.

## What is GKE
GKE is short for Google K9s Engine, is a Google-managed service for K8s. GKE is built on top of GCE.

## What is Cloud Computing
Cloud computing entails resources being provided to you, *as a service*. GCP offers several services that let you run general purpose compute workloads on Google hardware.

### Five fundamental addributes of Cloud Computing
* Compute resources are **on-demand and self-service**: Cloud computing customers using automated interface and get the processing power, storage and network they need with no human intervention.
* Compute resources are accessible over a network from **any** location: Providers allocate resources to customers from a large pool, allowing them to benefit from economies of scale. Customers do not care about the exact physical location of these resources.
* Compute resources themselves are **elastic**: Customers who need more resources can get them quickly, when they need less, they can scale back/down.
* Compute resources are only paid for what the customers have used: Customers stop paying when they stop using the resources.

### What does GCP offer
Run your code in Cloud with Google-managed services.

#### Different type of solutions
* GCE, Google Compute Engine: lets you run VMs on demand in the Cloud. It is essentially a Google-Infrastrcture-as  -a-service (IaaS) solution. It provides the **max.** flexibility for people who prefer to manage those server instances themselves.
  * Most of the applications need a DB of some kind. If you build a Cloud application, you can install and run your own DB forward on a VM inside of GCE. You start up the VM, instlal your DB engine, set it up just like you would in a DC.
  * You have to support and manage the DB yourself.
  * Or you can use Google fully managed DB and storage services.
* GKE, Google K8s Engine: lets you run containerized applications on a Cloud environment that Google Cloud manages fro you under your administrative control.
* GAE, Google App Engine: GCP fully managed Platform-as-a-Service (PaaS) framework. It is a way to run your code in the Cloud **without having to worry about infrastructure at all**. You can focus on your code and let Google deal with all the provisioning and resource management.
* GCF, Google Cloud Functions: is a completely serverless execution environment or Functions-as-a-Serivce (FaaS) solution. It executes your code in response to events, Google scales resources as required, but you only pay for service while your code runs.