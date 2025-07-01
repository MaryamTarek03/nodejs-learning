async function loadGames() {
    return fetch('https://jsonplaceholder.typicode.com/users') // fetching returns a promise
    // we can distort the link to test the error handling 'https://jsonplacder.typide.com/users'
}
async function loadUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
}

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
let promise;
Promise.all([
    loadGames(), // This will return a promise
    promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Timeout resolved'); // This will resolve after 2 seconds
        }, 2000);
    }),
    loadUsers()
])

console.log(promise); // This will log the promise object
console.log('This will run immediately after the promise is created, not after it is resolved');

// we can await the promise to get the resolved value
(async () => {
    const result = await promise;
    console.log(result); // This will log 'Timeout resolved' after 2 seconds
})();

// Output:
// Games loaded
// Load games attempt finished
// Promise { <pending> }
// This will run immediately after the promise is created, not after it is resolved
// Timeout resolved