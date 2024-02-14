# TypeScript
TypeScript study handbook

### install
npm i -g typescript

### check the installation
tsc -v

### complier .ts file to .js file
tsc .ts

### a package combine complier and excute
npm i -g ts-node

### run .ts file
ts-node .tx

### types
There is already a small set of primitive types available in JavaScript: _boolean, bigint, null, number, string, symbol, and undefined,_ which you can use in an interface. TypeScript extends this list with a few more, such as **any** (allow anything), **unknown** (ensure someone using this type declares what the type is), **never** (it’s not possible that this type could happen), and **void** (a function which returns undefined or has no return value).
