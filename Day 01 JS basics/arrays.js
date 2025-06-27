// Exercise: Filter an array of numbers to get only those > 10. 
const numbers = [5, 1, 31, 7, 16, 2, 8, 4, 12];
const filteredNumbers = numbers.filter(num => num > 10);
// -------------------------------------
games = ['Hollow Knight', 'Celeste', 'Undertale', 'Stardew Valley'];
console.log(games[0]); // Hollow Knight

while (games.length > 0) {
    const game = games.pop();
    console.log(`Playing ${game}...`);
}
console.log(`All games played!`); 
// -------------------------------------
// Exercise: Create an array of numbers and use map to double each number
const nums = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
// -------------------------------------
// Exercise: Create an array of objects and use forEach to log each object's name
const gamesList = [
    { name: 'Hollow Knight', genre: 'Metroidvania' },
    { name: 'Celeste', genre: 'Platformer' },
    { name: 'Undertale', genre: 'RPG' }
];
gamesList.forEach(game => {
    console.log(`Name: ${game.name}, Genre: ${game.genre}`);
});
// -------------------------------------
// Exercise: Create an array of numbers and use reduce to sum them up
const ns = [1, 2, 3, 4];
const sum = ns.reduce((currentSum, current) => currentSum + current, 0);
console.log(sum); // Output: 10