_______________________________________________________________________________
## VPC Overview
Managing networking on GCP utilizes a virtual private cloud (VPC).

### What is VPC?
VPC is a global private isolated Virtual Network. VPC network on GCP allows you to create and control your own private logically isolated network.
* On this network, you can deploy your own Google compute resources.
  * GCE instances, GKE intsances, etc.
* Each VPC network in your project provides private communication between your GCP compute resources.

## VPC Firewall
* You can control individual incoming and outgoing traffic for compute resources using *firewall rules*.
* You can connect your own premise network with your VPC network using either at IPsec VPN tunnel or a dedicated interconnect.
  * IPsec VPN tunnel: an Internet Protocol security tunnel is a set of standards and protocols to support secure communication as packets of information are transported from an IP address across network boundaries and vice versa.
    * an IPsec tunnel allows for the implementation of a VPN which an enterprise may use to securely extend its reach beyond its own network to customers, partners and suppliers.
    * IPsec tunnel vs. SSL/TSL:
      * IPsec tunnel provides the most robust cryptographic security: IPsec tunnel encrypts the entire packet of data so fully that no entity can see the source of the data, the data endpoint or the data origination point.
      * SSL/TSL does not have this type of encryption.

GCP firewall rules enable you to allow or deny traffic communication with your VM instances based on a configuration you specify.
* The rules can be applied both ingress and egress traffic.

GCP firewall rules provide enough active network protection and traffic control **regardless of the OS your instances use**.

GCP firewall rules are defined on the VPC as a whole. Since VPC networks can be global in GCP, the firewall rules are also **global**.
* Every VPC network functions as a distributed firewall.
* Firewall rules are defined at a network level, but connections are allowed or denied *on a per instance basis*. In other words, your firewall rules exist not only between your instances and other networks, but also between individual instances within the same network.

### Ways to apply firewall rules
You can apply the firewall rules to all instances in the network meaning that the defined rules apply to every instance running in that VPC network without tags or marks to the incidence in any way.

You can apply rules to instances that are referenced with a tag/name. This requires the instance bound to the firewall rule to be labeled with the firewall rule *target tag*.

You can apply rules based on the service accounts meaning the rules are applied to both new and existing instances that are associated with a service account.
* Note: changing the service account associated with an instance requires you to *stop and reboot* the instance for that change to take effect.

GCP firewall rules are **STATEFUL**. For each initiated connection that is tracked by allow rules in one direction, the return traffic is automatically allowed regardless of any other rule in place. **Firewall rules allow bidirectional communications.**

### Firewall Rule Settings
<table>
    <th>Parameter</th>
    <th>Details</th>
    <tr>
        <td>direction</td>
        <td>ingress or egress (incoming or outgoing)</td>
    </tr>
    <tr>
        <td>source</td>
        <td>only applicable to ingress rules, can be IP address or range, a source tag or a source service account</td>
    </tr>
    <tr>
        <td>destination</td>
        <td>only applicable to egress rules</td>
    </tr>
    <tr>
        <td>protocol and port</td>
        <td>rules can be restricted to apply to specific protocols (e.g., TCP or UDP) only or combinations of protocols and ports only</td>
    </tr>
    <tr>
        <td>action</td>
        <td>allow or deny</td>
    </tr>
    <tr>
        <td>priority</td>
        <td>0-65535, the order in which rules are evaluated, the first matching rule is applied</td>
    </tr>
</table>

### VPC Firewall Defaults
