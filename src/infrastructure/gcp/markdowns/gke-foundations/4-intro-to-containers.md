_______________________________________________________________________________
## Introduction to Containers
* Not long ago the default way to deploy an application was on its own physical computer.
  * Define physical space, power, cooling, network connectivity, OS installation, software dependencies.
  * If you need more processing power, security or scalability, you have to add more computers.

* Vertualization helped by making possible to run multiple virtual servers and OS on the same physical computer.
  * A hypervisor is the software layer that breaks the dependencies of an OS with its underlying hardware.
  * Hypervisor allows several virtual machines and share that same hardware.
  * KVM is a well-known hypervisor.
  * An application, all of its dependencies and OS are still bundled together and it is not very easy to move from a VM from one hypervisor product to another.
    * Everytime you start up a VM, its OS still takes time to boot up.
    * Running multiple applications within a single VM creates problem where applications that share dependencies are not isolated from each other and the resource requirements from one application can starve out other applications the resource they need.
    * A dependency upgrade for one application might break another application.
    * You can solve the above problems in the way that each application maintains its own dependencies and the kernal is isolated. This way has its own limitations: dedicated VMs are redundant and wasteful.

A more efficient way to resolve the dependency problem is to implement abstraction at the level of the application and its dependencies.
* You do not need to virtualize the entire machine, or even the entire OS, but just the **user space**.
* **User space** is all the code that resides above the kernel and includes the applications and their dependencies.

This is what it means to **create containers**.
* Containers are isolated user spaces per running application code.
* Containers are lightweight because they do not carry a full OS.
* Containers can be scheduled or packed tightly onto the underlying system.
* Containers can be created and shut down very quickly because you are just starting and stopping the processes that make up the application and not booting up the entire VM and initializing OS for each application.

Containerization is the next step in the evolution of managing code.
* Containers are delivery vehicles for application code, they are lightweight, stand-alone, resource efficient and portable execution packages.
* Containers allow you to execute your code on VMs without worrying about software dependencies: application runtimes, system tools, system libraries, and other settings.
  * You package your code with all the dependencies it needs, and the engine that executes your container is responsible for making them available at runtime.
* Containers allow you to safely make assumptions about the underlying hardware and software.
* You make incremental changes to a container image against the production image, you can deploy it very quickly with a single file copy.
* Containers make it easier to build applications that use the microservices design pattern.
  * That is, loosely coupled, fine-grained components.
  * This modular design pattern allows the OS to scale and upgrade components of an application without affecting the application as a whole.
  