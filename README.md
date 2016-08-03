# lets-try-angular-2-typescript

## Synopsis
This is a project for try out some of the new angular 2 features, and covers some of  the core fundamentals like :
  - Components
  - One-way data binding for read-only data
  - Bind component methods to user events
  - Services
  - Routing
  
## Installation
The repo do not include the modules that list in package.json, it will be installed from a package management
### Prerequisite
Install [Node.js® and npm] (https://nodejs.org/en/download/) if they are not already on your machine.
> Verify that you are running at least node v4.x.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors.

#### Install packages

We install the packages listed in package.json using npm. Enter the following command in a terminal window with admin privileges (command window in Windows):

`npm install`

#### npm scripts

We've captured many of the most useful commands in npm scripts defined in the package.json:



- `npm start` - runs the compiler and a server at the same time, both in "watch mode".
`npm run tsc` - runs the TypeScript compiler once.
- `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
- `npm run lite` - runs the lite-server, a light-weight, static file server, written and maintained by John Papa and Christopher Martin with excellent support for Angular apps that use routing.
- `npm run typings` - runs the typings tool.
- `npm run postinstall` - called by npm automatically after it successfully completes package installation. This script installs the TypeScript definition files this app requires.

> The typings folder could not show up after `npm install`. If so, please install them manually. 
`npm run typings install`

## Testing

### Unit tests

We write our tests with the Jasmine test framework, in order to run its enter the following command.

`npm test`
