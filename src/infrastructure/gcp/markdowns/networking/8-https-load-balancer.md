_______________________________________________________________________________
## HTTP(s) Load Balancing
Layer 7 of the OSI model is the application layer which deals with the actual content of each message, allowing for routing decisions be based on the URL.
* HTTPs load balancing acts at this layer.

GCP HTTP(s) load balancing provides global load balancing for HTTP(s) requests, destined for your instances. This means that your applications are available to your customers at a single Anycast IP address, which simplifies your DNS setup.

HTTP(s) load balancing balances HTTP and HTTPs traffic across multiple backend instances and across multiple regions.
* HTTP requests are load balanced on port 80 or 8080
* HTTPs requests are load balanced on port 443
* This load balancer supports both IPv4 and IPv6 clients. It is scalable and requires no pre-warming, and enables content-based and cross-region load balancing.
  * You can configure URL maps that route some URLs to one set of instances, and route another URL to other instances.
  * Requests are generally routed to the instance group that is closest to the user.
  * If the closest instance group does not have sufficient capacity, the request is sent to the next closest instance group that does have capacity.

### Architecture of HTTP(s) Load Balancer

```
x  -----------------         
x |      Global     |        -------------
x |                 |<------|   Internet  |
x | Forwarding Rule |        -------------              ------------------
x  -----------------                               --->| Instance Group A |
x          |                                      |    |      Backend     | 
x          |                                      |     ------------------
x  -----------------          -----------------   |
x |  Target Proxy   |    --->| Backend Service |--|
x  -----------------    |     -----------------   |
x          |            |             |           |
x          |            |             |           |      ------------------
x  -----------------    |      ----------------    ---->| Instance Group B |
x |     URL Map     |---      |  Health Check  |        |      Backend     |
x  -----------------           ----------------          ------------------
```

1. A global forwarding rule directs requests from the internet to a target HTTP proxy.
2. The target HTTP proxy checks each request against a URL map to determine the appropriate backend service for the request.

For example, you can send requests for `www.example.com/audio` to one backend service which contains instances configured to deliver audio files. You can also send requests for `www.example.com/video` to another backend service that contains instances configured to deliver video files.
* The backend service directs each request to the appropriate backend based on serving capacity, zone, and instance health of the attched backends (instances).

The backend serivce contains:
* health check:
  * A health check poll instances attached to the backend serivce at configured intervals.
  * Instances that pass the health check are allowed to recieve new requests.
* session affinity (optional):
  * Normally HTTPs load balancing uses a round robin algorithm to distribute requests among available instances, which can be overwritten by session affinity.
  * Session affinity attempts to send all requests from the same client to the same virtual machine instance.
* timeout setting (30sec by default)
  * This is the amount of time the backend service will wait on the backend before considering the request a failure.
* one or more backends.
  * contains an instance group, a balancing mode, and a capacity scaler.
