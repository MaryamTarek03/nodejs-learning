# Branching and Switch Cases
## If / Else Blocks

```js
const rate = 10;
if (rate > 7) {
  console.log("This game is great!");
} else if (rate > 4) {
  console.log("A mid game.");
} else {
  console.log("You better play another game.");
}
```
## Switch Case

```js
function getDescription() {
    switch (type){
        case "Demon":
            return "A creature from the underworld.";
        case "Warrior":
            return "A brave fighter skilled in combat.";
        case "Mage":
            return "A master of the arcane arts.";
        default:
            return "Unknown type.";
    }
}
```
# Loops

- Pretty basic loops, with `break` and `continue` staff
## For Loop

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

## While Loop

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

## Do While Loop

- It is activated at least once
```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

## For Each Loop

```js
const gamesList = [
    { name: 'Hollow Knight', genre: 'Metroidvania' },
    { name: 'Celeste', genre: 'Platformer' },
    { name: 'Undertale', genre: 'RPG' }
];

gamesList.forEach(game => {
    console.log(`Name: ${game.name}, Genre: ${game.genre}`);
});
```
### For In Loop
- Like a for each loop

```js
let game = {
  title: "Karma: The Dark World",
  genre: "Horror",
};

for (const key in titan) {
  console.log(`${key}: ${game[key]}`);
}
/* output
  title: Karma: The Dark World
  genre: Horror
*/
```

# Array Filters

## Map

```js
const nums = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

## Filter
```js
const numbers = [5, 1, 31, 7, 16, 2, 8, 4, 12];
const filteredNumbers = numbers.filter(num => num > 10);
```

## Reduce
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((currentSum, current) => currentSum + current, 0);
console.log(sum); // Output: 10
```