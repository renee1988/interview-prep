# Create a Project from Scratch

## Step 1 - Create a folder

<pre>
\\# Create a new folder
mkdir my-lib
cd my-lib

\\# Download gitignore package and use this package as a CLI tool
\\# and pass an argument \\"node\\" to it.
\\# This generates a .gitignore file with all the files that you
\\# do not care to commit to Git while developing a node app.
npx gitignore node

\\# Create a starting-point package.json
\\# Answer \\"yes\\" to all the question promoted
yarn init --yes
</pre>

The following is the output `package.json` file:

<pre>
{
  "name": "my-lib",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
</pre>

## Step 2 - Modify package.json

1. `main` is the entry point of your library. We want to modify it to point to `dist/index.js`.
2. Add scripts/commands

<pre>
{
  "name": "my-lib",
  "version": "1.0.0",
  // Entry point path
  "main": "dist/index.js",
  // The location where consumers can find the type definitions
  "types": "dist/index.d.ts",
  "license": "MIT"
  "scripts": {
      // Run TypeScript compiler
      "build": "tsc",
      // Since this is going to be a small library, we want to
      // only rebuild on change, and tsc by default clears out
      // all the output before rebuild. preserveWatchOutput is
      // to keep the error & warning logs.
      "dev": "yarn build --watch --preserveWatchOutput"
      "lint": "eslint src --ext js,ts",
      "test": "jest"
  }
}
</pre>

## Step 3 - Install dependencies

<pre>
yarn add -D typescript eslint jest
</pre>