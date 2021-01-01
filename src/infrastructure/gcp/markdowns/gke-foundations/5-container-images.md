_______________________________________________________________________________
## Container Images
An application and its dependencies are called an image.
* A container is simply a running instance of an image.
* By building software into container images, developers can easily package and ship an application without worrying about the system it will be running on.

**Docker** is a tool to build container images and run them.

### Containers use a set of Linux technologies

#### Linux proccesses
* Each Linux processes has its own virtual memory address phase, separate from all others.
* Linux processes are rapidly created and destroyed.

* Containers use *Linux namespaces* to control what an application can see, process ID, directory trees, IP addresses and more.
* Containers use *Linux cgroups* to control what an application can use, its maximum consumption of CPU time, memory, IO bandwidth and other resources.
* Containers use *Union File System* to efficiently encapsulate applications and their dependencies into a set of clean minimal layers.

### Container structure
Containers are structured in layers. The tool to build the container image (e.g., Docker) reads instructions frmo a file called "Container Manifest" (e.g., Docker file).
* Each instruction in the Docker file specifies a layer inside the container image.
* Each layer is *READ ONLY*.

#### Example Docker file
```
# Creates the first layer: Pulls a base image from a public repository.
FROM ubuntu:18.05
# Creates a new layer: contains files copied in from your build tools current directory.
COPY ./app
# Builds the application using make command and puts the result of the build into a third layer.
RUN make /app
# Last layer: specifies what command to run within the container when it is launched.
CMD python /app/app.py
```

The best practice is NOT to build your application in the very same comtainer that you ship and run.
* Application packaging relies on a multi-stage bulid process in which one container builds the final executable image, a separate container receives only what is needed to actually run the application.

### Container layer
When you launch a new container from an image, the container runtime adds a new *writable* layer on the top of the underlying layers: Container Layer
* all changes made to the running container (e.g., writing new files, modifying existing files and deleting files) are written in this thin writable container layer.
* when the container is deleted, the contents of this writable layer are lost forever.
* the underlying container image itself remains unchanged.

This fact about containers has an implication for your application design: whenever you want to store data permanently, you must do so somewhere other than a running container image.

Since each container has its own writable container layer and all changes are stored in this layer, multiple containers can share access to the same underlying image and yet have their own data state.

### Container Registry
Google maintains a Container Registry, gcr.io. This registry contains many public open source images and GCP customers use it to store their own private images in a way that integrates well with Clou IAM.
* You can store your images that are not public. They are private to your GCP project.

### Cloud Build
You can use Docker command to build your own Container images, one downside is that you must trust the computer you do your builds on.

Google provides a managed service for building containers that is also integrated with Cloud IAM: Cloud Build.
* Cloud Build can retrieve the source code for your builds from a variety of different storage locations: Cloud Source Repositories, Cloud Storage or git compatible repositories.
* To generate the build with Cloud Build, you can define a series of steps.
  * you can configure build steps to fetch dependencies, compile source code, run integration tests, or use tools like Docker, Gradle and Maven.
  * each build step in Cloud Build runs in a Docker container.
* Then Cloud Build can deliver your newly built images to various execution environments: GCF, GCA, GCE, GKE, etc.

### Lab
quickstart.sh:
```shell
#!/bin/sh
echo "Hello, world! The time is $(date)."
```

Docker file:
```
FROM alpine
COPY quickstart.sh /
CMD ["/quickstart.sh"]
```

Run the following command to build the Docker container image in Cloud Build
```shell
gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/quickstart-image .
```

```shell
# Clone the training repository
git clone https://github.com/GoogleCloudPlatform/training-data-analyst
# Create a soft link as a shortcut to the working directory
ln -s ~/training-data-analyst/courses/ak8s/v1.1 ~/ak8s
cd ~/ak8s/Cloud_Build/a
```

A sample Cloud Build configuration yaml file:
```
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: [ 'build', '-t', 'gcr.io/$PROJECT_ID/quickstart-image', '.' ]
images:
- 'gcr.io/$PROJECT_ID/quickstart-image'
```

This configuration file instructs Cloud Build to use Docker to build an image using the Dockerfile speficication in the current local directory, tag it with `gcr.io/$PROJECT_ID/quickstart-image`.

```shell
# Push the image to Container Registry
gcloud builds submit --config cloudbuild.yaml .
```

The true power of custom build configuration files is their ability to perform other actions, **in parallel or in sequence**, in addition to simply building containers: running tests on your newly built containers, pushing them to various destinations, and even deploying them to Kubernetes Engine.

```
steps:
- name: 'gcr.io/cloud-builders/docker'
  args: [ 'build', '-t', 'gcr.io/$PROJECT_ID/quickstart-image', '.' ]
# quickstart.sh script simulates a test failure when an argument ['fail'] is passed to it.
- name: 'gcr.io/$PROJECT_ID/quickstart-image'
  args: ['fail']
images:
- 'gcr.io/$PROJECT_ID/quickstart-image
```