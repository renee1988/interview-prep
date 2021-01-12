_______________________________________________________________________________
## Cloud Armor
Cloud Armor works with global HTTP(s) load balancing to provide built-in defenses against infrastructure distributed denial of service or DDoS attacks.
* Cloud Armor enables you to restrict or allow access to your HTTP(s) load balancer at the edge fo the Google Cloud Network, meaning as cloas as possible to the user and to malicious traffic.
* **A DDos attack can be blocked directly at the edge without consuming resources or entering your VPC network.**

What if you need to defend your application from DDoS or web attacks while enforcing Layer 7 security policies?

Regardless of whether your application is deployed in GCP or in a hybrid of multi-cloud architecture, Cloud Armor Web Application Firewall does this for you, and its DDoS mitigation service helps you defend your web apps and services at Google scale and at the edge of Google network.
* IP based and geo based access controls let you filter your incoming traffic based on IPv4 and IPv6 addresses or CIDRs. They enforce geography based access controls to allow or deny traffic based on source geo, using Google Geo IP mapping.
* Preconfigured web application firewalls protect your applications from the web most common attacks like XSS and SQL injection.
* Security controls need to be context-sensitive and tailored to the unique needs of individual applications.

### Lab
1. Create a health check firewall rule
2. Create two regional NAT configurations using Cloud Router
3. Configure two instance templates
4. Create two managed instance groups
5. Configure an HTTP load balancer with IPv4 and IPv6
6. Stress test an HTTP load balancer
7. Deny an IP address to restrict access to an HTTP load balancer

