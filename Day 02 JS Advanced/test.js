try{
    const game = {};
    console.log(game.developer.name);
} catch(error) {
    console.error("An error occurred:", error.message); 
    // Output: An error occurred: Cannot read properties of undefined (reading 'name')
} finally {
    console.log("This will always run whaterver the outcome.");
}