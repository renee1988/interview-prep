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

- App Engine’s term for this kind of binary is the

    **runtime**

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

[Comparison Table](https://www.notion.so/0397c71416a54be5a99b1c7be7a60e4d)

### Deploying Apps: K8s Engine vs App Engine

[Comparison Table](https://www.notion.so/97409bd492074d36bd34e579c20af54c)

- App Engine Standard Environment is for people who want the service to take the maximum control of their application deployments and scaling
- K8s Engine gives the application owners the full flexibility of K8s
- App Engine Flexible Environment is in between App Engine Standard Environment and K8s Engine

**App Engine Environments treat containers as a means to an end, but for K8s Engine, containers are a fundamental organizing principle.**