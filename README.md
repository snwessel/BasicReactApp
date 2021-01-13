# Basic React App

_A basic React App with my personal config preferences._

## Getting Set Up For Development

First and foremost, make sure you have [Node](https://nodejs.org/) installed.

- Clone the repository
- Move into the new local repo
- Install dependencies (`npm install`)
- Launch the environment locally (`npm start`), then open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## A Guide for Contributers

1. Create a branch, named something like `name-typeofchanges` (ex. `sarah-navbar`)
   - Pull your changes from the `main` branch
   - Commit your changes to your branch as you work on them
   - When you commit, your changes will be automatically formatted using [prettier](https://prettier.io/). You can also run the auto-formatting using `npm run format`.
2. Create a pull request - Include a short description of what you worked on screenshots of the changes you made
   - You can create the pull request by going to branches -> select your branch -> click "Create Pull Request" (make sure all of your changes have been pushed to `origin` first)
3. Tweak your changes based on any feedback you get.

## Branches

- **Main branch** (`main`): production-ready site that gets deployed. Merging should only happen from development to master.
- **Development branch** (`develop`): branch for developers to merge in their features as they are completed. PR should be made from feature branch to develop.
- **Feature branches**: Each developer should make a new branch for their work from the development branch in the following format: `sarah-navbar` (lowercase first name, short description of changes). Make a pull request into develop after your work has been completed. Please note that new experimental changes to your code should not be made when a PR is open.

## Tools and Frameworks

- [React](https://reactjs.org/docs/hello-world.html) - JavaScript library for building user interfaces or UI components
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - A framework for building responsive, mobile-first sites
