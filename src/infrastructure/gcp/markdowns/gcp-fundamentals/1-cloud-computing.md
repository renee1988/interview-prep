## What is cloud computing?
- On-demand self-service: No human intervention needed to get resources
- Broad network access: Access from anywhere
- Resource pooling: Provider shares resources to customers
- Rapid elasticity: Get more resources quickly as needed
- Measured service: Pay only for what you consume

## GCP computing architectures
- Compute Engine: IaaS
    - Virtualized data centers
    - Provides raw compute, storage and network
    - **You pay for what you are allocated**
- Kubernetes Engine: Hybrid
- App Engine: PaaS
    - bind application code you write to libraries that give access to the infrastructures your application needs, this way you can focus on your application logics
    - **You pay for what you use**
- Cloud Functions: Serverless logic
- Managed services: Automate elastic resources

## Google Network
When an internet user sends traffic to Google resource, Google responds to the user’s request from an edge network location (provides the lowest latency)

- Google’s edge caching network sites content close to the end users to minimize latency

## Organization of GCP

GCP is organized into regions and zones:

- Zones are grouped into regions
- Google cloud storage allows you place data into multi-regions

## Why GCP?

GCP enables developers to build, test and deploy applications on Google’s highly secure, reliable and scalable infrastructure.

- Compute
    - Compute Engine
    - Kubernetes Engine
    - App Engine
    - Cloud Functions
- Storage
    - Bigtable
    - Cloud Storage
    - Cloud SQL
    - Cloud Spanner
    - Cloud Datastore
- Big data
    - Big Query
    - Pub/Sub
    - Data flow
    - Data proc
    - Data lab
- Machine learning
    - Natural Language API
    - Vision API
    - Machine Learning
    - Speech API
    - Translate API
- Networking
- Operations and Tools
