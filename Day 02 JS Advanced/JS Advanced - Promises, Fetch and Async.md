# Synchronous vs Asynchronous Programming
![[Pasted image 20250630231049.png]]
> - Image is from Lane - boot.dev
- **Synchronous** code runs *sequentially* 
- **Asynchronous** code runs *concurrently*
---
## 1. Callbacks
> When we have a function that takes time to complete, we usually add an event listener to listen when the function is done, and then call the function we want after, this is called **callback** function

```js
function play(callback){
    console.log("Playing");
    callback();
}
play(() => {
    console.log("Callback executed");
})
// Playing
// Callback executed
```
##### Callbacks Drawbacks
- Causes so many nested callbacks
- Older way of doing Async work
---
## 2. Promises
> A better way to handle Async code
- When we give Promise a function it runs immediately
```js
new Promise(() => {
	console.log("Promise");
})
```
> The Promise object has two output states, either the Promise is **resolved** or **rejected**

```js
const promise = new Promise((resolve, reject) => {
    if (hasArrived) {
        resolve("The package has arrived!"); // These strings are returned
    } else {
        reject("The package has not arrived yet.");
    }
})
```
> With the Promise you can execute functions after it; in case of resolve, reject or in both outcomes

`.then()`: **Resolved** case
`.catch()`: **Rejected** case
`.finally()`: Will execute **regardless of the outcome**
```js
promise
    .then(() => {
        console.log("Success: The package has arrived!");
    })
    .catch(() => {
        console.log("Error: The package has not arrived yet.");
    })
    .finally(() => {
        console.log("This will always execute regardless of the outcome.");
    });
```

##### `Promise.all()` Help us in 
- Running **multiple promises** at the **same time** 
- Waiting for **all** of them **to finish**
```js
Promise.all([
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('Promise 1 resolved');
            resolve('Result from Promise 1');
        }, 1000);
    }),
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('Promise 2 resolved');
            resolve('Result from Promise 2');
        }, 2000);
    }),
])
.then((results) => {
    console.log('All promises resolved');
    console.log(results); // ['Result from Promise 1', 'Result from Promise 2']
});
```
#### Fetch, it returns a **Promise**
```js
function loadGames() {
    fetch('https://imagine-api-here/games') // fetching returns a promise
		.then(response => {
			return response.json(); // response.json() also returns a promise
		}).then(response => {
			console.log(response); 
			// response is the JSON data returned once the promise is resolved
		})
}
```

---
## 3. Async / Await
> Even better way for handling Async code

> - Async wraps the function in a Promise
- Now we can use `.then()` and `.catch()` on it
```js
loadGames().then(() => {
    console.log('Games loaded successfully');
});
```
- Or use **Await**

> - Await stops the execution of a function until the promise is resolved
- Await let us write Async code like normal code
```js
// await is used to wait for the promise to resolve before continuing
await loadGames();
console.log('Games loaded'); // This will run after the promise is resolved
```
> Using this syntactical sugar way of promises, we can use normal [[JavaScript/JS Advanced - Exception Handling and Modules.md|exception handling]]

```js
try{
    // await is used to wait for the promise to resolve before continuing
    await loadGames();
    console.log('Games loaded'); // This will run after the promise is resolved
} catch(error) {
    // This will run if there is an error in the promise (Promise rejected)
    console.error('Error loading games:', error);
} finally {
    // This will run regardless of whether the promise was resolved or rejected
    console.log('Load games attempt finished');
}
```
- You can only use Await inside an Async function
- The resolve value can be returned from await function
```js
const value = await loadGames();
```
- Can be used in `Promise.all()`