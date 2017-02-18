// hangman-style game for teaching statistics

// total wrapper function
// we wrap the entire game code in a standard JavaScript function
// as an alternative to the $(document).ready(function() of jQuery
// another way would be to write  window.onload = function () {
document.addEventListener("DOMContentLoaded", function(event) {

    // readGameData.js contains an array of JSON objects for the game items
    console.log('the game data represent an object with statistical terms,');
    console.log('short hints, and complete definitions of the terms.,');
    console.log(gameData);

    // choose an term at random
    var indexOfTerm = getRandomInt(0, gameData.length - 1);
    var selectedTerm = gameData[indexOfTerm];

    console.log('selected term:', selectedTerm['term']);
    console.log('selected hint:', selectedTerm['hint']);
    console.log('selected definition:', selectedTerm['definition']);

    var numberTargetLetters = selectedTerm['term'].length;
    console.log('number of letters in target: ', numberTargetLetters);

    var target = []; // declare target array for display of solution
    for (i = 0; i < numberTargetLetters; i++) {
        target.push(' ');
    }
    console.log('initial target has: ' + target.length + ' blank characters');

    var termLetters = selectedTerm['term'].split("");
    console.log('termLetters: ', termLetters);

    var termLetterSet = new Set(termLetters);
    console.log('termLetterSet:', termLetterSet);

    var alphabet = ['A', 'B', 'C', 'D',
        'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
    ];

    var alphabetSet = new Set(alphabet);
    console.log('alphabetSet: ', alphabetSet);

    var availableLetterSet = new Set(alphabet);
    console.log('availableLetterSet: ', availableLetterSet);

    var usedLetterSet = new Set(); // begins as empty set
    console.log('initial usedLetterSet: ', usedLetterSet);

    var numberGuessesAllowed = 3; // hangman rules
    var numberBadGuesses = 0; // initialize count prior to for-loop
    var continueGame = true; // Boolean switch use in while loop
    var outcomeMessage = ''; // initialize message showing game outcome
    while ((numberBadGuesses < numberGuessesAllowed) && continueGame) {
        console.log('-----------------------------');
    
    // check to see that the response is valid... 
    // must be a single letter and cannot be a letter 
    // that was chosen previously    
        var responseValid = false;
        while (!responseValid) {
            var promptGuessLetter = 
                prompt('guess a letter').toUpperCase();
            if((alphabetSet.has(promptGuessLetter)) &&
                (!usedLetterSet.has(promptGuessLetter)))
                responseValid = true;
        };
        
        console.log('promptGuessLetter: ', promptGuessLetter);
        // this must be a single letter... no other characters permitted
        // we convert the typed letter to uppercase
        // with each guess we add to the usedLetterSet
        // and delete from the availableLetterSet 
        var thisGuessLetter = promptGuessLetter.toUpperCase();
        console.log('thisGuessLetter: ', thisGuessLetter);

        usedLetterSet.add(thisGuessLetter);
        console.log('current usedLetterSet: ', usedLetterSet);

        availableLetterSet.delete(thisGuessLetter);
        console.log('current availableLetterSet:', availableLetterSet);

        // if the guessLetter is in the termLetterSet then
        //   we take appropriate action to display updated target

        // if the guessLetter is not in the termLetterSet then
        //   we increment the numberBadGuesses 

        if (termLetterSet.has(thisGuessLetter)) {
            // update the target display by adding correct guess letter
            for (i = 0; i < numberTargetLetters; i++) {
                if (thisGuessLetter === termLetters[i]) {
                    target[i] = thisGuessLetter
                }
            }

            console.log('current target display:', target);

            // if there are no longer any blank characters in the target
            // then the game has been won and we pop out of the while-loop
            var targetSet = new Set(target);
            if (!targetSet.has(' ')) {
                outcomeMessage = 'You Win';
                continueGame = false;
            } 
        } else {
            numberBadGuesses++;
            console.log('numberBadGuesses: ', numberBadGuesses)
        } 

    }; // end of major while-loop

    // if finish your alloted numberGuessesAllowed without
    // guessing all the letters... then you lose the game
    // ... but the correct answer is shown with definition

    if (numberBadGuesses === numberGuessesAllowed)
        outcomeMessage = 'Better Luck Next Time';

    console.log('----- outcomeMessage:', outcomeMessage)

}); // end of total wrapper function
