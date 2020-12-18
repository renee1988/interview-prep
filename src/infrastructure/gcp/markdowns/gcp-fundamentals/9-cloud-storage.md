## Cloud Storage
Cloud storage is a binary large-object storage.
- not the same as file storage in which you manage your files in a hierarchy of folders
- not the same as block storage in which your operating system manages your data as chunks of disk
- Object storage means you keep this arbitrary bunch of bytes given to you, the storage allows you address it with a unique key
    - often these unique keys are in a form of URLs → interact nicely with web technologies
    - Cloud storage works very similar to object storage, but better
- **Cloud storage is a fully managed scalable service**
    - you don’t need to provision capacity ahead of time
    - make objects and the service stores them with high durability and high availability

Cloud storage can be used for

- Serving website content
- Storing data for archival
- Distributing large data objects to your end-users via direct download **Cloud storage is not a file system**
- Each of the object stored has a URL
- Cloud storage is comprised of buckets you create and configure and use to hold your storage objects
    - Storage objects are immutable
    - You can’t modify them in place
    - You can create new versions

Cloud storage always encrypts your data on the server side before it is written to disk and data in transit is encrypted using HTTPs

### Cloud Storage Classes
- Multi-regional
    - most frequently accessed
    - content storage and delivery
    - geo-redundant: you can pick a broad geographical location, cloud storage stores your data in at least two geographical locations separated by at least 160km
    - examples: website content, interactive workloads, data that is part of the gaming or mobile applications
- Regional
    - accessed frequently within a region
    - in-region analytics, transcoding
    - stores data closed to the compute engine VMs, or the k8s engine clusters → better performance for data intensive computations
- Nearline
    - accessed less than once a month
    - long-tail content, backups
- Coldline
    - accessed less than once a year
    - archiving, disaster recovery

### Cloud Bigtable
Cloud Bigtable is Google’s NoSQL big data DB service.

> What is NoSQL? Relational database offers you tables in which each row has the same set of columns and the database engine enforces this rule and other rules you specify for each table → database schema

> Enforcing database schema can be great help for some applications but great pain for others.

> Some applications call a much flexible approach: NoSQL schema, for these applications, not all the rows have to have the same columns

The databases in Bigtable are sparsely populated tables that can scale to billions of rows and thousands of columns. Allowing you to store tons of data.

- Cloud Bigtable is a fully GCP managed NoSQL, wide-column database service for terabyte applications.
- **It is ideal for data that has a single lookup key. (some might think of BigTable as a persistent HashTable)**
- It is ideal for storing large amount of data with very low latency
    - High throughput in both read and write
    - great choice for both operational and analytical applications (e.g., user analytics, financial data analysis)

Why Cloud Bigtable?
- Native compatibility with big data, ecosystems **[Hadoop](https://hadoop.apache.org/)**
- Accessed using open source **[HBase](https://hbase.apache.org/)** API (native database for Apache Hadoop)
- Scalability: if you manage your own HBase installation, scaling pass a certain rate of queries per second can be difficult.
    - With Bigtable, you can increase your machine count, which doesn’t even require downtime
- All data in Cloud Bigtable is encrypted in both in-flight and at rest
- Control access using GCP IAM
- Cloud Bigtable powers many applications in Google: Google Maps, Google Analytics, Gmail, etc.

Bigtable Access Patterns
- Application API serving data to applications, dashboards and data services: data can be read from and written to Cloud Bigtable through a data service layer like:
    - Managed VMs
    - HBase REST server
    - Java server using HBase Client
- Streaming: data can be streamed in (written event by event) through a variety of popular stream processing frameworks like:
    - Cloud Dataflow Streaming
    - Spark Streaming
    - Storm
- Batch processing: data can be read from and written to Cloud Bigtable through batch processes like:
    - Hadoop MapReduce
    - Dataflow
    - Spark

### Cloud SQL & Cloud Spanner
Relational database services
- use a database schema to keep your data consistent and correct
- **database transactions**: your applications can designate a group of database changes as all or nothing, either they all get made or undo
    - Without database transactions, your online bank wouldn’t be able to offer you the ability to move money from one account to another

Cloud SQL offers MySQL and PostgreSQLBeta databases as a service
- Cloud SQL provides several replica services (read, failover, and external replicas)
    - **If an outage occurs, Cloud SQL can replicate data between multiple zones with automatic failover**
- Cloud SQL helps you backup your data with either on demand or scheduled backups
- Cloud SQL can scale both vertically (via read and write) and horizontally (via read replicas)
- Cloud SQL instances include network firewalls and customer data is encrypted when on Google’s internal networks and when stored in database tables, temporary files and backups.
- Cloud SQL instances are accessible by other GCP services and external services
    - You can authorize Compute Engine instances for access Cloud SQL instances and configure Cloud SQL instances to be in the same zone as your VMs
    - Cloud SQL can be used with App Engine using standard drivers, and configure Cloud SQL instance to follow an App Engine application
    - Cloud SQL can be used with external applications and clients
        - standard tools can be used to administer databases
        - external read replicas can be configured

Cloud Spanner is a **horizontally scalable** RDBMS
- transactional consistency at a global scale
- managed instances with high availability

Consider using Cloud Spanner if you have out-grown any relational database or sharding your database throughput high performance (e.g., financial applications, inventory applications)

### Cloud Datastore
Cloud Datastore is a horizontally scalable NoSQL database service.
- store structured data from App Engine applications
- build solutions that span App Engine and Compute Engine with Cloud Datastore as the integration point

Cloud Datastore automatically handles sharding and replication, providing you a highly reliable database that scales automatically to handle load.

Cloud Datastore vs Cloud Bigtable
- Cloud Datastore offers transactions that affect multiple database rows
- Cloud Datastore allows you perform SQL-like queries

### Comparing Storage Options

[Comparison Table](https://www.notion.so/32100515424245ba8d9619e19037daa7)

- Cloud Datastore is best for semi-structured application data that is used in App Engine applications
- Cloud Bigtable is best for analytical data with heavy read and write events
- Cloud Storage is best for structured and unstructured binary object data (images, large media files, and backups)
- Cloud SQL is best for web framework in existing applications (e.g., storing user credentials and customer orders)
- Cloud Spanner is best for large-scale database applications that are larger than 2 TB (e.g., financial trading in e-commerce)