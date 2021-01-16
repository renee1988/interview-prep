_______________________________________________________________________________
## VPC Peering
VPC peering allows private RSC 1918 connectivity across two VPC networks, regardless of whether they belong to the same project or the same organization.

Each VPC network has firewall rules that define what traffic is allowed or denied between networks.

<pre>
x    VPC Peering
x            -------------------------------             -------------------------------
x           |     Organization Node         |           |       Organization Node       |
x           |        example.com            |           |           saas.com            | 
x            -------------------------------             -------------------------------
x            -------------------------------             -------------------------------
x           |     VPC Consumer Network      |           |     VPC Producer Network      |
x Consumer  |                               |           |                               |  Producer 
x  Network--|    Consumer Instance Admin    |           |    Producer Instance Admin    |--Network
x    Admin  |               |               | private ip|              |                |  Admin
x           |               |               |-----------|              |                |
x           |  ---------------------------  |-----------|  ---------------------------  |
x           | |  Project Customer - Prod  | |private ip | |   Project Service - Prod  | |
x           | |                           | |           | |                           | |
*           | |  -----------------------  | |           | |  -----------------------  | |
x           | | | Client compute engine | | |           | | |    Service instance   | | |
x           | |  -----------------------  | |           | |  -----------------------  | |
x           |  -------------------------- | |           |  ---------------------------  |
x            ------------------------------              -------------------------------
</pre>

In order for the VPC peering to be established successfully:
* the Producer network admin needs to peer the Producer network with the consumer network.
* the Consumer network admin needs to peer the Consumer network with the Producer network.

When both peer connections are created, the VPC network peering sessions become active and routes are exchanged.
* This allows VM instances to communicate privately using their internal IP addresses.

VPC network peering is a decentralized or distributed approach to multi-project networking, because each VPC network will remain under the control of separate administrator groups and maintains its own global firewall and routing tables.

### Why VPC peering
VPC network peering does not incur the network latency, security and cost drawbacks that are present when using external IP adresses or VPNs.
* Network latnecy: public IP networking results in higher latency than private networking
* Network security: service owners do not need to have their services exposed to the public internet and deal with it associated risks.
* Network cost: Google Cloud charges egress bandwidth pricing for network using external IPs to communicate, even if the traffic is within the same zone. If the networks are peered, they can use internal IP addresses to communicate and save on those egress costs.

### Remember when using VPC peering
* VPC peering works with GCE, GKE, and GAE flexible environments.
* Peered VPC networks remain administratively separate. This means that routes, firewalls, VPNs and other traffic management tools are administered and apply separately in each of the VPC networks.
* Each side of a peering association is set up independently. Peering will be active only when the configuration from both sides matches. This allows either side to delete the peering association at any time.
* A subnet setter prefix and one peered VPC network cannot overlap with a subnet setter prefix in another peer network. This means that two auto-mode VPC networks that only have the default subnets CANNOT peer.
* Only directly peered networks can communicate. This means that transitive peering is not supported. If VPC network, N_1 is paired with N_2 and N_3, but N_2 and N_3 are not directly connected, then VPC network N_2 cannot communicate with N_3 over peering.

### Shared VPC vs. VPC peering

<table>
<th>
<td>Consideration</td>
<td>Shared VPC</td>
<td>VPC Network Peering</td>
</th>
<tr>
<td>Across organization</td>
<td>NO</td>
<td>Yes</td>
</tr>
<tr>
<td>Within projects</td>
<td>NO</td>
<td>Yes</td>
</tr>
<tr>
<td>Network Administration</td>
<td>Centralized</td>
<td>Decentralized</td>
</tr>
</table>

#### Network administration models of Shared VPC and VPC network peering
* Shared VPC is a *centralized* approach to multi-project networking, because security and network policy occur in a single designated VPC
* VPC network peering is a *decentralized* approach, because each of the VPC networks can remain under the control of separate administrator groups, and maintains its own global firewall and routing tables.

### Some notes
In GCP, you can peer with a shared VPC network. It is also possible to peer two shared VPC networks.

Compute Engine internal DNS names created in a network are not accessible to peered networks. The IP address of the VM should be used to reach the VM instances in peered network.
