# namste-react

12 sep 2023

- we don't hv to put autogenrated files or folders on git.
- e.g. 1) node modules 2) dist 3) parcel-cache
- npm: npm repository contains all the packages
- package.json is configuration for all the npm packages.
- ^ in package.json upgrades minor version change in pkg.
- ~ will install major version
- always putting ^ is safe, if upgrade major version so many things in app can break.
- npm install -D parcel
- -D represents install as dev dependancy
- package.lock.json: keeps exact version of each dependancy.
- integrity in lock files is use to keep exact version hash for production.
-

15 sep 2023

- using cdn links for react is not good way, becoz it will make network call, and if react version changes we need to update the cdn links.
- better way to use react by installing it
- when we install react it is added to node modules.
- import React from 'react' , react is located in node modules.

Parcel

- local server
- Creates Dev
- Caching -faster builds
- image optimization
- bundling
- minification
- Hot Module Replacement

- Poduction build takes more time than dev build due to more optimisation.
- Production build command : npx parcel build index.html (u may get error for main:App.js in package.json )
- we should put /dist and parcel-cache folde rin .gitignore , it can be generated on server.
- Browserslist is npm package , by which we can make our work on different version of different browsers.
- with this we hv created app like create-react-app without using it.

26 sep 2023
React.createElement => Js Object => HtmlElement(by render method).
JSX => React.createElement(Babel transpiles code to understand javascript engine) => Js. Object => HtmlElement
use camelCase for jsx attributes.
