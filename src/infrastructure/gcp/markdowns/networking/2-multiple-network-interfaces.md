## Multiple Network Interfaces
VPC networks are by default isolated private networking domain. VM instances within a VPC network can communicate among themselves via internal IP addresses as long as the firewall rules permit. However NO internal IP address communication are allowed between networks unless you set up a mechanism such as *VPC peering or VPN*.

Every VM instance in a VPC network has a default network interface. You can create additional network interfaces attached to your VMs through **network interface controllers** or **NICs**.

Multiple network interfaces enable you to create configurations in which an instance connects directly to several VPC networks.
* Each of these instances must have an internal IP address, and each network interface can have an external IP address.
* You might require multiple interfaces if you want to configure an instance as a network appliance that does load balancing, intrusion detection and prevention, web application firewall or WAN optimization between networks.
* Multiple network interfaces can be useful when applications running in an instance require traffic separation such as separation of data plane traffic from management plane traffic.

<pre>
x  -----------------------        -----------------------
x |          VM 1         |      |          VM2          |
x |                       |      |                       |
x | NIC0     NIC1    NIC2 |      | NIC0     NIC1    NIC2 |
x  --|--------|-------|---        --|--------|-------|---
x    |        |       |             |        |       |
x    |        |     --|-------------         |       |
x    |        |    |  |                      |       |
x    |         ----|--|----------------------        |
x    |             |  |                |             |
x    |             |   ----------------|-------------|
x  --|-------------|------        -----|-----   -----|-----
x | SUBNET1     SUBNET2   |      |  SUBNET1  | |  SUBNET1  |
x |                       |      |           | |           |
x |         VPC1          |      |    VPC2   | |    VPC3   |
x  -----------------------        -----------   ----------- 
</pre>

#### Limitations when creating multiple network interfaces
* You can only create network interface when you are creating an instance.
* Each network interface configured in a single instance must be attached to a different VPC network.
* Each network interface must belong to a subnet whose IP ranges do not overlap with the subnets of any other interfaces.
* The additional VPC networks that the multiple interfaces will attach to must exist before you create the instance.
* You cannot delete a network interface without deleting the instance.
* When an internal DNS query is made with the instance host name, it resolves to the primary interface `NIC0` of that instance. If `NIC0` interface of the instance belongs to a VPC network different from the VPC network of the instance, using the internal DNS query will fail.
* Maximum number of network interfaces is **8**.

### Lab

<pre>
# Create a VPC network with custom subnet 
gcloud compute networks create privatenet --subnet-mode=custom
# Create a custom subnet
gcloud compute networks subnets create privatesubnet-us \
  --network=privatenet \
  --region=us-central1 \
  --range=172.16.0.0/24
# List available VPC networks
gcloud compute networks list
# List available VPC subnets
gcloud compute networks subnets list --sort-by=NETWORK
</pre>
