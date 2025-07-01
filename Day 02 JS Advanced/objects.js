//  Create an object for a “user” (name, email, age), destructure it, and convert to/from JSON.  

const user = {
    name: "Maryam Tarek",
    email: "maryam@gmail.com",
    age: 30,
}
const { name: username, email, age } = user;
console.log(`Username: ${username}\nEmail: ${email}\nAge: ${age}`);

console.log("Converting to JSON...");
const userJSON = JSON.stringify(user);
console.log("User JSON:", userJSON);

console.log("Converting back to object...");
const userObject = JSON.parse(userJSON);
console.log("User Object:", userObject);