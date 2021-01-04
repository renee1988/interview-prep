GCP uses a software defined network, that is built on top of a global fiber infrastructure. This infrastructure makes GCP one of the world largest and fastest networks.

Thinking about resources as services, rather than as hardware, will help us understand the options that are available and their behavior.

## VPC: Virtual Private Cloud
GCP can bring its traffic closer to its peers because it operates an extensive global network of interconnection points.

With GCP, you can provision your GCP resources, connect them to each other and isolate them from one another in a VPC. You can define fine-grained networking policies within GCP and between GCP and on-premises.

Essentially VPC is a comprehensive set of Google managed networking objects.
* Projects encompass every single service that you use, including networks.
* Networks come in three different flavors:
  * default
  * automative
  * custom mode
* Subnetworks allow you to divide or segregate your environment.
* Regions and zones represent Google data centers and they provide continuous data protection and high availability.
* VPC provides IP addresses for internal and external uses, along with granular IP ranges selections.

### Projects, Networks and Subnetworks
A project associates objects and services with billing. It contains entire networks.
* The **default quota** for each project is **five** networks.
* These networks can be shared among other projects, or can be peered with networks in the other projects.
* These networks do NOT have IP ranges, but are simply a construct of all of the individual IP addresses and services within that network.

GCP networks are **global**. Inside a network, you can divide your resources with regional subnetworks.

#### VPC Network flavor: Default mode
* Every project provides a default VPC network with pre-defined subnets and firewall rules.
  * a subnet is allocated for each region with non-overlapping CIDR blocks.
* Each default network has a default firewall rule.

#### VPC Network flavor: Auto mode
* An auto mode network also has one subnet per region.
  * These automatically created subnets use a set of predefined IP ranges with a /20 mask that can be expanded to a /16 mask.
  * All of these subnets fit within the 10.128.0.0/9 CIDR block.
* A default network is actually an auto-mode network.

#### VPC Network flavor: Custom mode
* A custom mode network does NOT automatically create subnets.
* This type of network provides you with complete control over its subnets and IP ranges.
  * You decide which subnets to create in regions you choose, and using IP ranges you specify within the RFC1918 address space.
  * These IP ranges cannot overlap between subnets of the same network.
* You can convert an auto-mode network into a custom mode, but this conversion is ONE-WAY.

#### Example
Assume we have five networks in a project. All of these networks span multiple regions across the world. Each network contains separate VMs: A, B, C and D.
* Assume A and B are in the same network, then they can communicate over internal IP addresses even though they are in different regions.
* Assume C and D are not in the same network, therefore by default C and D must communicate over external IP addresses even though they are in the same region. However the traffic between C and D is not actually touching the internet, but is going through the Google edge routers.

Since VM instances within a VPC network can communicate privately on a global scale, a single VPN can securely connect your on-premises network to a GCP network. The VMs within the VPC network can communicate with the on-premises network using a **VPN gateway**.

#### Subnetworks
Subnetworks work on a **regional** scale. Since a region contains several zones, subnetworks can cross zones.
* Subnetworks can extend across the zones wthin the same region.
* A subnet is simply an IP address range and you can use IP addresses within that range.
  * .0 and .1 are reserved for the network and the subnet gateway respectively.
  * the last two IP addresses are also reserved as broadcast addresses.

<pre>
 ---------------------Network 1---------------------
|   ------------------Region 1------------------    |
|  |            ---Zone A---    ---Zone B---    |   |
|  | subnet-1  |            |  |            |   |   |
|  |     |-----|------------|--|------------|   |   |
|  |     |  |  |    VM-1    |  |    VM-2    |   |   |
|  |     |  |   ------|-----    ------|-----    |   |
|   --------|---------|---------------|---------    |
 --------|--|---------|---------------|-------------
         |  |         |               |
     10.0.0.0     10.0.0.2        10.0.0.3
            |
            |
 Subnet     |
 gateway IP |
        10.0.0.1
</pre>

Note: in the above diagram, you can see that the two Vms are in different zones, but they will still communicate with each other using the same subnet IP address. This means a single firewall rule can be applied to both VMs even though they are in different zones.

The new subnet must not overlap with other subnets in the same VPC network in any region.

The new subnet must stay inside the RFC1918 address space.

The new network range must be **larger** than the original, which mean the prefix length must be smaller in number. In other words, *you cannot undo an expansion.*

Avoid creating large subnets: overly large subnets are more likely to cause CIDR range collisions when using multiple network interfaces and VPC network peering.

### IP Addresses
In GCP, each VM can have two IP addresses assigned: internal and external.

#### Internal IP address
Internal IP address is assigned via DHCP internally. Every VM that starts up and any service that depends on VMs (e.g., GKE, GAE) gets an internal IP address.
* When you create a VM in GCP, its symbolic name is registered with an Internal DNS service that translates the name to the internal IP address.
  * DNS is scoped to the network, so we can translate Web URLs and VM names of hosts in the same network, but it cannot translate host names from VMs in a different network.

