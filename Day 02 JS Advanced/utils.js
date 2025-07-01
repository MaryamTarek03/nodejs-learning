// A simple utility function: calculate player's score
function calculateScore(kills, assists, deaths) {
    if (isNaN(kills) || isNaN(assists) || isNaN(deaths)) 
        throw new Error('All parameters must be numbers');
    return (kills * 100) + (assists * 50) - (deaths * 30);
}

// Another utility function: format player's name
function formatPlayerName(name) {
    if (typeof name !== 'string' || name.trim() === '')
        throw new Error('Name must be a non-empty string');
    return 'Player: ' + name.charAt(0).toUpperCase() + name.slice(1);
}

// Export the functions
export{
    calculateScore,
    formatPlayerName
};