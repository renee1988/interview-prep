_______________________________________________________________________________
## Managed Instance Groups
A managed instance group is a collection of identical VM instances that you control as a single entity using an instance template.
* You can easily update all of the instances in the group by specifying a new template in a rolling update.
* When new applications require additional compute resources, managed instance groups can automatically scale the number of instances in the group. Managed instance groups **can work with load balancing services** to distribute network traffic to all of the instances in the group.
* If an instance in the group stops, crashes or is deleted by an action other than the instance group commands, the managed instance group automatically recreates the instance, so it can resume its processing tasks. The recreated instance uses the same name and the same instance template as the previous instance. Managed instance groups can automatically identify and recreate unhealthy instances in a group, to ensure that all the instances are running optimally.

Regional managed instance groups are generally recommended over zonal managed instance groups.
* Because they allow you to spread application load across multiple zones, rather than confining your application to a single zone, or having to manage multiple instance groups across different zones.
* This replication protects against zonal failures and unforeseen scenarios, where an entire group of instances in a single zone malfunctions.
* If your application fails in one zone, it can continue serving traffic from instances running in another zone of the same region.

### Creating managed instance group
1. Create an instance template
2. Create managed instance group of N specified instances
3. Instance group manager automatically populates the instance group based on the instance template

#### Create intsance template
1. Choose if the instance group is going to be `single-zone` or `multi-zone`.
2. Choose the ports the instances are going to allow and load balance across.
3. Choose the instance template that you want to use.
4. Decide if you want to autoscale and under what circumstances.
5. Choose if to create a health check to determine which instances should receive traffic.

Applicable autoscaling policies include:
* scaling based on CPU utilization
* load balancing capability
* monitoring metrics
* queue-based workload
