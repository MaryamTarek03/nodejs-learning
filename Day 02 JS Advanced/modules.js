import { calculateScore, formatPlayerName } from './utils.js';

// Example usage of the imported functions
const playerName = formatPlayerName('maryam tarek');
const playerScore = calculateScore(5, 3, 2);

// Error example
// const playerName = formatPlayerName(5); // Name must be a non-empty string
// const playerScore = calculateScore(5, 'NaN', 2); // All parameters must be numbers

// Output the results
console.log(playerName); // Output: Player: Maryam tarek
console.log(`Score: ${playerScore}`); // Output: Score: 520