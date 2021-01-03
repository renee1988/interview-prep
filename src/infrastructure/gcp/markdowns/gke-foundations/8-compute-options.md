_______________________________________________________________________________
### Computing options in GCP
* GCE: Google Compute Engine
* GKE: Google K8s Engine
* GAE: Google App Engine
* Cloud Run
* Cloud Functions

#### GCE
**GCE offers VMs that run on GCP.**
* You can select predefined VM configurations.
* These VMs can be as large as 160 vCPUs with more than 3TB of memory.
* You can also create customized configurations to precisely match your performance and cost requirements.

**VMs need block storage. GCE offers you two main choices:**
* persistent disks: offer network stores that cna scale up to 64TB and you can easily take snapshots of these disks for backup and mobility.
* local SSDs: enable very high I/O operations per second.

**You can place your GCE workloads behind global load balancers that support autoscaling.**

**GCE offers a feature called managed instance groups**
* You can define resources that are automatically deployed to meet demand.

**GCP enables fine grained control of costs of GCE resources by per-second billing.**
* This granularity helps reduce your costs when deploying compute resources for short periods of time, such as batch processing jobs.

#### Why GCE?
With GCE, you have complete control over your infrastructure.
* You can customize OS and even run applications that rely on a mix of OS.
* You can easily lift and shift your on-premise workloads into GCP without rewriting your applications or making any changes.

GCE is the best option when other computing options do not support your applications or requirements.

#### GAE
GAE is a fully managed application platform.
* Using GAE means *zero server management* and *zero configuration deployments*.
* If you are a developer, you can focus on building applications and not worrying about the deployment part. GAE  deploys the required infrastructure for you.

GAE supports popular languages: Java, Node.js, Python, PHP, C#, .NET, Ruby and Go.

You can use GAE to run container workloads.

Stackdriver monitoring, logging, and diagnostics (debugging, error reporting) are tightly integrated with GAE.

GAE also supports version control and traffic splitting.

#### Why GAE?
GAE is a good choice if you simply want to focus on writing code, and you do not want to worry about building the highly reliable and scalable infrastructure that will run on.
* You can focus on building application instead of deploying and managing the environment.
* Use cases for GAE: websites, mobile apps, gaming backends, and as a way to present a RESTful API to the internet.
  * What is a RESTful API? In short, it is an API that resembles the way a web browser interacts with the web server. RESTful APis are easy for developers to work with and extend.

#### GKE
K8s is an orchestration system for applications in containers. It automates deployment, scaling, load balancing, logging and monitoring and other management featuers.

GKE extends K8s management on GCP by adding features and integrating with other GCP services automatically.
* GKE supports cluster scaling, persistent disks, automated upgrades to the latest version of K8s, auto-repair for unhealthy nodes.
* GKE has built-in integration with Cloud Build, Container Registry, Stackdriver monitoring and logging.
* Existing workloads running within on-premise clusters can easily be moved onto GCP.

#### Why GKE?
GEK is very well suited for containerized applications. Cloud-native distributed systems and hybrid applications.

#### Cloud Run
Cloud Run is a managed compute platform that enables to run **stateless** containers via web requests or Cloud Pub/Sub events.
* Cloud Run is *serverless*. It distracts away all the infrastructure management so you can focus on developing applications.
* It is built on Knative, an open source K8s based platform. It builds, deploys and manages modern stateless workloads.

Cloud Run give you the choice of running your containers either fully managed or in your own GKE cluster.

Cloud Run enables you to run request or event driven stateless workloads without worrying about servers.
* It absctracts away all the infrastructure management such as provisioning, configuring, managing those servers so you can focus on just writing code.
* It is automatically scaling up and down from zero depending upon traffic quickly. You do not need to worry about scaling configuration.
* Cloud Run only charges you for only the resources that you use calculated down to the nearest 100ms.

#### Why Cloud Run?
Cloud Run use cases:
* Cloud Run enables you to deploy stateless containers that listen for requests or events delivered via HTTP requests.
* With Cloud Run, you can build your applications in any language using whatever frameworks and tools you wish and deploy them in seconds without having to manage and maintain the server infrastructure.

#### Cloud Functions
Cloud Functions is an event-driven serverless compute service for simple single purpose functions that are attached to events.
* In Cloud Functions, you simply upload your code written in JavaScript or Python, or Go and then GCP will automatically deploy the appropriate computing capacity to run that code.
* These servers are automatically scaled and are deployed from highly available and a fault-tolerant design.
* You are only charged for the time that your code runs. For each function invocation, memory and CPU use is measured in the 100ms increments.

With Cloud Functions, your code is triggered within a few milliseconds based on events.
* For example, a file is uploaded to Google Cloud Storage or a message is received from Cloud Pub/Sub.
* Cloud Function can also be triggered based on HTTP endpoints that you define and events in the FireBase mobile application backend.

#### Why Cloud Functions?
Cloud Functions use cases:
* Cloud Functions are usually used as part of a microservices aplication architecture.
* You can also build serverless application backends:
  * Mobile and IoT backends
  * Integrate with 3rd party services and APIs
