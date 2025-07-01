# Destructuring
- In simple words, destructuring means putting iterable elements inside variables
### Arrays
> You can put array elements inside variables
```js
const games = ['Hollow Knight', 'Celeste', 'Undertale', 'Stardew Valley'];
const [ , , thirdGame, ...remainingGames ] = games; // you can also skip elements

console.log(thirdGame); // Undertale
console.log(remainingGames); // [ 'Stardew Valley' ]
```

> If you know the index, you can pick specific elements
```js
const games = ['Hollow Knight', 'Celeste', 'Undertale', 'Stardew Valley'];
const { [0]: firstGame, [2]: thirdGame,...remainingGames } = games;

console.log(firstGame); // Hollow Knight
console.log(thirdGame); // Undertale
console.log(remainingGames); // { '1': 'Celeste', '3': 'Stardew Valley' }
```
### Strings

> You destruct each character
```js
const game = 'Terraria';
const [firstChar, secondChar, ...restChars] = game;
console.log(firstChar, secondChar); // Output: T e
console.log(restChars); // Output: [ 'r', 'r', 'a', 'r', 'i', 'a' ]
```
### Objects
```js
// this two are the same (destructuring)
const name = game.name;
const { name } = game;
const { name, genre } = game;
```
#### Alias
> Another name for the property
```js
const game = {
    title: 'Borderlands 3',
    genre: 'Action RPG',
    releaseYear: 2019,
} 
const { title: gameTitle } = game;
console.log(gameTitle); // Borderlands 3
```

> Destructuring will **not change** the original object

```js
const game = {
    title: 'Hollow Knight',
    genre: 'Metroidvania',
    releaseYear: 2017,
} 
let { title, genre, releaseYear } = game;
title = 'Celeste'; // This will not change the original object

console.log(game.title); // Hollow Knight
console.log(title); // Celeste
```
# Functions
> **Hoisting**: Being able to call a function before defining it 

```js
play();
function play() {
	console.log("Playing...");
}
```

> [!NOTE] Careful!
> **Hoisting** only works with normal functions; variable and arrow functions does not support hoisting

> **Callback**: A function that is passed to another function and called at the end of this function
> More at [[JS Advanced - Promises, Fetch and Async#Callbacks|callbacks]]

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

> `setTimout`: Takes a callback function and call it **after a delay**

```js
setTimeout(() => {
    console.log('This message will get executed after 1 second');
}, 1000);
```
> `setInterval`: Takes a callback function and call it **every defined amount of time**

```js
const intervalID = setInterval(() => {
    console.log('This message will repeat every 2 seconds');
}, 2000);

setTimeout(() => {
    clearInterval(intervalID); // clear the interval
    console.log('Interval cleared after 10 seconds');
}, 10000);
```

> Why were arrow functions made?

- we had a problem when using a normal function, it loses track of `this` and `this` becomes undefined
- so arrow functions fixed that problem by preserving the last `this` they encountered
# Objects
## Object Constructor
##### Unlike classes, Objects does not have constructors
> So we use functions to construct objects
> A function that initializes data uses **PascalCase**

- Example
```js
function Game(title, genre, rating) { // notice the capital G
	this.title = title;
	this.genre = genre;
	this.rating = rating;
}

const game = Game("Elden Ring", "Action", 9.5);
```
## Object is a reference

```jsx
// so basically object is a pointer to a place in memory
// so even if we defined using 'const' we can still change value
const game = {
	name: 'Red Dead Redemption 2',
	genre: 'Action'
};

// now we have two pointers referencing same object 
// and any change on any of them will be reflected on both
const sameGame = game;

const game2 = {
	name: 'Red Dead Redemption 2',
	genre: 'Action'
};

game === game2 // false, different pointers
```

## Object shortcuts

```jsx
// shorthand
const name = 'Portal 2';
const game = {
	// instead of name: name, we can shorthand it
	name,
	genre: 'Puzzle'
};

// shorthand method
const game = {
	name, 
	genre,
	/*
	play: function play() {
		console.log('Playing');
	}
	*/
	play() { console.log('Playing'); }
};
```
# JSON

> What is JSON?
- It is JavaScript Object Notation
- It is **language independent** (not just used in JS)

> Why use JSON?
- It is **lightweight**
- It can be **easily** converted to objects 
- It is a simple text file that can **store/transfer data**

> How to write JSON? (Thanks Yasmine)
1. Data is in **key / value pairs** (Keys are *strings*)
2. Data is separated by **commas**
3. **Curly** braces hold **objects**
4. **Square** brackets hold **arrays**
5. **Comments** are **not** allowed
6. **Trailing commas** are **not** allowed
```json
{
    "games": [
        {
        "title": "Hollow Knight",
        "genre": "Metroidvania",
        "platforms": ["PC", "Switch", "PS4", "Xbox One"]
        },
        {
        "title": "Celeste",
        "genre": "Platformer",
        "platforms": ["PC", "Switch", "PS4", "Xbox One"]
        },
        {
        "title": "Undertale",
        "genre": "RPG",
        "platforms": ["PC", "Switch", "PS4"]
        }
    ]
}
```

> JSON in code
```jsx
game = JSON.stringify(game); // convert JavaScript object into JSON
JSON.parse(game); // JSON into object
```

# localStorage

```jsx
localStorage.setItem('name', 'value'); // only accept strings
localStorage.getItem('name');
localStorage.removeItem('name');

game = JSON.stringify(game);
localStorage.setItem('game', game); // JSON is a string
```

