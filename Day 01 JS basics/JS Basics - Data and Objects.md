# Variables
#### Declaring variables
`var`: Old way, have some scope problems
`let`: The variable can be changed later
`const`: The variable can't be changed after declaration and initialization

```jsx
let platform = "PC"; // can change later
console.log(platform);

// const is safer so it's best practice
const game = "Elden Ring"; // can't change

// older way, have some problems so we don't use it anymore
var rating = 9.1;

console.log(typeof game); // string

// NaN (Not a Number)
const var = 'test' / 2; // invalid math

// undefined
let var; // can't do that with const
const var = undefined; // has to manually type it for const
```

# Strings
```jsx
const game = 'Hollow Knight';
const genre = "Platformer";

// template strings can be on multiple lines & can interpolate variables
const description = `The game ${game}
is amazing.
`;
```

# Comparison

```jsx
// there are ===, !== & ==, !=

// it tries to convert types
console.log(5 == '5.00'); // true
// doesn't convert, so it's better to avoid confusion
console.log(5 === '5.00'); // false

// falsy values are:
// false 0 '' NaN null undefined

// guard operator &&
// false short-circuits the line
false && console.log('gaming is boring!'); // won't run the rest of the code

// default operator ||
// true short-circuits the line
true || console.log('gaming is boring!'); // won't run the rest of the code

const isFun = undefined || true // default value is true
```

# Math functions

```jsx
const dice = Math.random(); // returns a random number between 0 and 1
Math.round(5.3); // 5
```

# Functions

```jsx
function play() {
	console.log('Game is starting!');
	return 'Doom Eternal';
	
	console.log('Failed'); // won't run
}

// game is a parameter
function play(game) {
	console.log('Game is starting!');
	return game;
}

const game = play(); // game = 'Doom Eternal'
// 'Minecraft' is an argument to the parameter
game = play('Minecraft'); // game = 'Minecraft'

// arrow function
const play = (title) => {
	console.log(`Playing ${title}!`)
}
```

# Objects

```jsx
const game = {
	name: 'Red Dead Redemption 2',
	genre: 'Action',
	rating: 8.5,
	['release-date']: '', // or 'release-date' without [] for short
	// can have objects or even functions (now called Method) inside objects
	play: function play() {
		console.log('Playing');
	}
};
console.log(game); // { name: 'Red Dead Redemption 2', genre: 'Action', rating: 8.5 }

// Dot notation
console.log(game.name); // Read Dead Redemption 2
game.genre = 'Adventure'; // this changed the value
game.price = 59.99; // added a property
delete game.price; // deleted the property

// Bracket notation
console.log(game['name']);
// helpful when the property name can't be written properly
game['release-date']; // JavaScript would have otherwise interpreted the dash as a minus
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
// this two are the same (destructuring)
const name = game.name;
const { name } = game;

const { name, genre } = game;

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

# null vs undefined

```jsx
function func(p = 'default') {
	// ...
}
func();            // default'
func(undefined);   // default'
func(null);        // null
```

# Auto-boxing

```jsx
// A special object is wrapped around the string, can also work with booleans & numbers
'hello'.length;
'hello'.toUpperCase();
```

