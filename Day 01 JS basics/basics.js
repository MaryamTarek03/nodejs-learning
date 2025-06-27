const name = "Maryam Tarek";
const age = 20;
const isGamer = true;
const hobbies = ["gaming", "coding"];
const currentGame = {
    title: "Clair Obscur: Expedition 33",
    genre: ["RPG", "Turn-based", "Strategy"],
    release_date: "2025-04-24",
    platforms: ["PC", "PS5", "Xbox Series X"],
    developer: "Sandfall Interactive",
    publisher: "Kepler Interactive",
}

const { title, genre, release_date, platforms, developer, publisher } = currentGame;

console.log(`Hello, I'm ${name}. I'm ${age} years old.`);
console.log(`I enjoy ${hobbies.join(", ")} and currently playing ${title}.`);
console.log(`The game is a ${genre.join(", ")} game, released on ${release_date}.`);
console.log(`It's available on ${platforms.join(", ")} and developed by ${developer}, published by ${publisher}.`);
console.log(`Am I a gamer? ${isGamer ? 'yeah, probably' : 'no'}`);