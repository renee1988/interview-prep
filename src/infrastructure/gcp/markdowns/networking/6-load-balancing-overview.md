_______________________________________________________________________________
## Load Balancing Overview
Cloud load balancing gives you the ability to distribute load balance computer resource in single or multiple regions to meet your high availability of requirements, to put your resources behind a single Anycast IP address, and to scale your resources up or down with intelligent autoscaling.

Using load balancing, you can serve content as close as possible to your users on a system that can respond to over one million queries per second.

Cloud load balancing is a fully distributed, software-defined, managed service. It is not instance or device based, so you do not need to manage a physical load balancing infrastructure.

GCP offers different types of load balancers that can be devided into two categories, **global** and **regional**.

### Global load balancer
The global load balancers are:
* HTTP(s) load balancer
* SSL proxy load balancer
* TCP proxy load balancer

These balancers leverage the Google Front Ends which are software-dfined, distributed systems that sit in Google points of presence and are distributed globally.

You want to use a global load balancer when your users and instances are globally distributed, your users need access to the same applications and content, and you want to provide access using a single Anycast IP address.

### Regional load balancer
The regional load balancers are:
* Internal TCP/UDP load balancer
* Network TCP/UDP load balancer
* Internal HTTP(s) load balancer

These load balancers distribute traffic to instances that are in a single GCP region.

The Internal TCP/UDP load balancer uses *Andromeda*, wihch is GCP software-defined network virtualization stack.

The Network TCP/UDP load balancer uses *MATLAB* which is a large distributed software system.

The Interal HTTP(s) load balancer is *a proxy-based Layer 7 load balancer* that enables you to run and scale your services behind a private load balancing IP address that is accessible only in the load balancer region in your VPC network.