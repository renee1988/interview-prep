## GCP RESTful APIs
The services that make up GCP offer APIs so that the code you write can control them.
- Programmatic access to products and services
    - Typically use JSON as an interchange format
    - Use OAuth 2.0 for authentication and authorization
- Enabled through the GCP console
- Most APIs include daily quotas and rates (limits) that can be raised by request
    - Important to plan ahead to manage your required capacity

API explorer is an interactive tool that lets you easily try Google APIs using a browser
- Browse quickly through available APIs and versions
- See methods available for each API and what parameters they support along with inline documentation
- Execute requests for any method and see responses in real time
- Easily make authenticated and authorized API calls

Use client libraries to control GCP resources from within your code
- Cloud Client Libraries
    - Community-owned hand-crafted client libraries
- Google API Client Libraries
    - Open source, generated
    - Support various languages