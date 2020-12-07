# App vs. Library Concerns

## If you are using TypeScript

* Improve developer experience, including in-editor docs for your dependencies
* Reduce needs to drill into files to understand how adjacent code works
* TypeScript allows you to encode more information into your source files
* Easier to catch incomplete refactoring

## App-specific concerns

* More richness when working with data.
* Better encapsulation tools (e.g., `private`, `protected`, `public`), to facilitate maintaining lazy loading boundaries (e.g., import types only).
* Improve major version upgrades story for typed libraries.

## Library-specific concerns

* Create and maintain a deliberate public API surface while still being able to create a private API surface to use between modules or components.
* API documentations
