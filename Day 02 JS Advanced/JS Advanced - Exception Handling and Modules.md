# Error Handling
### What are errors?
```js
const error = new Error("This is an error message");
console.log(error.message); // Output: This is an error message
```
### How to handle them?
> Using Try / Catch
```js
try{
    const game = {};
    console.log(game.developer.name);
} catch(error) {
    console.error("An error occurred:", error.message);
    // An error occurred: Cannot read properties of undefined (reading 'name')
} finally {
    console.log("This will always run whaterver the outcome.");
}
```
#### When to try / catch?
- This _might_ tempt you to just wrap everything in tons of `try/catch` blocks, but I'd **advise against that**.
> Rules
- **Do you control the input?**
    - If the variable in question is coming from a user, an API, or some other external source, you should probably wrap its initial handling in a `try/catch` block.
- **Is the error recoverable?**
    - If the error is something you can recover from, like a network request failing, you should probably wrap it in a `try/catch` block. If not, let the program crash.
- **Are you trying to compensate for bad code?**
    - If you wrote some bad code that results in more errors than there need to be, **don't** wrap it in a `try/catch` block. **Fix the code.**
- **Is it really an abort-worthy error?**
    - In a lot of (especially front-end) JavaScript code, there are so many unknowns that it doesn't make sense to lose control of a program just because a variable is `undefined`. That's why the [optional chaining operator (`?.`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) and [nullish coalescing operator (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) were introduced... use them as needed.
### Throwing errors explicitly
```js
throw new Error("something went wrong");
// or
throw "something went wrong";
```
### Try / Catch in Async code
- Refer to [[JS Advanced - Promises, Fetch and Async#3. Async / Await|JS Advanced]]
# Modules (Export and Import)
> To use modern import syntax
- Go to your `package.json` file
- add `"type": "module"`
> Example
### utils.js
```js
// A simple utility function: calculate player's score
function calculateScore(kills, assists, deaths) {
    return (kills * 100) + (assists * 50) - (deaths * 30);
}
// Another utility function: format player's name
function formatPlayerName(name) {
    return 'Player: ' + name.charAt(0).toUpperCase() + name.slice(1);
}
// Export the functions
export{
    calculateScore,
    formatPlayerName
};
```
### modules.js
```js
import { calculateScore, formatPlayerName } from './utils.js';

// Example usage of the imported functions
const playerName = formatPlayerName('maryam tarek');
const playerScore = calculateScore(5, 3, 2);
console.log(playerName); // Output: Player: Maryam tarek
console.log(`Score: ${playerScore}`); // Output: Score: 520
```

## To use modules script in the browser
```html
<script type="module" src="math.js"></script>
<script type="module" src="main.js"></script>
```