#### External IP address
External IP addresses are optional. You can assign an external IP address if your device or your machine is externally facing.
* You can make the external IP address ephemeral or a reserved external IP address, making it static.
  * If you reserve a static external IP address and do not assign it to a resource such as a VM instance or a forwarding rule, you are charged at a higher rate than for static and ephemeral external IP addresses that are in use.

#### Mapping IP Addresses
Regardless of whether you use an ephemeral or static external IP address, the external IP address is unknown to the OS of the VM. The external IP address is mapped to the VM internal address transparently by VPC.

Each instance has a host name that can be resolved to an internal IP address.
* This host name is the same as the instance name.
* There is also an internal fully qualified domain name or FQDN for an instance that uses the format: `[hostname].c.[project-id].internal`.
* If you delete and recreate an instance, the internal IP address can change. This change can disrupt connections from other compute engine resources which must obtain the new internal IP address bfore they can connect again.
* However, the DNS name always points to a specific instance no matter what the internal IP address is.

Each instance has a *metadata server* that also acts as a DNS resolver to that instance.
* The metadata server handles all DNS queries for local network resources and routes all other queries to Google public DNS servers for public name resolution.

The VPC network stores a lookup table that matches external IP addresses with internal IP addresses for the relevant instances.

Instances with external IP addresses can allow connections from host outside of the project.
* Users can do so directly using the external IP address.
* Public DNS records pointing to instances are not published automatically. Admins can publish these using existing DNS servers.
  * Domain and servers can be hosted in GCP using Cloud DNS.

#### Cloud DNS
Cloud DNS is a scalable, reliable and manage autoritative domain name system or DNS servers running on the same infrastructure as Google.

Cloud DNS translates requests from the main names like google.com into IP addresses. Cloud DNS uses Google global network of any cast name servers to serve your DNS zones from redundant locations around the world, providing low latency and high availability for your users.

#### Alias IP ranges
Alias IP ranges lets you assign a range of internal IP addresses as an alias to VMs network interface.
* This is useful when you have multiple services running on a VM and you want to assign a different IP address to each service.
* You can configure multiple IP addresses representing containers or applications hosted in a VM wihtout having to define a separate network interface.

### Routes and Firewall Rules
Routes:
* By default, every network has routes that let instances in a network send traffic directly to each other even across subnets.
* Every network has a default route that directs packets to destinations that are outside of the network.
* You can also create special routes to overrides the default routes.

Firewall rules: Just creating a route does not ensure that your packets will be received by the specific next hop, firewall rules must also allow the packet.
* The default network has preconfigured firewall rules that allow all instances in the network to talk with each other.
* Manually created networks do not have such rules.

Routes match packets by destination IP addresses. However no traffic will flow without matching a firewall rule.

#### Routes
* A route is created when a *network* is created. This is what enables traffic delivery from anywhere.
* A route is created when a *subnet* is created. This is what enables VM on the same network to communicate.

Each route in the route collection may apply to one or more instances.
* A route applies to an instance if the network and instance *tags* match.
  * If the network matches and there are no instance tag specified, the route applies to ALL instances in that network.

Compute Engine (GCE) uses the route collection to create individual read-only routing tables for each instance.
* Every VM instance in the network is directly connected to the **virtual network router** and all packets leaving a VM instance are first handled at this layer before they are forwarded to the next hub.
* The virtual network router selects the next hub for a packet by consulting the **routing table** for that instance.

#### Firewall rules
GCP firewall rules protect your VM instances from unapproved connections, both inbound and outbound (ingress and egress).

Essentially every VP network functions as a distributed firewall. Although firewall rules are applied to the network as a whole, connections are allowed or denied at the instance level.

GCP firewall rules are **stateful**. This means that if a connection is allowed between a source and a target, or a target and a destination, all subsequent traffic in either direction will be allowed. **In other words, firewall rules in a network allow bi-directional communication once a session is established.**

Firewall rule is composed of the following parameters:
* direction: ingress/egress, inbound connections are matched to ingress rules only and outbound connections are matched against egress rules only.
* source or destination
  * For ingress direction, sources can be specified as part of the rule with IP addresses, source tags or a source service account.
  * For the egress direction, destinations can be specified as part of the rule with one or more ranges of IP addresses.
* protocol and port: any rule can be restricted to apply to specific protocols only or specific combinations of protocols and ports only.
* action: to allow or deny packets that match the direction, protocol, port and source or destination of the rule.
* priority: governs the order in which rules are evaluated, the first matching rule is applied.
* rule assignment: all rules are assigned to all instances, but you can assign certain rules to certain instances only.
