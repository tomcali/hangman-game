// hangman-style game for teaching statistics

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


// readGameData.js contains an array of JSON objects for the game items
console.log(gameData);

// choose an term at random
var indexOfTerm = getRandomInt(0, gameData.length - 1)
selectedTerm = gameData[indexOfTerm]

console.log('selected term:', selectedTerm['term'])
console.log('selected hint:', selectedTerm['hint'])
console.log('selected definition:', selectedTerm['definition'])