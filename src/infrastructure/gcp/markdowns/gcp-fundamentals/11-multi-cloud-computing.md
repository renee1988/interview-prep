## Monolithic Application
<img style="width:80%" src="./multi-cloud-computing-1.jpg">

## Monolithic Application
<img style="width:80%" src="./multi-cloud-computing-2.jpg">
- Move only some of your compute workloads to the Cloud
- Move at your own pace
- Take advantage of Cloud’s scalability and lower costs
- Add specialized services to your compute resources stack

**Antho** is Google’s modern solution for hybrid and multi-cloud systems and services management
- K8s and GKE On-Prem create the foundation
- On-premises and Cloud environments stay in sync
- A rich set of tools is provided for
    - Managing services on-premises and in the Cloud
    - Monitoring systems and services
    - Migrating applications from VMs into your clusters
    - Maintaining consistent policies across all clusters, whether on-premises or in the Cloud

### Building a modern hybrid infrastructure with Anthos
<img style="width:80%" src="./multi-cloud-computing-3.jpg">

- GKE is a managed production-ready environment for deploying containerized applications
    - Auto node repair
    - Auto upgrade
    - Autoscaling
- Uses regional clusters for high availability with multiple masters
- Node storage replication across multiple zones
- GKE deployed on-prem is a turn-key production-grade conformed version of K8s with the best practice configuration already pre-loaded
    - provides access to container services on GCP
        - Cloud build
        - Container registry
        - audit logging
    - integrates with Istio, Knative and Marketplace solutions
- GKE and GKE deployed on-prem both integrate with GCP Marketplace, so all of the clusters in your network, whether on-premises or in the Cloud, have access to the same repository of containerized applications.
    - allows you to use the same configurations on both sides of the network
    - reduces the time spent developing applications
- Anthos and Istio Open Source service mesh communicate across hybrid network using Cloud Interconnect to sync and pass microservices data
- Anthos Config Management provides single source of truth for your cluster configuration
    - Policies are stored in a Git Repo
    - Can be hosted on-premises or Cloud

### Getting Started with GEK
```
# Create a cluster named "webfrontend" with 2 nodes located
# in zone "us-central1-a" (view the VM instances in Compute
# Engine)
# `gcloud container clusters create` command automatically
# authenticated kubectl for you
> gcloud container clusters webfrontend --zone us-central1-a --num-nodes 2
# K8s commands
# 1. Launch a signle instance of nginx container
#    Note: in K8s, all containers run in pods, this command
#          is to create a deployment consisting of a single
#          pod containing the nginx container. A K8s deployment
#          keeps a given number of pods up and running even in
#          the event of failures among the nodes on which they
#          run. By default, the number of pods is 1
> kubectl create deploy nginx --image=nginx:1.17.0
# 2. Expose the nginx container to the Internet
#    Note: K8s created a service and an external load balancer
#          with a public IP address attached to it. The IP address
#          remains the same for the life of the service. Any
#          network traffic to that public IP address is routed to
#          pods behind the service, in this case, a nginx pod
> kubectl expose deployment nginx --port 80 --type LoadBalancer
# 3. Scale up the number of pods running on your service
> kubectl scale deployment nginx --replicas 3
```

## GCP App Engine

Compute Engine and K8s Engine allow you choose the infrastructure which your application runs:

- Virtual machines for Compute Engine
- Containers for K8s

**If you don’t want to focus on the infrastructure at all, that is what App Engine is for.**

### Paas: Platform as a Service

App Engine platform manages the hardware and networking infrastructure required to run your code.

- Makes deployment, maintenance, and scalability easy so you can focus on innovation, provides services:
    - Databases
    - In-memory caching
    - Load balancing
    - Health checks
    - Logging
    - User authentication
- Autoscales your application based on the traffic it sees
    - suites applications that have variable/unpredictable workloads
        - web applications
        - mobile backends

### App Engine Standard Environment

- Easily deploy your applications
- Autoscale workloads
- Free daily quota
- Usage based pricing

**What does your code run on? What exactly is the executable binary?**

- App Engine’s term for this kind of binary is the **runtime**
- In App Engine standard environment, you will use a runtime provided by Google
    - Java
    - Python
    - PHP
    - Go
- App Engine standard environment enforces restrictions on your code by making it run in a “**sandbox**”, a software construct that is independent of hardware, OS and physical location of the service it runs on. The sandbox is one of the reasons why App Engine standard environment can scale and manage your application in a fine-grained way.
- App Engine standard environment sandbox constraints:
    - Your applications can’t write to the local file system, it has to write to a database service instead if it needs to make data persistent
    - All the requests your application receives have a 60s timeout
    - You can’t install arbitrary 3rd-party software

**Example App Engine standard workflow: Web applications**

1. Develop and test the web application locally
2. Use the App Engine SDK to deploy to App Engine
3. App Engine automatically scales and reliably serves your web application
4. App Engine can access a variety of services using dedicated APIs
- NoSQL data store to make data persistent
- Caching of the data using Memcache
- searching logs
- user logging
- ability to launch actions not triggered by direct user requests (task queue & task scheduler)

### App Engine Flexible Environment
If the restrictions from App Engine standard environment don’t work for you but you still want to take advantage of App Engine → App Engine flexible environment

Instead of the sandbox, App Engine flexible environment allows you to specify the container your App Engine runs in
- Your application runs inside a docker container on Compute Engine VMs
- App Engine manages these VMs for you
    - health check
    - heal as necessary
- You get to choose which geographical region these VMs run in
- Critical backward-compatible updates to these VMs operating systems are automatically applied

### Standard Environment vs Flexible Environment

[Untitled](https://www.notion.so/0397c71416a54be5a99b1c7be7a60e4d)

### Deploying Apps: K8s Engine vs App Engine

[Untitled](https://www.notion.so/97409bd492074d36bd34e579c20af54c)

- App Engine Standard Environment is for people who want the service to take the maximum control of their application deployments and scaling
- K8s Engine gives the application owners the full flexibility of K8s
- App Engine Flexible Environment is in between App Engine Standard Environment and K8s Engine

**App Engine Environments treat containers as a means to an end, but for K8s Engine, containers are a fundamental organizing principle.**