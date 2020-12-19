## Development in the Cloud

- Developing
- Deploying
- Monitoring

### Cloud Source Repositories

Customers use Git to store and manage their source code trees

- running their own Git instances: you have total control
- using a hosted Git provider: you have less work

Cloud Source Repositories fully features Git repo hosted on GCP

- Keep the code private to a GCP project
- Use IAM permissions to protect it
- No need to maintain the Git instance yourself

Cloud Source Repositories provides Git version control to support your team’s development of any application or service, including those that run on App Engine, K8s Engine and Compute Engine.

- You can have any number of Git repo’s
- Cloud Source Repositories contains a source viewer so that you can browse and view repo files from within the GCP console

### Cloud Functions

If you application contains event-driven parts, for example: an application that allows users to upload images, whenever an image is uploaded, you need to process that image (convert it into a standard image format, create thumbnails with various sizes, and store them into a repo, etc.), you can always integrate this function into your application, then you have to worry about providing compute resources for it. →

**Cloud Functions**

**Cloud Functions create single-purpose functions that respond to events without a service or runtime (serverless)**

- You don’t need to worry about servers or runtime binaries
- You can write your code in JavaScript for a NodeJS environment provided by GCP
- You can configure when it should fire
- You don’t need to pay for servers
- You pay whenever your functions run

Cloud Functions can trigger on events in Cloud Storage, Cloud PubSub, or in HTTP calls.

1. You choose which events you care about, for each event type, you tell Cloud Functions that you are interested in it → these declarations are called **triggers**
2. You attach JavaScript functions to your triggers

Some applications that have a microservice architecture can be implemented entirely in Cloud Functions.

People also use Cloud Functions to enhance their applications without worrying about scaling.