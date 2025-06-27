// Exercise: Create a function that checks if a number is even or odd
const isEven = (num) => {
  return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false
const num = 10;
if (isEven(num)){
    console.log(`${num} is an even number.`);
} else {
    console.log(`${num} is an odd number.`);
}
// --------------------------------------------------------
const greet = function(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Maryam")); // Hello, Maryam!
// --------------------------------------------------------
const damage = (enemy, amount) => {
    enemy.health -= amount;
    return `${enemy.type} took ${amount} damage, remaining health: ${enemy.health}`;
}

const enemy = {
    type: "Demon",
    health: 100,
}

console.log(damage(enemy, 20)); // Demon took 20 damage, remaining health: 80
console.log(enemy.health); // 80
// Note: The enemy's health is modified directly in the damage function
// and the object is passed by reference, so the change persists outside the function.
// --------------------------------------------------------
function getDescription(type) {
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
console.log(getDescription("Demon")); // A creature from the underworld.
console.log(getDescription("Warrior")); // A brave fighter skilled in combat.
console.log(getDescription("Mage")); // A master of the arcane arts.
console.log(getDescription("Elf")); // Unknown type.