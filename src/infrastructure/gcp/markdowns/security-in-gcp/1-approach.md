Google Technical infrastructure:
* Global-scale technical infrastructure for:
  * Secure deployment of services
  * Secure storage data
  * Secure communications between services
  * Safe operation by administrators
* Internet services, including GCP, built on this infrastrucure

## Google infrastructure security layers
<pre>
        ------------------------
       |  Operational Security  |
        ------------------------
       | Internet Communication |
        ------------------------
       |    Storage Services    |
        ------------------------
       |     User Identity      |
        ------------------------
       |   Service Deployment   |
        ------------------------
       | Hardware Infrastructure|
        ------------------------  
</pre>

Security is:
* Fudamental to Google infrastructure design
* Designed and built in progressive layers
* Delivers true defense in depth

### Secure low level infrastructure: Hardware Infrastructure
Google designs and builds its own data centers.
* It incorporates multiple layers of physical security protection
* Access to these data centers is limited to a small fraction of Google employees
* Both server boards and networking equipment in Google data centers are custom-designed by Google
* It also designs custom integrated circuits including a hardware security chip called `Titan`, that is currently being deployed on both servers and peripherals

### Secure service deployment
Google infrastructure provides cryptographic privacy and integrity for RPC data on the network.
#### RPC: remote procedure call
RPC is a protocol that Google services communicate with each other and allows the infrastructure to automatically lencrypt RPC traffic in transit between data centers.

### Secure user identity
Google login page goes beyond asking for a simple username and password, it also intelligently challenges the users for additional information based on risk factors.
* logged in from the same device or a similar location in the past
* users can use second factor when signing in:
  * device based on universal second factor
  * UTF open standard

To guard against phishing attacks, all Google employees require the sue of UTF compatible security keys.

### Secure data storage
In Google, all data is encrypted at rest by default. You do not need to enable or configure anything.

The default encryption:
* leverages Google managed encryption keys
* supports customer managed encryption keys: you can manage your own encryption keys with the Google Key Management service (KMS) and customer supplied encryption keys where you can provide and manage your own keys

### Secure internet communication
Google externalized services register themselves with an infrastructure service: Google Front End (GFE).
* GFE checks incoming network connections for correct certificates and best practices
* GFE supports strong encryption and amps protection against denial of service attacks or Dos
  * Behind GFE, Google has multi-tear multi-layer denial of service protection that further reduce the risk of any DoS impact

GCP customers can take advantage of this type of extra protection by using the Google Cloud Load Balancer.

GPC offers customers additional transport encryption options for connecting on-premise resources to the cloud.
* Cloud VPN for establishing ipset connections
* Direct interconnect
_______________________________________________________________________________
## VPC Network Security and Monitoring
### VPC: Virtual Private Cloud
You can logically isolate networks when you define your resources.
You can control all network ingress, inbound and egress outbound traffic to any resource all neural network via simple firewall rules.
### Logging and Monitoring
Logging and monitoring enable application analysis, network forensics, access patterns, performance profiling and more.
* helps indentify security or operational risks to your organization
* GCP Stackdriver service: debugging, monitoring, and diagnosticss
_______________________________________________________________________________
## Google Cloud Shared Security Model
When you build an application with On-Premise infrastructure, you are responsible for the physical security of the hardware and the premises in which it is housed.
* encryption of the data on disk
* the integrity of your network
* security of the content stored in your application

When you move to GCP, Google handles many of the lower layers of the overall security stack.

The upper layers of the security stack remain the responsibility of the customers. Google provides tools to help customers implement the policies they choose at these layers:
* Cloud Identity
* Access Management
* Cloud IAM

**One aspect of security which is always the responsibility of the customer is DATA ACCESS.**

You are the one who controls who has access to your data, it must be properly configured.

### Example
When calling a Google API to retrieve data, API requests are done via a REST service call. To safeguard your information, AuthN information must be included with these requests.

It is very common for legal requirements to require a vulnerability assessment or penetration tests, against your Cloud resources.
_______________________________________________________________________________
## Threats Mitigation by Google and GCP
Many of the threats your systems and applications face are automatically mitigated by using Google's infrastructure.

Protecting from large Internet attacks can be very hard and cause huge resource consumption. As a GCP customer, you are protected by default from many kinds of attacks because the scale of Google infrastructure enables you to simply absorb them.

### DDoS attacks
Denial of service attack is an attempt to make an online service unavailable by overwhelming the service with traffic from multiple sources.
* a huge DDoS attach is clocked at strength of around one TB per second
* the whole of the internet has a bnadwidth of 200 TB per second
* a Google data center has a bandwidth of 1300 TB per second

In GCP, we have time to isolate the attack and address it. In GCP, customers also benefit directly from central DDoS mitigation service that provides additional multi-tier, multi-layer protection.
* DDoS Mitigation service reduces the risk to services running behind GFE by detecting when an attack is taking place and configuring load balances to drop or throttle traffic associated with the attack.
* There is no additional configuration required -> Google Cloud Load Balancer

### Google Cloud Armor
Cloud Armor works in conjunction with Global HTTP/HTTPs load balancing and enables you to deploy and customize defenses for your internet-facing applications.
_______________________________________________________________________________
## Data Access Transparency
When moving your system to the Cloud, a common concern is access transparency, knowing exactly what is happening to your data.

GCP customers own their data, not Google.

GCP audit logs provide visibility into the actions of your own administrators. This audit trail typically stops once your cloud provider support or engineering team is engaged. For example, if you open a ticket with Google Support, that would require data access. This access would not have been reflected in an audit log.
