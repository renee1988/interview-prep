_______________________________________________________________________________
Containers are lean, op devs can create them in numbers far exceeding the counts of virtual machines you used to have. The applications running in the containers need to communicate over the network. However you do not have a network fabric that lets containers find each other. How can you manage your container infrastructure better?

**K8s is an open source platform that helps you orchestrate and manage your container infrastructure on-premises or on the cloud.**

### What is K8s?
K8s is a container-centric management environment.
* K8s automates the deployment, scaling, load balancing, logging, monitoring and all the other features of containerized applications. (These are the features that are characteristic of a typical PaaS)
* K8s also facilitates the features of IaaS:
  * allows a wide range of user preferences and configuration flexibility
* K8s supports *declarative configurations*. When you administrate your infrastructure declaratively, you describe the desired state you want to achieve instead of issuing a series of commands to achieve that desired state. K8s job is to make the deployed system conform to your desired state and then keep it there in spite of failures.
* K8s also allows *imperative configuration* in which you issue commands to change the system state. Administrating K8s as scale imperatively will be a big missed opportunity. **One of the primary strengths of K8s is its ability to automatically keep a system in a state that you declare.**
  * Experienced K8s admins use imperative configuration only for quick temporary fixes and as a tool in building a declarative configuration.

### K8s features
* K8s supports different workload types:
  * K8s supports stateless applications such as an Nginx or Apache web server.
  * and supports stateful applications where user in session data can be stored persistently.
  * K8s also supports batched jobs and demon tasks.
* K8s can automatically scale in and out containerized applications based on resource utilization.
  * You can specify resource requests levels and resource limits for your workloads and K8s will obey them.
  * These resource controls improve overall workload performance within a cluster.
* K8s supports workload portability across on-premises or multiple cloud service providers such as GCP, AWS, Azure and others.
  * This allows K8s to be deployed anywhere.
  * You can move K8s workloadss freely without a vendor login.
