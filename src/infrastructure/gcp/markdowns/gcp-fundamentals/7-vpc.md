## Virtual Private Cloud (VPC) Network
### Private Cloud
- A private cloud is a cloud service that is exclusively offered to one organization
- By using a private cloud, an organization can experience the benefits of cloud computing without sharing resources with other organizations

Private Cloud vs Public Cloud
- Private cloud and public cloud both use cloud technologies like virtualization and share characteristics such as scalability and broad access.
- Public cloud can be accessed by multiple customers of the cloud vendor
- Private cloud is only accessible to one organization

#### Hosted private cloud
A hosted private cloud is off-premises instead of on-premises, meaning the cloud servers are not physically located on the grounds of the organization using them.

#### Internal private cloud
An internal private cloud is hosted on an organization’s own premises and is managed by them internally.

### Internal private cloud vs Traditional on-premises data center
- Private cloud is architected with cloud technology
- Private cloud servers will run VMs to maximize the use of the hardware
- Private cloud is in general more efficient, more powerful, and more **scalable**

### Private clouds vs Hybrid Clouds vs Multicloud
- Hybrid clouds combine private clouds and public clouds, can also include legacy on-premises (non-cloud) infrastructure
- Multicloud refers to a combination of multiple public clouds

### Virtual Private Cloud
A virtual private cloud is a secure, isolated private cloud hosted within a public cloud.
- VPC clients can run code, store data, host websites, or anything else in an ordinary private cloud
- VPC is hosted by a public cloud provider
(Restaurant analogy: image a public cloud as a restaurant full of people, a VPC is a reserved table in that restaurant)

### How is a VPC isolated within a public cloud?
A VPC isolates computing resources from the other computing resources available in the public cloud. The key technologies for isolating a VPC from the rest of the public cloud:
- Subnets: a subnet is a range of IP addresses within a network that are reserved so that they are not available to everyone within the network:
    - essentially dividing part of the network for private use
    - these IP addresses are not accessible via the public internet
- VLAN: LAN is a local area network, a group of computing devices that are all connected to each other without the use of the internet.
    - Virtual LAN is a way of partitioning a network
- VPN: A virtual private network uses encryption to create a private network over the top of a public network
    - VPN traffic passes through publicly shared internet infrastructure, routers, switches, etc.
    - VPN traffic is scrambled and not visible to anyone

A VPC has a dedicated **subnet** and **VLAN** that are only accessible by the VPC customer
- This prevents anyone else within the public cloud from accessing computing resources within the VPC
- VPC customers connect via VPN to their VPC, so that data passing into and out of the VPC is not visible to other public cloud users

### Google Cloud VPC Networking
- Each VPC network is contained in a GCP project
- You can provision Cloud platform resources, connect them to each other, and isolate them from one another
    - Segment your network
    - Use Firewall rules to restrict access to instances
    - Create static routes to forward traffic to a specific destination
- Google cloud VPC networks are global, subnets are regional

### Important VPC Capabilities
- VPC has routing tables which are used to forward traffic from one instance to another within the same network, across subnets
- VPC has firewall instance to control what network traffic is allowed
    - You can define firewall rules in terms of metadata tags on compute engine instances, e.g., tag all your web servers with “web” and create a firewall rule saying that traffic on port 80/443 is allowed on all VMs with a “web” tag.
- One can use shared VPC to share a network or individual subnets, with other projects
- One can use VPC peering to interconnect networks in GCP projects

With **global Cloud Load Balancing**, your application presents a single front-end to the world
- Users get a single, global anycast IP address
- Traffic goes over the Google backbone from the closest point-of-presence to the user
- Backends are selected based on load
- Only healthy backends receive traffic.
- No pre-warming is required

Google VPC offers a suite of load-balancing options:
- Global HTTP(s), e.g., cross-region load balancing
- Global SSL proxy, layer 4 load balancing of non-HTTPs SSL traffic based on load
- Global TCP proxy, layer 4 load balancing of non-SSL TCP traffic
- Regional: Load balancing of any traffic (TCP, UDP)
- Regional internal: load balancing of traffic inside a VPC