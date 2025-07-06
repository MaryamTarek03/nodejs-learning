# REPL
> **REPL** (Stands for **R**ead-**E**val-**P**rint **L**oop): Is an interactive programming environment inside the terminal.
#### Some Features Include:
1. **Access to Node.js Modules**: You can require and use Node.js modules directly in the REPL.
2. **Multiline Input**: It supports multiline code blocks for more complex logic.
3. **Tab Completion**: Provides autocompletion for commands and variables.
#### How to start REPL?
Just type `node` in your terminal and start writing your code!
#### Why use REPL?
- **Interactive Testing**: You can test small snippets of JavaScript code quickly without creating a file.
# Built-in Modules (FS module)

## Sync Version

```js
import fs from 'fs';
```

```js
import path from "path";

const filePath = path.join(
  process.cwd(),
  "data",
  "test.txt"
);

// Sync file operations
if (fs.existsSync(filePath)) {
  fs.appendFileSync(filePath, " I'm a new addition!"); 
  console.log(fs.readFileSync(filePath, 'utf8'));
  fs.unlinkSync(filePath);
} else {
  fs.writeFileSync(filePath, "Hello World!");
}
```
### In details

> Check if a file exits

```js
 fs.existsSync(filePath);
```

> Add to an existing file (Doesn't replace existing content)

```js
fs.appendFileSync(filePath, "smth to append at the end of the file");
```

> Delete an existing file (it will throw an error if the file does not exist)

```js
fs.unlinkSync(filePath);
```

> Create or write to a file (Replace existing content)

```js
fs.writeFileSync(filePath, "Hello World!");
```
## Async Version
- Refer to the [[JS Advanced - Promises, Fetch and Async|promises]] note for more details
### Callbacks
> In terms of syntax, Same as Sync but with **Callbacks** and no word `Sync`
```js
// Async file operations (Callback)

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

fs.access(filePath, fs.constants.F_OK, (err) => {
  console.log(err ? 'File does not exist.' : 'File exists!');
});
// Output if file exists:
// File exists!
// File content: Hello World!
```
### Promises
```js
import fs from 'fs/promises'

await fs.readFile(filePath);
await fs.writeFile(filePath, "Hello using promises!")
```
# NPM Packages
## Install a Package
> Normal Dependency
```bash
npm i chalk
```
> Dev Dependency

```bash
npm i -D example
```
## `package.json`

> Will look something like this: 
- Notice the dependencies part is what packages you have inside this project
- Also the dev dependencies
```json
{
  "name": "day-04-nodejs-basics",
  "version": "1.0.0",
  "description": "Learning basic NodeJS, NPM Package Manager, Built-In Packages (Like FS)",
  "main": "npm-demo.js",
  "type": "module",
  "scripts": {
    "test": "node npm-demo.js"
  },
  "author": "MaryamTarek03",
  "license": "MIT",
  "dependencies": {
    "chalk": "^5.4.1"
  },
  "devDependencies": {
    "example": "^0.0.0"
  }
}
```
#### As you can guess

> You don't need to share the whole `node_modules` folder

##### `package.json` is enough to recreate the modules
- You just have to run `npm install` , and all the required modules inside `package.json` will be installed