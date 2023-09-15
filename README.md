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
- using cdn links for react is not good way, becoz it will make network call, and if react version changes we need to update the cdn links.
- better way to use react by installing it
- when we install react it is added to node modules.
- import React from 'react' , react is located in node modules.
